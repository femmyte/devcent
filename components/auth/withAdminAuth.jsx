import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import FullLoader from "components/loaders/FullLoader";

//  to protect admin specific routes/pages

export default function withAdminAuth(Component) {
  function WithAdminAuth(props) {
    const router = useRouter();
    const { status, data } = useSession();

    useEffect(() => {
      if (status === "unauthenticated") router.push("/signin");
      else if (data && data?.user?.role !== "admin") router.push("/");
    }, [status, router, data]);

    return (
      <>
        {status === "authenticated" && data?.user?.role === "admin" ? (
          <Component {...props} />
        ) : (
          <FullLoader />
        )}
      </>
    );
  }

  return WithAdminAuth;
}
