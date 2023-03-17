import React from "react";

const Curriculum = () => {
  return (
    <div
      id="curriculum"
      className="pt-[59px] pl-[64px] pb-[65px] bg-[#0a0909] text-center
      "
    >
      <h3 className="font-space font-[700] text-[32px] leading-[35.2px] text-center text-primaryYellow">
        UX/UI CURRICULUM
      </h3>
      <p className="mt-[43px] font-space font-[700] text-[26px] leading-[11.7px] text-[#cccccc]">
        Learn-by-doing with live classes
      </p>
      <p className="w-[1015px] mx-auto text-center mt-[40px] mb-[80px] font-dmsasns font-[400] text-[20px] leading-[26px] text-[#9b9b9b]">
        Our course is setup to make you learn UX/UI step by step with a
        practical curriculum that focuses 100% on learn-by-doing. Unlike a lotta
        UX/UI courses who teach the same powerpoint heavy curriculum for years,
        our course teaches you the latest tools, workflows, and best practices .
        To save time and nail it from the beginning, we encourage you to
        complete some reading and practical prep work ahead of the Bootcamp.
      </p>

      <p className="mb-[40px] font-space font-[700] text-[26px] leading-[11.7px] text-[#cccccc]">
        Construct UX/UI case studies using actual design briefs.
      </p>
      <p className="w-[1015px] mx-auto text-center font-dmsasns font-[400] text-[20px] leading-[26px] text-[#9b9b9b]">
        {" "}
        You'll be working on briefs provided by actual businesses that we
        partner with in addition to studying the fundamental abilities needed to
        be a junior UX/UI Designer. This is a fantastic chance to work on a
        current product and produce pertinent case studies using actual
        products!
      </p>
    </div>
  );
};

export default Curriculum;
