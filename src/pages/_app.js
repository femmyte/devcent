import "@/styles/globals.css";
import { AuthContextProvider } from "AuthContext";
import { SessionProvider } from "next-auth/react";
import Layout from "components/common/Layout";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider>
      <AuthContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthContextProvider>
    </SessionProvider>
  );
}
