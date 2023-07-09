import React, { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import DashboardLayout from "components/admin/dashboard/DashboardLayout";
import { getAllPayments } from "services/userService";
import { toast } from "react-toastify";
import PaymentTable from "components/admin/dashboard/PaymentTable";
import withAdminAuth from "components/auth/withAdminAuth";

const Payments = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const getPayments = async () => {
      try {
        const data = await getAllPayments(session?.accessToken);

        setPayments(data.payments);
      } catch (error) {
        toast("Problem fetching data");
      }
    };

    getPayments();
  }, [session]);

  return (
    <>
      <DashboardLayout>
        <div className="w-full px-[20px] text-white">
          <div className="mb-[25px] md:mb-[40px]">
            <p className="font-space font-[700] text-[20px] leading-[25.5px]">
              Payment History
            </p>
            <p className="text-defaultFontColor font-space font-[400] text-[14px] leading-[18px] mt-[8px]">
              Manage student payments
            </p>
          </div>
          <div className="container overflow-x-scroll p-4 pb-10 bg-white text-black shadow rounded-[7.4px]">
            <div>
              <div className="text-[#6941c6] font-bold ml-[15px] mb-2">
                Total: {payments.length}
              </div>
            </div>
            <PaymentTable payments={payments} session={session} />
          </div>
          <div className="h-4" />
        </div>
      </DashboardLayout>
    </>
  );
};

export default withAdminAuth(Payments);
