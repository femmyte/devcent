import React, { useState, useEffect } from "react";
import Chart from "./Chart";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useUserStore } from "store/useUserStore";
import { getAdminOverview } from "services/adminService";

const DashboardCard = ({ icon, figure, title, middle, bg, textColor }) => (
  <div
    className={`${
      middle && "mt-[20px] md:my-0"
    } w-[260px] md:w-[300px] h-[90px] md:h-[111px] flex flex-col justify-center text-white dark:border dark:border-gray-200 rounded-[4px] shadow z-10 mb-4 md:mb-0`}
    style={{
      background: `${bg}`,
    }}
  >
    <div className="flex gap-[18px] items-center ">
      <img src={icon} className="mx-[15px] md:mx-[29px]" alt={icon} />
      <div className="">
        <p className="text-[16px] font-[400] mb-[8px] md:mb-[14px] text-[#8db0c2]">
          {title}
        </p>
        <p
          className={`text-${textColor} font-[700] text-[18px] md:text-[26px] leading-7`}
          style={{ color: textColor }}
        >
          {figure}
        </p>
      </div>
    </div>
  </div>
);

const Card = ({ title, number, icon }) => {
  return (
    <div className=" w-[175px] h-[95px] bg-[#323131] text-neutral-content p-[16px] flex items-center justify-center mt-[24px] mb-[16px] rounded-[8px]">
      <div className="items-center text-center">
        <h2 className="font-[500] font-space text-[12px] leading-4 mb-[12px]">
          {title}
        </h2>
        <div className="flex justify-between items-center">
          <button className="">{number}</button>
          <button className="">
            <img
              src={`/images/icons/dashboard/${icon}.png`}
              alt="total module"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

const Overview = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const { userInfo } = useUserStore((state) => state);

  const [overview, setOverview] = useState({
    totalUsers: 0,
    activatedUsers: 0,
    enrolledUsers: 0,
  });

  useEffect(() => {
    const getOverview = async () => {
      try {
        const data = await getAdminOverview(session?.accessToken);

        setOverview(data.overview);
      } catch (error) {
        toast("Problem fetching data");
      }
    };

    getOverview();
  }, [session]);

  return (
    <section className="pl-[15px] flex flex-col md:flex-row items-center justify-center gap-y-[20px] md:gap-y-0 md:gap-x-[30px] mt-[25px]">
      <div className="w-full">
        <h1 className="font-[700] text-white text-[20px] md:text-[24px] leading-[30.24px] mb-[20px] md:mb-[32px] ">
          Welcome back {userInfo?.firstName}. 👋
        </h1>
        <div className="w-[96%] md:w-[672px] rounded-[16px] p-[16px] bg-[#1c1c1c] text-white">
          <p className="font-space font-[700] text-[20px] leading-[25.5px]">
            Overview
          </p>
          <p className="font-space font-[400] text-[14px] leading-[18px] mt-[8px]">
            Summary of Devcent users
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-x-[24px] ">
            <Card
              title="TOTAL USERS"
              number={overview.totalUsers}
              icon="totalmodule"
            />
            <Card
              title="ACTIVATED USERS"
              number={overview.activatedUsers}
              icon="activemodule"
            />
            <Card
              title="ENROLLED STUDENTS"
              number={overview.enrolledUsers}
              icon="totalmodule"
            />
          </div>
        </div>
      </div>
      <div className="w-[96%] md:w-[297] h-[370px] rounded-[24px] py-[20px] px-[36px] bg-[#323131] text-white ">
        <p className="font-space font-[700] text-[20px] text-white leading-[25.16px]">
          Overall Students{" "}
        </p>
        <p className="font-space font-[400] text-[12px] text-white leading-[25.16px] mb-[32px] mt-[8px]">
          Showing total number of students at DevCent{" "}
        </p>
        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-[200px] h-[400px]">
            <Chart />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
