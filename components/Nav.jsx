import React, { useState } from "react";
import Link from "next/link";
import { FcMenu } from "react-icons/fc";
import Image from "next/image";
import { useRouter } from "next/router";
import { FiSearch } from "react-icons/fi";

const SearchComponent = ({ onFilter, filterText }) => (
  <div className="dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white flex w-4/5 md:w-[220px] h-[39px] py-[12-x] px-[6px] items-center border border-[#E40084] bg-transparent rounded-lg">
    <FiSearch />
    <input
      type="text"
      className="p-2 bg-transparent outline-none w-[90%] text-[14px]"
      placeholder="What do you want to learn?"
      onChange={onFilter}
      name={filterText}
      value={filterText}
    />
  </div>
);
const Nav = ({ path }) => {
  const currentPath = useRouter().pathname;
  console.log(currentPath);
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
      className={`z-[30] border-b border-[#494545] h-[64px] flex items-center relative bg-black px-[43px] ${
        menu ? "opacity-3" : ""
      }  bg-black font-source font-[600]`}
      // style={{
      //   background: "rgba(6, 7, 32, 0.05)",
      //   borderBottom: "1px solid rgba(0, 166, 81, 0.3)",
      // }}
    >
      <div className="md:py-3 ml-[33px] text-white h-[80px] md:h-[60px] w-screen md:flex md:items-center text-[20px] justify-between ">
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
          <ul className="md:flex md:justify-between">
            <li className="my-3 md:my-0">
              <Link
                className={`${
                  path === "/courses"
                    ? "text-[#006F36] border-2 py-1 border-[#006F36] px-1 rounded"
                    : ""
                } text-[20px] font-[600]  duration-500 font-source`}
                href="/courses"
              >
                Courses
              </Link>
            </li>
            <li className="md:ml-[35px] my-3 md:my-0">
              <Link
                className={`${
                  path === "/process" &&
                  "text-[#006F36] border-2 py-1 font-[700] border-[#006F36] px-1 rounded"
                } text-[20px] font-[600]  duration-500 `}
                href="/howItWorks"
              >
                About
              </Link>
            </li>
            <li className="md:ml-[35px] my-3 md:my-0">
              <Link
                className={`${
                  path === "/faq" &&
                  "text-[#006F36] border-2 py-1 font-[700] border-[#006F36] px-1 rounded"
                } text-[20px] font-[600]  duration-500 font-source`}
                href="/"
              >
                Community
              </Link>
            </li>
          </ul>
          <div className="md:ml-[139px] flex justify-center items-center ">
           
            {/* <Link
              href="/signup"
              className="bg-primaryGreen w-[94px] py-3 rounded-lg text-[14px] font-[500] text-center"
            >
              Get Started
            </Link> */}
            <SearchComponent />
            
             <Link
              href="/signin"
              className=" font-[400] py-[16px] px-[16px] rounded-lg text-[14px] leading-[17.6px] text-center ml-[54px] text-primaryPurple"
            >
              Login
            </Link>
             <button className="ml-[48px] text-white bg-[#E40084] w-[149px] h-[40px] font-source text-[18px] rounded-lg  hover:bg-primaryYellow hover:animate-pulse ease-out duration-300 ">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
