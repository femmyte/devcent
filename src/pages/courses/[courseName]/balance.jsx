import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Progress from "components/loaders/Progress";
import { processPayment } from "services/paymentService";
import Dots from "components/loaders/Dots";
import CongratsOnBalance from "components/common/CongratsOnBalance";
import { useSession } from "next-auth/react";

const Balance = () => {
  const router = useRouter();
  const { status, tx_ref, transaction_id, courseName } = router.query;

  const { data } = useSession();

  const token = data?.accessToken;

  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    // console.log(status, tx_ref, transaction_id);

    const processCoursePayment = async () => {
      try {
        const { data } = await processPayment(
          "/payments/process-payment",
          {
            course: courseName,
            status,
            tx_ref,
            transaction_id,
          },
          token
        );
        setIsSuccess(true);
      } catch (error) {
        if (error?.response?.data?.message) {
          if (
            error.response.data.message.toLowerCase() ===
            "payment already processed"
          ) {
            router.replace("/");
          } else {
            router.replace("/payment/unsuccessful");
          }
        }
      }
    };

    // process payment if all data is available
    if (status && tx_ref && transaction_id && courseName && token)
      processCoursePayment();

    // if user cancel payment
    if (status === "cancelled") router.replace("/user/payments");
  }, [status, tx_ref, transaction_id, courseName, router, token]);

  return (
    <div className="w-full flex items-center justify-center min-h-screen bg-white text-black">
      {status && tx_ref && transaction_id && courseName && !isSuccess ? (
        <div className="text-[1.4rem]">
          <h1 className="text-[3rem] font-bold mb-4">Devcent Trainings</h1>
          <p className="mb-2">We are processing your payment</p>
          <p>Please do not leave or close this tab.</p>
          <Progress
            borderColor={"purple"}
            barColor={"green"}
            width={"110"}
            height={"110"}
          />
          <p className="mt-[-20px] text-[16px]">Powered by Flutterwave</p>
        </div>
      ) : (
        <div>
          <Dots />
          <h1 className="text-[1.2rem]">Loading...</h1>
        </div>
      )}
      {isSuccess && <CongratsOnBalance />}
    </div>
  );
};

export default Balance;
