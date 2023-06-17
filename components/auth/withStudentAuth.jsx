import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import FullLoader from "components/loaders/FullLoader";

//  to protect student specific routes/pages

export default function withStudentAuth(Component) {
  function WithStudentAuth(props) {
    const router = useRouter();
    const { status, data } = useSession();

    useEffect(() => {
      if (status === "unauthenticated") router.push("/signin");
      else if (data && data?.user?.role !== "student") router.push("/");
    }, [status, router, data]);

    return (
      <>
        {status === "authenticated" && data?.user?.role === "student" ? (
          <Component {...props} />
        ) : (
          <FullLoader />
        )}
      </>
    );
  }

  return WithStudentAuth;
}
