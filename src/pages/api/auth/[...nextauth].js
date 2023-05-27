import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import User from "models/User";
import dbConnect from "lib/db";
import { sendAccountActivationMessage } from "lib/nodemailer/account-activation-message";
import { generateAccessToken, generateToken } from "lib/helpers/token";
import { sendWelcomeMessage } from "lib/nodemailer/welcome-message";
import { generateUserId } from "lib/utils/random";
import { createUrlName } from "lib/utils/urlName";

const clientUrl = process.env.NEXT_PUBLIC_CLIENT_URL;

// @description: User signin
// @Endpoint: api/auth/signin
// @AccessType: public
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials, req) {
        await dbConnect();

        // Add logic here to look up the user from the credentials supplied
        const { email, password } = credentials;
        const user = await User.findOne({ email }).select(
          "-isAuthorizedAdmin -isAuthorizedInstructor"
        );
        if (!user) {
          throw new Error("Invalid email or password");
        }
        const isValid = await user.comparePassword(password);
        if (!isValid) {
          throw new Error("Invalid email or password");
        }

        // if user account is not activated
        if (!user.isActivated) {
          const activationToken = generateToken(20);
          user.activationToken = activationToken;
          user.activationTokenExpiresIn = Date.now() + 30 * 60 * 1000; // 30 minutes
          await user.save();
          const activationUrl = `${clientUrl}/user/activate/${activationToken}`;
          await sendAccountActivationMessage({
            url: activationUrl,
            email: user.email,
            expires: 30,
          });
          throw new Error("activate");
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
          return true;
        }

        // Create User from Google account
        const usersCount = await User.countDocuments({});
        const userId = generateUserId(usersCount);
        const idExists = await User.findOne({ userId });
        if (idExists) {
          throw new Error("Server busy! Try again.");
        }

        const urlName = createUrlName(user.name, userId);
        const newUser = new User({
          userId,
          name: user.name,
          urlName,
          email: user.email,
          isActivated: true,
          isGoogleSignup: true,
        });

        await newUser.save();

        await sendWelcomeMessage({ email: user.email });

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    async session({ session }) {
      const user = await User.findOne({ email: session.user.email });

      session.user._id = user._id.toString();
      session.user.userId = user.userId;
      session.user.role = user.role;
      session.user.urlName = user.urlName;
      session.user.enrolledCourses = user.enrolledCourses;
      session.user.accessToken = generateAccessToken({
        id: user._id,
        role: user.role,
        isAuthorizedAdmin: user?.isAuthorizedAdmin || undefined,
        isAuthorizedInstructor: user?.isAuthorizedInstructor || undefined,
      });

      return session;
    },
  },
  secret: process.env.NEXT_PUBLIC_NEXT_AUTH_SECRET,
  session: {
    jwt: true,
  },
  pages: {
    signIn: "/signin",
  },
};

/*
  Credentials Provider:
  Enables signin with email and password. 
  If user supply invalid credentials, an error object will be returned from the session. The error 
  object contains the error message and status code.

  If user supply valid credentials, an object containing user info and custom token will be returned. 
  The custom token is a JWT that must be sent to the server for authentication. This JWT must be
  attatched to the header as a Bearer token.

  If user with an unactivated account supplied valid credentials, account activation link is sent to the 
  provided email address and an error object is returned from the session. This error object contains 
  error property with value "activate" which can be checked for in order to display a screen that 
  shows that activation link has been sent to the email address. 

  Google Provider:
  Enables signin and signup with Google.
  If user signin/signup is successful, an object containing user info and custom token will be returned 
  from session. The custom token is a JWT that must be sent to the server for authentication. This JWT 
  must be attatched to the header as a Bearer token.

*/

export default NextAuth(authOptions);
