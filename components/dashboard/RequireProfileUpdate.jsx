import { useRouter } from "next/router";
import { useEffect } from "react";
import { useUserStore } from "store/useUserStore";

const RequireProfileUpdate = (WrappedComponent) => {
  const ProfileUpdateCheck = (props) => {
    const router = useRouter();
    const { userInfo } = useUserStore((state) => state);

    useEffect(() => {
      if (userInfo?.firstName === "User") {
        router.push("/user/settings/profile");
      }
    }, [userInfo, router]);

    return <WrappedComponent {...props} />;
  };

  return ProfileUpdateCheck;
};

export default RequireProfileUpdate;
