import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
  // Configure one or more authentication providers
    providers: [
         GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
      //   name: 'Credentials',
      //       credentials: {
      //        email: { label: "Email", type: "text", placeholder: "Email" },
      // password: { label: "Password", type: "password" }
      //   },
            
            
    async authorize(credentials, req) {
    //   // Add logic here to look up the user from the credentials supplied
        const { email, password } = credentials
        
        const res = await fetch(`https:/admin/login`, {
            method: 'POST',
            headers: { "Content-Type": 'application/json' },
            body: JSON.stringify({ email, password })
        })
        const user = await res.json();

        console.log(res);
        if (res.ok && user) {
            return user
        } else return null
    }
  })
    // ...add more providers here
    ],
    session: {
        strategy: 'jwt'
    },
    // add the sign in page
    pages: {
        signIn: '/signin'
    }
}

export default NextAuth(authOptions)