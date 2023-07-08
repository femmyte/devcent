import OverviewComponent from "components/admin/dashboard/Overview";
import React, { useEffect, useState } from "react";
import DashboardLayout from "../../../components/admin/dashboard/DashboardLayout";
import UserTable from "../../../components/admin/dashboard/UserTable";
import courseInfo from "../../../courseInfo";
import { getSession, useSession } from "next-auth/react";
import Link from "next/link";
import { useStateContext } from "AuthContext";
import withAdminAuth from "components/auth/withAdminAuth";

const Overview = () => {
  const { user } = useStateContext();
  const [fetchedUsers, setFetchedUsers] = useState({});
  const [course, setCourse] = useState("");
  const [courseInformation, setCourseInformationo] = useState(courseInfo);
  // const fetchUser = async () => {
  // 	try {
  // 		const response = await fetch('students');

  // 		const data = await response.json();
  // 		// setFetchedUsers(data);
  // 		// console.log(data)
  // 		setFetchedUsers(data);
  // 		data?.map((user) => setCourse(user.course));
  // 	} catch (error) {
  // 		console.log(error);
  // 	}
  // };
  // useEffect(() => {
  // 	fetchUser();
  // }, []);

  useEffect(() => {
    getSession().then((session) => {
      // console.log(session);
    });
  }, []);

  return (
    <div>
      <DashboardLayout>
        <div className="px-[20px] ">
          <OverviewComponent />
          <div className="w-[96%] md:w-[672px]">
            <div className="rounded-[16px] mt-[48px] p-[16px] bg-[#1c1c1c] text-white">
              <p className="font-space font-[700] text-[20px] leading-[25.5px]">
                Top Courses
              </p>
              <div className="flex md:gap-x-[260px] items-center">
                <p className="font-space font-[400] text-[14px] leading-[18px] mt-[8px]">
                  COURSE NAME
                </p>
                <p className="font-space font-[400] text-[14px] leading-[18px] mt-[8px]">
                  SALES
                </p>
              </div>
              <div className="w-full bg-[#323131] text-neutral-content p-[16px] mt-[8px] mb-[16px] rounded-[8px]">
                <div className="flex md:gap-x-[200px]  items-center mb-2">
                  <p>Web Development</p>
                  <p>60 Sales</p>
                </div>
                <div className="flex md:gap-x-[200px]  items-center mb-2">
                  <p>Web Development</p>
                  <p>60 Sales</p>
                </div>
                <div className="flex md:gap-x-[200px]  items-center mb-2">
                  <p>Web Development</p>
                  <p>60 Sales</p>
                </div>
              </div>
            </div>
            <div className="">
              <UserTable />
            </div>
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default withAdminAuth(Overview);
