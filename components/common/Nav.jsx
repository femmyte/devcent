import React, { useState } from "react";
import Link from "next/link";
import { FcMenu } from "react-icons/fc";
import Image from "next/image";
import { useRouter } from "next/router";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { useStateContext } from "AuthContext";
import { useSession } from "next-auth/react";
const SearchComponent = ({ onFilter, filterText }) => (
  <div className="dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white flex w-4/5 md:w-[220px] h-[39px] py-[12-x] px-[6px] items-center border border-[#E40084] bg-transparent rounded-lg">
    <FiSearch />
    <input
      type="text"
      className="p-2 bg-transparent focus:outline-none focus:ring-0 border-none outline-none w-[90%] text-[14px]"
      placeholder="What do you want to learn?"
      onChange={onFilter}
      name={filterText}
      value={filterText}
    />
  </div>
);
const Nav = ({ path }) => {
  const currentPath = useRouter().pathname;
  const session = useSession();
  let authenticated = session.status === "authenticated";
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    if (menu) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  };
  return (
    <nav
      className={`z-[30] border-b border-[#494545] h-[64px] flex items-center relative bg-black md:px-[20px] ${
        menu ? "opacity-3" : ""
      }  bg-black font-source font-[600]`}
    >
      <div className="md:py-3 text-white h-[80px] md:h-[60px] w-screen md:flex md:items-center text-[20px] justify-between ">
        <div className="flex justify-between items-center h-full cursor-pointer mx-3">
          <Link
            className="text-[20px] hover:text-primary duration-500"
            href="/"
          >
            <Image
              src="/images/logo.png"
              width={92}
              height={50}
              className=""
              alt="logo1"
            />
          </Link>
          <FcMenu
            color="#ffffff"
            size="40"
            className="text-white md:hidden"
            onClick={handleMenu}
          />
        </div>
        <div
          className={`${
            menu
              ? "top-[60px] opacity-100 pb-6 z-10 h-screen bg-black"
              : "hidden"
          } md:basis-[80%] md:flex  md:items-center md:static absolute md:bg-transparent bg-black w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 font-normal text-[20px]`}
        >
          <ul className="md:flex md:justify-between md:gap-x-[35px] lg:gap-x-[60px]">
            <li className="my-3 md:my-0 flex gap-x-[10px] items-center">
              <Link
                className={`${
                  path === "/courses"
                    ? "text-[#006F36] border-2 py-1 border-[#006F36] px-1 rounded"
                    : ""
                } text-[14px] font-[600]  duration-500 font-source`}
                href="/courses"
              >
                Courses
              </Link>
              <IoIosArrowDown />
            </li>
            <li className="my-3 md:my-0 flex gap-x-[10px] items-center">
              <Link
                className={`${
                  path === "/about"
                    ? "text-[#006F36] border-2 py-1 border-[#006F36] px-1 rounded"
                    : ""
                } text-[14px] font-[600]  duration-500 font-source`}
                href="/about"
              >
                About
              </Link>
              <IoIosArrowDown />
            </li>
            <li className="my-3 md:my-0 flex gap-x-[10px] items-center">
              <Link
                className={`${
                  path === "/courses"
                    ? "text-[#006F36] border-2 py-1 border-[#006F36] px-1 rounded"
                    : ""
                } text-[14px] font-[600]  duration-500 font-source`}
                href="/courses"
              >
                Community
              </Link>
              <IoIosArrowDown />
            </li>
          </ul>
          <div className="md:ml-[100px] lg:ml-[130px] flex flex-col md:flex-row md:justify-center md:items-center md:w-full  gap-x-[48px] gap-y-[20px] md:gap-y-0">
            {/* <Link
              href="/signup"
              className="bg-primaryGreen w-[94px] py-3 rounded-lg text-[14px] font-[500] text-center"
            >
              Get Started
            </Link> */}
            <div className="md:hidden xl:block">
              <SearchComponent />
            </div>

            {authenticated ? (
              <Link
                href="/auth/overview"
                className=" text-white bg-[#E40084] w-[149px] text-center py-[10px] px-[20px]  font-source text-[18px] rounded-lg  hover:bg-primaryYellow"
              >
                Dashboard
              </Link>
            ) : (
              <>
                <Link
                  href="/signin"
                  className="md:hidden lg:inline-block font-[400] py-[16px] md:px-[16px] rounded-lg text-[14px] leading-[17.6px] text-left md:text-center mt-[20px] md:mt-0 block text-primaryPurple"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className=" text-white bg-[#E40084] w-[149px] text-center font-source text-[18px] rounded-lg  hover:bg-primaryYellow hover:animate-pulse ease-out duration-300 py-[10px] px-[20px]"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
