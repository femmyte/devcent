import React from "react";

const ToolsCard = ({ img, title, details }) => {
  return (
    <div className="pt-[17px] pl-[12px] bg-white min-h-[318px] w-[292px] pb-[10px] text-left pr-[17px] rounded-[10px] relative mb-[8opx]">
      <img
        src={`/images/icons/${img}.png`}
        alt="pee"
        className="absolute top-[17px] right-[17px] mb-[10px]"
      />
      <p className="my-[16px] ml-[27px] font-space font-[700] text-[32px] leading-[31.9px] text-black mt-[16px]">
        {title}
      </p>
      <p className="font-dmsans font-[700] text-[24px] leading-[31.25px] text-black">
        {details}
      </p>
    </div>
  );
};

export default ToolsCard;
