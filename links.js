import { AiFillHome } from "react-icons/ai";
import { ImUsers } from "react-icons/im";
import { MdCategory } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";

export const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "overview",
        icon: <AiFillHome />,
      },
    ],
  },

  {
    title: "Pages",
    links: [
      {
        name: "task",
        icon: <HiOutlineUserGroup />,
      },
      {
        name: "instructors",
        icon: <HiOutlineUserGroup />,
      },
      {
        name: "modules",
        icon: <HiOutlineUserGroup />,
      },
      {
        name: "schedule",
        icon: <HiOutlineUserGroup />,
      },
      {
        name: "payment",
        icon: <HiOutlineUserGroup />,
      },
      {
        name: "technical-support",
        icon: <HiOutlineUserGroup />,
      },
      {
        name: "fAQs-and-tutorials",
        icon: <HiOutlineUserGroup />,
      },
    ],
  },
];
