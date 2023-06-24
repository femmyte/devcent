import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUserStore } from "store/useUserStore";

const Layout = ({ children }) => {
  const { data } = useSession();

  const { getUserInfo } = useUserStore((state) => state);

  useEffect(() => {
    if (data?.accessToken) {
      getUserInfo(data?.user._id, data?.accessToken);
      console.log("User fetch in layout");
    }
  }, [data]);

  return (
    <>
      <ToastContainer />
      <main>{children}</main>
    </>
  );
};

export default Layout;
