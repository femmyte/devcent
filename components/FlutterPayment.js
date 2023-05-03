import React from "react";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import { useRouter } from "next/router";
export default function App({ amount, email, name, phoneNumber }) {
  const router = useRouter();
  const config = {
    public_key: process.env.NEXT_PUBLIC_FLUTTER_KEY,
    tx_ref: Date.now(),
    amount: amount,
    currency: "NGN",
    // payment_options: 'card,mobilemoney,ussd',
    payment_options: "card",
    customer: {
      email: email,
      phone_number: phoneNumber,
      name: name,
    },
    customizations: {
      title: "Devcent",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const fwConfig = {
    ...config,
    text: "Make Payment",

    callback: (response) => {
      console.log(response);
      closePaymentModal(); // this will close the modal programmatically
      router.push("/congratulations");
    },
    onClose: (response) => {
      console.log(response);
    },
  };

  return (
    <div className="App">
      <FlutterWaveButton
        {...fwConfig}
        className=" py-[10px] md:py-[16px] px-[20px] md:px-[32px] rounded-lg bg-primaryPurple text-[18px] md:text-[24px] font-dmsans font-[700]"
      />
    </div>
  );
}
