import '@/styles/globals.css'
import { AuthContextProvider } from 'AuthContext'
import {SessionProvider} from 'next-auth/react'
export default function App({ Component, pageProps }) {
  return (
    <SessionProvider>
    <AuthContextProvider>
        <Component {...pageProps} />
    </AuthContextProvider>
    </SessionProvider>
      )
}
