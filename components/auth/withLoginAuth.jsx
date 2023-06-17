import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import FullLoader from "components/loaders/FullLoader";

// To protect generic routes/pages

export default function withLoginAuth(Component) {
  function WithLoginAuth(props) {
    const router = useRouter();
    const { status, data } = useSession();

    useEffect(() => {
      if (status === "unauthenticated") router.push("/signin");
    }, [status, router, data]);

    return (
      <>
        {status === "authenticated" ? <Component {...props} /> : <FullLoader />}
      </>
    );
  }

  return WithLoginAuth;
}
