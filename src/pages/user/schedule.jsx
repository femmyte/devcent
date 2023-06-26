import React, { useState, useContext, useEffect } from "react";
import { getMonth } from "appData/calendarUtils";
import DashboardLayout from "components/dashboard/DashboardLayout";
import SchedularPart from "components/dashboard/Schedular";
import CalendarHeader from "components/dashboard/schedular/CalendarHeader";
import Month from "components/dashboard/schedular/Month";
import Sidebar from "components/dashboard/schedular/Sidebar";

import { useStateContext } from "AuthContext";
import EventModal from "components/dashboard/schedular/EventModal";
import withStudentAuth from "components/auth/withStudentAuth";
const Schedular = () => {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal, isReady } = useStateContext();
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  if (isReady) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <DashboardLayout>
        {showEventModal && <EventModal />}
        <div className="min-h-screen flex flex-col text-white w-full px-2 pl-[15px] mt-[20px] md:mt-[31px]">
          <h1 className="font-[700] text-white text-[20px] md:text-[24px] leading-[30.24px] ">
            Schedule
          </h1>
          <p className="font-plus font-[500] text-[16px] text-[#71717a] leading-[20.16px] mb-[20px] mt-[8px]">
            Your day to day activities
          </p>
          {/* <CalendarHeader />	 */}
          <div className="flex flex-1">
            {/* <Sidebar /> */}
            {/* <Month month={currentMonth} /> */}
          </div>
          <SchedularPart />
        </div>
      </DashboardLayout>
    </>
  );
};

export default withStudentAuth(Schedular);
