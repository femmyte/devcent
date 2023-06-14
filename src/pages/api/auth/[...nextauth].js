import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import User from "models/User";
import { generateAccessToken } from "lib/helpers/token";
import { sendWelcomeMessage } from "lib/nodemailer/welcome-message";
import { generateUserId } from "lib/utils/random";
import { createUrlName } from "lib/utils/urlName";
import httpService from "services/httpService";

const clientUrl = process.env.NEXT_PUBLIC_CLIENT_URL;

// @description: User signin
// @Endpoint: api/auth/signin
// @AccessType: public
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied

        try {
          const { email, password } = credentials;
          const { data } = await httpService.post("/users/signin", {
            email,
            password,
          });

          const user = {
            ...data.user,
            credentials: true, // set to true to indicate credentials signin
          };

          return user;
        } catch (error) {
          // console.log(err);
          if (error?.response?.data?.message) {
            console.log(error?.response?.data?.message);
            throw new Error(error?.response?.data?.message);
          }

          throw new Error("Connection Problem");
        }
      },
    }),
  ],

  callbacks: {
    async signIn({ user }) {
      // proceed to session if it is credentials sign in
      if (user?.credentials) return true;

      try {
        const { data } = await httpService.post("/users/google-auth", {
          email: user.email,
          name: user.name,
          isGoogleSignup: true,
        });

        console.log("data", data.user);
        return data.user;
      } catch (error) {
        console.log(err);
        if (error?.response?.data?.message) {
          console.log(error?.response?.data?.message);
          throw new Error(error?.response?.data?.message);
        }

        throw new Error("Connection Problem");
      }
    },
    async session({ session }) {
      try {
        const token = generateAccessToken({ email: session.user.email });
        const { data } = await httpService.get("/users/auth", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        session.user._id = data.user._id.toString();
        session.user.userId = data.user.userId;
        session.user.role = data.user.role;
        session.user.urlName = data.user.urlName;
        session.user.enrolledCourses = data.user.enrolledCourses;
        session.user.accessToken = data.accessToken;

        return session;
      } catch (error) {
        console.error(error);
        if (error?.response?.data?.message) {
          console.log(error?.response?.data?.message);
        }
        return false;
      }
    },
  },
  secret: process.env.NEXT_AUTH_SECRET,
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
