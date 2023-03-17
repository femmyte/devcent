import Link from "next/link";
import React from "react";

const CourseCard = ({ img, title, description, link }) => {
  return (
    <div className="px-[95px] flex h-[463px] mt-[120px]">
      <div className="w-[749px] h-full">
        <img
          src={`/images/courses/${img}.png`}
          alt={`${title} class`}
          className="h-full w-full"
        />
      </div>
      <div className="pl-[29px] pr-[40px] bg-[#d9d9d9] h-full flex flex-col items-center py-[30px] w-[495px]">
        <div className="w-[168.73px] h-[15px] border-[2px] border-black mb-[13px]"></div>
        <h3 className="font-space font-[700] text-[50px] leading-[89.32px] text-center">
          {title}
        </h3>

        <p className="mt-[50px] mb-75px] font-dmsans font-[400] text-[17.74px] leading-[23.1px] text-center">
          {description}
        </p>
        <Link
          href={link}
          className="mt-[112px] mx-auto text-white bg-[#E40084] py-[20px] px-[56px] font-dmsans font-bold text-[18px] hover:animate-pulse ease-out duration-300 "
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
