import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import FullLoader from "components/loaders/FullLoader";

// To protect users from visiting the signin and signup routes after log in

export default function withLogoutAuth(Component) {
  function WithLogoutAuth(props) {
    const router = useRouter();
    const { status } = useSession();

    useEffect(() => {
      if (status === "authenticated") router.push("/");
    }, [status, router]);

    return (
      <>
        {status === "authenticated" ? <FullLoader /> : <Component {...props} />}
      </>
    );
  }

  return WithLogoutAuth;
}
