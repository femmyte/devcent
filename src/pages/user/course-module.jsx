import { courses } from "../../../components/dashboard/modules/courseList";
import React, { useState, useContext, useRef } from "react";
import courseInfo from "../../../lib/data/courseInfo";
import ModuleLayout from "components/dashboard/modules/ModuleLayout";
import { useStateContext } from "../../../AuthContext";
import withStudentAuth from "components/auth/withStudentAuth";

const CourseModule = () => {
  const { courseContent, courseIntro, scrollContainerRef, currentItemId } =
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
            <h1 className="mb-[20px] font-[700] text-white text-[20px] md:text-[24px] leading-[30.24px] ">
              {courseContent.subTitle ? courseIntro.title : courses[0].title}
            </h1>
            <h1 className="font-[700] text-white text-[20px] md:text-[24px] leading-[30.24px] ">
              {courseContent.subTitle}
            </h1>
            <p
              className="font-plus font-[500] text-[16px] text-[#71717a] leading-[20.16px] mb-[20px] md:mb-[32px] mt-[8px]"
              id={currentItemId}
              ref={useRef(null)}
            >
              {courseContent.content
                ? courseContent.content
                : courses[0].introduction}
            </p>
          </div>
        </div>
      </ModuleLayout>
    </div>
  );
};

export default withStudentAuth(CourseModule);
