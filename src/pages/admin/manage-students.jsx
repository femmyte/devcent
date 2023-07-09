import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import DashboardLayout from "../../../components/admin/dashboard/DashboardLayout";
import { useSession } from "next-auth/react";
import Link from "next/link";
import withAdminAuth from "components/auth/withAdminAuth";
import { getUsers } from "services/userService";
import StudentTable from "components/admin/dashboard/StudentTable";

const ManageStudents = () => {
  const { data: session } = useSession();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const getAllStudents = async () => {
      try {
        const data = await getUsers("student", session?.accessToken);

        setStudents(data.users);
      } catch (error) {
        toast("Problem fetching data");
      }
    };

    getAllStudents();
  }, [session]);

  return (
    <div>
      <DashboardLayout>
        <div className="px-[20px] text-white">
          <div className="mb-[25px] md:mb-[40px]">
            <p className="font-space font-[700] text-[20px] leading-[25.5px]">
              Manage Students
            </p>
            <p className="text-defaultFontColor font-space font-[400] text-[14px] leading-[18px] mt-[8px]">
              View all registered students
            </p>
          </div>
          <div className="container overflow-x-scroll p-4 pb-10 bg-white text-black shadow rounded-[7.4px]">
            <div>
              <div className="text-[#6941c6] font-bold ml-[15px] mb-2">
                Total: {students.length}
              </div>
            </div>
            <StudentTable students={students} session={session} />
          </div>
          <div className="h-4" />
        </div>
      </DashboardLayout>
    </div>
  );
};

export default withAdminAuth(ManageStudents);
