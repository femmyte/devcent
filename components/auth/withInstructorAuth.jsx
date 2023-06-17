import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import FullLoader from "components/loaders/FullLoader";

//  to protect instructor specific routes/pages

export default function withInstructorAuth(Component) {
  function WithInstructorAuth(props) {
    const router = useRouter();
    const { status, data } = useSession();

    useEffect(() => {
      if (status === "unauthenticated") router.push("/signin");
      else if (data && data?.user?.role !== "instructor") router.push("/");
    }, [status, router, data]);

    return (
      <>
        {status === "authenticated" && data?.user?.role === "instructor" ? (
          <Component {...props} />
        ) : (
          <FullLoader />
        )}
      </>
    );
  }

  return WithInstructorAuth;
}
