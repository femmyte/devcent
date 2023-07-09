import React, { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RiNotification3Line } from "react-icons/ri";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useStateContext } from "../../../AuthContext";
import { useUserStore } from "store/useUserStore";

const NavButton = ({ title, customFunc, icon, color, dotColor, num }) => (
  <div className="relative">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      {icon}
    </button>
    <div
      style={{ backgroundColor: dotColor }}
      className="absolute rounded-full h-[15px] w-[15px] right-[7px] top-[4px] text-[10px] text-white flex items-center justify-center"
    >
      {num}
    </div>
  </div>
);

const Navbar = () => {
  const { userInfo } = useUserStore((state) => state);
  const { setActiveMenu, screenSize, setScreenSize, setDarkToggle } =
    useStateContext();

  const [dropDown, setDropDown] = useState(false);
  const [notificationdropDown, setNotificationdropDown] = useState(false);
  // const user = getUser()

  const handleLogout = () => {
    // removeUserSession();
    // logout();
    // navigate("/login");
    // handleCloseSidebar();
    // setActiveMenu(false);
    console.log("loggingout");
  };

  const handleDropDown = () => {
    if (dropDown) {
      setDropDown(false);
      setNotificationdropDown(false);
    } else {
      setDropDown(true);
    }
  };
  const handleNotificationDropDown = () => {
    setNotificationdropDown(true);
    if (notificationdropDown) {
      setDropDown(false);
      setNotificationdropDown(false);
    } else {
      setNotificationdropDown(true);
    }
  };

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div
      className="flex justify-between p-2 relative bg-black text-white dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white"
      //   style={{ borderBottom: "0.6px solid #878787" }}
    >
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((prevState) => !prevState)}
        color="white"
        icon={<AiOutlineMenu />}
      />

      <div className="flex gap-x-[50px]">
        {/* <NavButton title='Chat' dotColor='#03c9D7' customFunc={() => handleClick('chat')} color='blue' icon={<BsChatLeft />} /> */}

        <div
          className={`  relative flex items-center gap-2 hover:bg-light-gray rounded-lg  `}
          // onMouseEnter={handleNotificationDropDown}
          // onClick={() => setNotificationdropDown(!notificationdropDown)}
          // onMouseLeave={() => setNotificationdropDown(false)}
        >
          <Link href="/user/notifications">
            <NavButton
              title="Notifications"
              dotColor="red"
              customFunc={() => setNotificationdropDown(!notificationdropDown)}
              color="white"
              num={2}
              icon={<RiNotification3Line />}
            />
          </Link>
        </div>
        <div
          className={`md:mr-[30px]  relative flex items-center gap-x-2 cursor-pointer hover:bg-light-gray rounded-lg `}
          onMouseEnter={handleDropDown}
          onClick={() => setDropDown(!dropDown)}
          onMouseLeave={() => setDropDown(false)}
          // onClick={() => handleClick("userProfile")}
        >
          <p className="text-gray-400 font-bold ml-1">{userInfo.firstName}</p>
          <img
            src={
              userInfo.imgUrl
                ? userInfo.imgUrl
                : "/images/icons/avatar-icon.jpg"
            }
            alt="avatar"
            className="rounded-full w-8 h-8 ml-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
