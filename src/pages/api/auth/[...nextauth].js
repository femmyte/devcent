import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { generateAccessToken } from "lib/helpers/token";
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
    async signIn({ user, profile }) {
      // proceed to session if it is credentials sign in
      if (user?.credentials) return true;

      try {
        const { data } = await httpService.post("/users/google-auth", {
          email: user.email,
          firstName: profile.given_name,
          lastName: profile.family_name,
          imgUrl: user.image,
          isGoogleSignup: true,
        });

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
    async jwt({ token, user }) {
      // console.log("User: ", user);
      // Persist the user to the token right after signin
      if (user) {
        try {
          const jwt = generateAccessToken({ email: user.email });
          const { data } = await httpService.get("/users/auth", {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          });

          token._id = data.user._id;
          token.userId = data.user.userId;
          token.firstName = data.user.firstName;
          token.lastName = data.user.lastName;
          token.role = data.user.role;
          token.urlName = data.user.urlName;
          token.imgUrl = data.user.imgUrl;
          token.enrolledCourses = data.user.enrolledCourses;
          token.accessToken = data.accessToken;

          return token;
        } catch (error) {
          // console.error(error);
          if (error?.response?.data?.message) {
            console.log(error?.response?.data?.message);
          }
          return false;
        }
      }

      return token;
    },
    async session({ session, token }) {
      // console.log("Session token: ", token);
      session.user._id = token._id;
      session.user.userId = token.userId;
      session.user.role = token.role;
      session.accessToken = token.accessToken;

      return session;
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
