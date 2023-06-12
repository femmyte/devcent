import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Progress from "components/loaders/Progress";

const Payment = () => {
  const router = useRouter();
  const { status, tx_ref, transaction_id } = router.query;

  useEffect(() => {
    console.log(status, tx_ref, transaction_id);
  }, [status, tx_ref, transaction_id]);

  return (
    <div className="w-full flex items-center justify-center min-h-screen bg-white text-black">
      <div className="text-[1.4rem]">
        <h1 className="text-[3rem] font-bold mb-4">Devcent Trainings</h1>
        <p className="mb-2">We are processing your payment</p>
        <p>Please do not refresh or close this tab.</p>
        <Progress
          borderColor={"purple"}
          barColor={"green"}
          width={"110"}
          height={"110"}
        />
        <p className="mt-[-20px] text-[16px]">Powered by Flutterwave</p>
      </div>
    </div>
  );
};

export default Payment;
