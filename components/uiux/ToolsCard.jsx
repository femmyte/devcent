import React from "react";

const ToolsCard = ({ img, title, details }) => {
  return (
    <div className="flex flex-col gap-x-[15px] md:gap-x-[24px] items-start mb-[30px]">
      <img src={`/images/icons/${img}.png`} alt="" />
                  {/* <div> */}
                  <h3 className="font-space font-[500] text-[24px] leading-[31px] text-white mb-[8px] mt-[15px] md:mt-[26px]">{title}</h3>
                  <p className="text-[18px] font-space font-[400] leading-[23px] text-[#9b9b9b] text-left">{details}</p>
                  {/* </div> */}
        </div>
  );
};

export default ToolsCard;
