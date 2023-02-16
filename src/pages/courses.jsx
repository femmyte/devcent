import React from "react";
import Nav from "components/Nav";
import Meta from "components/Meta";
import CourseCard from "components/CourseCard";
import Instructor from "components/Instructor";
import Footer from "components/Footer";

const courses = () => {
  return (
    <>
      <Meta />
      <Nav />
      <div className="bg-black">
        <section className="h-[95vh] flex items-center bg-black">
          <div className="flex w-[440px] gap-x-[38px] items-center justify-center">
            <p className="font-space font-[700] text-[15px] leading-[19.14px] text-[#e40084]">
              Courses
            </p>
            <div className="w-[191px] border h-[2px] b-white"></div>
          </div>
          <div className="pr-[158px]">
            <h1 className="font-space font-[700] text-[96px] leading-[94.1px] text-[#ffba0e] w-[545px] ">
              Courses <br /> Resources
            </h1>
            <p
              className="font-dmsans font-[400] text-[24px] mt-[18px] leading-[31.25px] w-[842px] text-white
          "
            >
              Our range of Skills resources will help you Build your career with
              as few bumps as possible. From pitching to clients, showing your
              work, or securing your business’s future, we’ve got what you need.
            </p>
          </div>
        </section>
        <section className="gap-y-[120px]">
          <CourseCard
            img="uiux"
            title="UI/UX"
            description="Learn the fundamentals of frontend, backend, servers, databases, APIs, and more to be ready for a career in web development."
            link="/courses/uiux"
          />
          <CourseCard
            img="dataScience"
            title="data science"
            description="Learn the fundamentals of frontend, backend, servers, databases, APIs, and more to be ready for a career in web development."
            link="#"
          />
          <CourseCard
            img="frotend"
            title="UI Design"
            description="Learn the fundamentals of frontend, backend, servers, databases, APIs, and more to be ready for a career in web development."
            link="#"
          />
          <CourseCard
            img="uiux"
            title="Full Stack Web"
            description="Learn the fundamentals of frontend, backend, servers, databases, APIs, and more to be ready for a career in web development."
            link="#"
          />
          <CourseCard
            img="uiux"
            title="Fronted Dev"
            description="Learn the fundamentals of frontend, backend, servers, databases, APIs, and more to be ready for a career in web development."
            link="#"
          />
          <CourseCard
            img="uiux"
            title="Backend Dev"
            description="Learn the fundamentals of frontend, backend, servers, databases, APIs, and more to be ready for a career in web development."
            link="#"
          />
        </section>
        <section className="px-[57px] mt-[130px] pt-[20px] pb-[18px]  bg-[url('/images/devcentbg.png')] h-[100vh] w-[100vw] overflow-hidden flex gap-x-[50px]">
          <Instructor
            img="mary"
            name="Mariam Omotola"
            role="UI Designer, DevCent"
            description="Mariam has enjoyed working in UX design across a variety of domains at Google, from YouTube, to technical cloud platforms. She is particularly interested in bringing a human touch to products. She received her Master's in Human Computer Interaction from The University of Michigan."
          />
          <Instructor
            img="tosin"
            name="Fakile Tosin"
            role="UI Designer, Tinacle"
            description="Tosin has enjoyed working in UX design across a variety of domains at Google, from YouTube, to technical cloud platforms. He is particularly interested in bringing a human touch to products. She received her Master's in Human Computer Interaction from The University of Michigan."
          />
          <Instructor
            img="alalade"
            name="Olanrewaju Alalade"
            role="UI Designer, DevCent"
            description="Olanrewaju has enjoyed working in UX design across a variety of domains at Google, from YouTube, to technical cloud platforms. He is particularly interested in bringing a human touch to products. She received her Master's in Human Computer Interaction from The University of Michigan."
          />
        </section>
        <Footer />
      </div>
    </>
  );
};

export default courses;
