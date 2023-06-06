import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children }) => {
  return (
    <>
      <ToastContainer />
      <main>{children}</main>
    </>
  );
};

export default Layout;
