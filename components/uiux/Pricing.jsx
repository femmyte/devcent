import Grid from "components//common/Grid";
import React from "react";

const Pricing = ({ amount }) => {
  return (
    <>
      <section
        id="pricing"
        className="pt-[30px] md:pt-[59px] px-[20px] md:pl-[64px] pb-[30px] md:pb-[65px] bg-[#0a0909]"
      >
        <h3 className="font-space font-[700] text-[32px] leading-[35.2px] text-center text-primaryYellow">
          EXPLORE OUR PAYMENT PLAN
        </h3>
        <p className="md:w-[831px] mx-auto text-center mt-[40px] mb-[30px] md:mb-[80px] font-dmsasns font-[400] text-[20px] leading-[26px] text-[#9b9b9b]">
          Our payment options are simple transparent and flexible Choose the
          payment plan that suites your pocket and schedule
        </p>
        <div className="">
          <div className="md:flex gap-x-[48px]">
            <div className="bg-[#1F1D1D] px-[12px] md:px-[40px] py-[15px] md:py-[40px] rounded-[16px] text-white mb-[20px] md:mb-[40px] w-[90vw] md:w-[499px]">
              <h3 className="font-[700] font-space text-[24px] md:text-[40px] leading-[31px] text-left">
                Payment Options
              </h3>
              <p className="font-[500] font-space text-[16px] md:text-[32px] leading-[31px] mt-[20px] md:mt-[43px] mb-[17px] md:mb-[32px]  text-left">
                Outright Payment
              </p>
              <div className="flex items-center">
                <div className="w-[10px] h-[10px] bg-white rounded-full"></div>
                <p className="ml-[16px] text-[24px] font-[400] font-space leading-[35px]">
                  Get 20% off
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-[10px] h-[10px] bg-white rounded-full"></div>
                <p className="ml-[16px] text-[24px] font-[400] font-space leading-[35px]">
                  Pay N{amount?.toLocaleString()}
                </p>
              </div>
              <p className="font-[500] font-space text-[16px] md:text-[32px] leading-[31px] mt-[20px] md:mt-[43px] mb-[17px] md:mb-[32px]  text-left">
                Installments Payment
              </p>
              <div className="flex items-center">
                <div className="w-[10px] h-[10px] bg-white rounded-full"></div>
                <p className="ml-[16px] text-[24px] font-[400] font-space leading-[35px]">
                  Pay 50% before class commences
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-[10px] h-[10px] bg-white rounded-full"></div>
                <p className="ml-[16px] text-[24px] font-[400] font-space leading-[35px]">
                  Pay 75% after a month
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-[10px] h-[10px] bg-white rounded-full"></div>
                <p className="ml-[16px] text-[24px] font-[400] font-space leading-[35px]">
                  Complete 100% after two months
                </p>
              </div>
            </div>
            <div className="bg-[#1F1D1D] px-[12px] md:px-[40px] py-[15px] md:py-[40px] rounded-[16px] text-white mb-[20px] md:mb-[40px] w-[90vw] md:w-[620px]">
              <h3 className="font-[700] font-space text-[24px] md:text-[40px] leading-[31px] text-left">
                What you’ll get
              </h3>
              <p className="mt-[32px] text-[24px] font-[400] font-space leading-[35px]">
                Duration
              </p>
              <p className="font-[500] font-space text-[16px] md:text-[32px] leading-[31px] mt-[16px] mb-[17px] md:mb-[32px]  text-left">
                3 months
              </p>
              <p className="mt-[32px] text-[24px] font-[400] font-space leading-[35px]">
                Class frequency
              </p>
              <p className="font-[500] font-space text-[16px] md:text-[32px] leading-[31px] mt-[16px] mb-[17px] md:mb-[32px]  text-left">
                2-3 times per week
              </p>
              <p className="mt-[32px] text-[24px] font-[400] font-space leading-[35px]">
                Class Sessions
              </p>
              <div className="flex items-center mt-[20px]">
                <div className="w-[20px] h-[20px] bg-white rounded-full"></div>
                <p className="ml-[16px] text-[20px] md:text-[32px] font-[400] font-space leading-[35px]">
                  Morning Sessions (10am-12pm)
                </p>
              </div>
              <div className="flex items-center mt-[20px]">
                <div className="w-[20px] h-[20px] bg-white rounded-full"></div>
                <p className="ml-[16px] text-[20px] md:text-[32px] font-[400] font-space leading-[35px]">
                  Evening Sessions (8pm-10pm)
                </p>
              </div>
              <div className="flex items-center mt-[20px]">
                <div className="w-[20px] h-[20px] bg-white rounded-full"></div>
                <p className="ml-[16px] text-[20px] md:text-[32px] font-[400] font-space leading-[35px]">
                  Weekend Sessions (Sat and Sun)
                </p>
              </div>
              <p className="mt-[32px] text-[24px] font-[400] font-space leading-[35px]">
                Class Sessions
              </p>
              <div className="flex items-center mt-[20px]">
                <div className="w-[20px] h-[20px] bg-white rounded-full"></div>
                <p className="ml-[16px] text-[20px] md:text-[32px] font-[400] font-space leading-[35px]">
                  Live virtual classes
                </p>
              </div>
              <div className="flex items-center mt-[20px]">
                <div className="w-[20px] h-[20px] bg-white rounded-full"></div>
                <p className="ml-[16px] text-[20px] md:text-[32px] font-[400] font-space leading-[35px]">
                  Physical in-person class
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
