import React, { useState, useContext, useRef } from "react";
import courseInfo from "../../../courseInfo";
import ModuleLayout from "components/dashboard/modules/ModuleLayout";
import { useStateContext } from "../../../AuthContext";
import withStudentAuth from "components/auth/withStudentAuth";

const CourseModule = () => {
  const { courseContent, scrollContainerRef, currentItemId } =
    useStateContext();

  return (
    <div>
      <ModuleLayout>
        <div
          className="w-full py-[2rem] px-[15px]  hideScrolbar"
          ref={scrollContainerRef}
          style={{ height: "90vh", overflowY: "auto" }}
        >
          <div className="">
            <h1 className="font-[700] text-white text-[20px] md:text-[24px] leading-[30.24px] ">
              {courseContent.subTitle}
            </h1>
            <p
              className="font-plus font-[500] text-[16px] text-[#71717a] leading-[20.16px] mb-[20px] md:mb-[32px] mt-[8px]"
              id={currentItemId}
              ref={useRef(null)}
            >
              {courseContent.content}
            </p>
          </div>
        </div>
      </ModuleLayout>
    </div>
  );
};

export default withStudentAuth(CourseModule);
