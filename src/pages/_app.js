import "@/styles/globals.css";
import { AuthContextProvider } from "AuthContext";
import { SessionProvider } from "next-auth/react";
import Layout from "components/common/Layout";
import ReactQuery from "components/query/ReactQuery";
export default function App({ Component, pageProps }) {
  return (
    <SessionProvider refetchOnWindowFocus={false}>
      <AuthContextProvider>
        <ReactQuery>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ReactQuery>
      </AuthContextProvider>
    </SessionProvider>
  );
}
