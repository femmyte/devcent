import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import User from "models/User";
import dbConnect from "lib/db";

export const authOptions = {
  // Configure one or more authentication providers
  //   providers: [
  //     GoogleProvider({
  //       clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  //       clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
  //     }),
  //     CredentialsProvider({
  //       //   name: 'Credentials',
  //       //       credentials: {
  //       //        email: { label: "Email", type: "text", placeholder: "Email" },
  //       // password: { label: "Password", type: "password" }
  //       //   },

  //       async authorize(credentials, req) {
  //         //   // Add logic here to look up the user from the credentials supplied
  //         const { email, password } = credentials;

  //         const res = await fetch(`https:/admin/login`, {
  //           method: "POST",
  //           headers: { "Content-Type": "application/json" },
  //           body: JSON.stringify({ email, password }),
  //         });
  //         const user = await res.json();

  //         console.log(res);
  //         if (res.ok && user) {
  //           return user;
  //         } else return null;
  //       },
  //     }),
  //     // ...add more providers here
  //   ],
  //   session: {
  //     strategy: "jwt",
  //   },
  //   // add the sign in page
  //   pages: {
  //     signIn: "/signin",
  //   },

  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile }) {
      await dbConnect();

      try {
        const existingUser = await User.findOne({ email: user.email });
        if (existingUser) {
          user.id = existingUser._id;
          user.customToken = existingUser.getJwtToken();
          return user;
        }

        const newUser = new User({
          name: user.name,
          email: user.email,
        });

        await newUser.save();

        user.id = newUser._id;
        user.customToken = newUser.getJwtToken();
        return user;
      } catch (err) {
        console.log(err);
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
