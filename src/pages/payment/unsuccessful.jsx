import React, { useEffect } from "react";
import { useRouter } from "next/router";

const Unsuccessful = () => {
  const router = useRouter();

  return (
    <div className="w-full flex items-center justify-center min-h-screen bg-white text-black">
      <div className="text-[1.1rem]">
        <h1 className="text-[2rem] md:text-[3rem] font-bold mb-4">
          Payment Unsuccessful
        </h1>
        <p className="mb-2">This may be due to many reasons:</p>
        <ul className="list-disc">
          <li>You made false payment</li>
          <li>You provided false payment information</li>
          <li>You are not a registered user</li>
          <li>You are a malicious user</li>
          <li>Problem with your payment method</li>
          <li>Problem with the payment system(Flutterwave)</li>
          <li>Server down, etc.</li>
        </ul>

        <h2 className="font-semibold mt-4">What to do Next</h2>
        <p>
          If money has been deducted from your acccount. Go to your dashbaord to
          open a support ticket.
        </p>
      </div>
    </div>
  );
};

export default Unsuccessful;
