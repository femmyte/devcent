import React from "react";
import Chart from "./Chart";
import { balanceCourse } from "services/paymentService";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
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
          {title} MODULES
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

const Overview = ({ userInfo }) => {
  const router = useRouter();
  const { data } = useSession();

  const handlePayBalance = async () => {
    console.log("payyyy");
    try {
      const { data: resData } = await balanceCourse(
        "/courses/UIUX-Design-21197094/balance",
        data.accessToken
      );
      router.push(resData.paymentPage);
    } catch (error) {
      console.log(error);
      console.log(error?.response?.data?.message);
    }
  };

  return (
    <section className="pl-[15px] flex flex-col md:flex-row items-center justify-center gap-y-[20px] md:gap-y-0 md:gap-x-[30px] mt-[25px] md:mt-[48px]">
      <div className="">
        <h1 className="font-[700] text-white text-[20px] md:text-[24px] leading-[30.24px] ">
          Welcome back {userInfo?.firstName}. 👋
        </h1>

        {userInfo?.enrolledCourses?.length > 0 ? (
          userInfo?.enrolledCourses[0]?.paymentPlan === "part-payment" ? (
            <button onClick={handlePayBalance} className="text-white">
              Pay balance
            </button>
          ) : null
        ) : null}

        <p className="font-plus font-[500] text-[16px] text-[#71717a] leading-[20.16px] mb-[20px] md:mb-[32px] mt-[8px]">
          You’re making great progress. We’re rooting for you!{" "}
        </p>
        <div className="w-[96%] md:w-[620px] rounded-[16px] p-[16px] bg-[#1c1c1c] text-white">
          <p className="font-space font-[700] text-[20px] leading-[25.5px]">
            Overview
          </p>
          <p className="font-space font-[400] text-[14px] leading-[18px] mt-[8px]">
            Track your progress
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-x-[24px] ">
            <Card title="TOTAL" number="5" icon="totalmodule" />
            <Card title="ACTIVE" number="10" icon="activemodule" />
            <Card title="COMPLETED" number="2" icon="completedmodule" />
          </div>
          {/* <Link href="/total-votes"> */}
          {/* <DashboardCard
                icon='/images/icon/user.png'
                // figure={fetchedUsers?.length}
                title='Registered Students'
                bg='rgba(221,252,220,1)'
                textColor='#1A8F56'
              /> */}
          {/* </Link> */}
        </div>
      </div>
      <div className="w-[96%] md:w-[428px] h-[352px] rounded-[24px] py-[20px] px-[36px] bg-[#323131] text-white flex flex-col items-center justify-center">
        <p className="font-space font-[700] text-[20px] text-white leading-[25.16px] mb-[20px] md:mb-[32px] mt-[8px]">
          Overall Course Progress{" "}
        </p>
        <div className="w-[200px] h-[400px]">
          <Chart />
        </div>
      </div>
    </section>
  );
};

export default Overview;
