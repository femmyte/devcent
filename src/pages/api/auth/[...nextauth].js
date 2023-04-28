import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import User from "models/User";
import dbConnect from "lib/db";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials, req, res) {
        await dbConnect();
        // Add logic here to look up the user from the credentials supplied
        const { email, password } = credentials;
        const user = await User.findOne({ email });
        if (!user) {
          throw new Error("Invalid email or password");
        }
        const isValid = await user.comparePassword(password);
        if (!isValid) {
          throw new Error("Invalid email or passw");
        }

        return user;
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile }) {
      await dbConnect();

      try {
        const existingUser = await User.findOne({ email: user.email });
        if (existingUser) {
          user.id = existingUser._id;
          user.customToken = existingUser.getJwt();
          return user;
        }

        const newUser = new User({
          name: user.name,
          email: user.email,
        });

        await newUser.save();

        user.id = newUser._id;
        user.customToken = newUser.getJwt();
        return user;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    async jwt({ token, user }) {
      // Persist the custom token and the user id to the token right after signin
      if (user) {
        token.id = user.id;
        token.customToken = user.customToken;
      }

      return token;
    },

    async session({ session, token, user }) {
      // Send properties to the client, like a custom token and user id from a provider.
      session.customToken = token.customToken;
      session.user.id = token.id;

      return session;
    },
  },
  session: {
    jwt: true,
  },
  pages: {
    signIn: "/signin",
  },
};

export default NextAuth(authOptions);
