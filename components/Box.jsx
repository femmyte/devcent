import React from "react";

const Box = ({ title, description, img }) => {
  return (
    <div className="md:w-[399px] h-[320px] bg-white rounded-[35px] shadow shadow-[rgba(0, 0, 0, 0.14)] flex flex-col justify-center px-[50px]">
      <img src={img} alt={title} className="w-[57px] h-[57px] md:mb-[44px]" />
      <p className="font-[space] font-[300] text-[29px] leading-[36px] text-[#202020]">
        {title}
      </p>
      <p className="mt-[20px] font-dmsans text-[16px] leading-[24px] ">
        {description}{" "}
      </p>
    </div>
  );
};

export default Box;
