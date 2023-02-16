import Meta from "components/Meta";
import Nav from "components/Nav";
import React, { useState } from "react";
import Link from "next/link";
import CourseOverview from "components/CourseOverview";
import Curriculum from "components/Curriculum";
import Schedule from "components/Schedule";
import ToolsCard from "components/ToolsCard";
import Instructor from "components/Instructor";
import Footer from "components/Footer";

const Card = ({ title, btnText, icon, children }) => {
  const [show, setShow] = useState(false);

  return (
    <div className=" min-h-[77px] rounded-[8px] bg-[#c8c8c8] mt-[10px]">
      <div className="px-[20px] p-[16px] flex justify-between items-center h-full">
        <div className="flex gap-x-[27px] items-center">
          {/* <FcPlus color="#E40084" /> */}
          <img src="/images/icons/plus.png" alt="" />
          <h3
            className={`${
              show
                ? "text-[24px] font-[700] leading-[30.62px]"
                : "font-[400] text-[20px] leading-[25.52px] "
            }font-space text-primaryPurple`}
          >
            {title}
          </h3>
          {icon && <img src="/images/icons/move.png" />}
        </div>
        <button
          className="px-[20px] py-[10px] text-[20px] font-[700] font-space leading-[25.52px] text-[#3f3d3d] border border-[#3f3d3d]"
          onClick={() => setShow(!show)}
        >
          {btnText}
        </button>
      </div>
      {show && (
        <div className=" bg-[#F3F2F2] text-left rounded-b-[8px]">
          <div className="py-[16px] pl-[16px] pr-[30px]">{children}</div>
        </div>
      )}
    </div>
  );
};
const CollaborateCard = () => {
  return (
    <>
      <div className="grid grid-rows-4 grid-flow-col gap-4">
        <div className="bg-red-400">0</div>
        <div class="row-span-2 bg-red-400">01</div>
      </div>
    </>
  );
};
const uiux = () => {
  return (
    <div>
      <Meta />
      <Nav />
      <section className="flex justify-between pl-[120px] bg-black h-[600px] overflow-hidden">
        <div className="md:max-w-[600px]">
          <h1 className="font-space font-[700] text-[80px] leading-[102px] text-primaryYellow mt-[31px]">
            UX/UI Design
          </h1>
          <h3 className="font-space font-[400] text-[60px] leading-[77px] mt-[18px] mb-[50px] text-[#C0BAA9]">
            Duration · 12 weeks
          </h3>
          <p className="font-space font-[400] text-[32px] leading-[41px] mt-[18px] mb-[50px] text-[#C0BAA9]">
            5/5 · 100% completion rate
          </p>
          <p className="font-dmsans font-[400] text-[24px] leading-[31px] text-[#f2f2f2] mb-[60px]">
            Learn the skills of a UX/UI Designer with a micro class. Join
            physically and collaborate in classmate. You'll create a series of
            case studies and publish your UX/UI portfolio during the program!
          </p>
          <Link
            href=""
            className="bg-white  text-primaryPurple py-[16px] px-[32px] font-space font-bold text-[27px] hover:animate-pulse ease-out duration-300 rounded-[5px]"
          >
            Enroll Now
          </Link>
        </div>
        <div className="h-[600px] w-[600px]">
          <img
            src="/images/courses/uxui.png"
            alt="uxui course"
            className="w-[600px] h-full"
          />
        </div>
      </section>
      <section className="h-[106px] flex items-center pl-[120px] bg-[#0f0309]">
        <ul className="flex justify-between basis-[90%]">
          <li>
            <Link
              href="#overview"
              className="font-space font-[700] text-[20px] leading-[26px]  text-primaryPurple"
            >
              OVERVIEW
            </Link>
          </li>
          <li>
            <Link
              href="#curriculum"
              className="font-space font-[700] text-[20px] leading-[26px]  text-white"
            >
              UI/UX Curriculum
            </Link>
          </li>
          <li>
            <Link
              href="#schedule"
              className="font-space font-[700] text-[20px] leading-[26px]  text-white"
            >
              Our Schedule
            </Link>
          </li>
          <li>
            <Link
              href="#portfolio"
              className="font-space font-[700] text-[20px] leading-[26px]  text-white"
            >
              UI/UX Porfolio
            </Link>
          </li>
          <li>
            <Link
              href="#instructor"
              className="font-space font-[700] text-[20px] leading-[26px]  text-white"
            >
              Instructor
            </Link>
          </li>
          <li>
            <Link
              href="#tools"
              className="font-space font-[700] text-[20px] leading-[26px]  text-white"
            >
              Tools
            </Link>
          </li>
          <li>
            <Link
              href="#pricing"
              className="font-space font-[700] text-[20px] leading-[26px]  text-white"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="#cohort"
              className="font-space font-[700] text-[20px] leading-[26px]  text-white"
            >
              Next Cohort
            </Link>
          </li>
          <li>
            <Link
              href="#faq"
              className="font-space font-[700] text-[20px] leading-[26px]  text-white"
            >
              FAQ
            </Link>
          </li>
        </ul>
      </section>
      <CourseOverview />
      <Curriculum />
      <Schedule />
      <section
        id="schedule"
        className="pt-[59px] pl-[64px] pb-[140px] bg-[#0a0909] text-center
      "
      >
        <h3 className="font-space font-[700] text-[32px] leading-[35.2px] text-center text-primaryYellow">
          PROGRAM SCHEDULE
        </h3>
        <p className="mt-[43px] font-space font-[700] text-[26px] leading-[11.7px] text-[#cccccc]">
          Learn UX/UI Design live with a micro class of 30 Designers
        </p>
        <p className="w-[1015px] mx-auto text-center mt-[40px] mb-[100px] font-dmsasns font-[400] text-[20px] leading-[26px] text-[#9b9b9b]">
          Our UX/UI Classes are intense and It will be a lot of work. We pride
          ourselves on having a schedule that works for busy designers around
          the world. Every step of the way you'll receive support from your
          teacher, classmates, and our tribe of thousands of designers around
          the world!
        </p>
        <div className="flex gap-x-[62px]">
          <div
            className="pt-[29px] pl-[17px] bg-black min-h-[334px] w-[334.81px] pb-[10px] border-b-2 border-b-[rgba(184, 168, 125, 0.25)] text-left pr-[15px] rounded-[8px]"
            style={{ borderBottomColor: "rgba(184, 168, 125, 0.25)" }}
          >
            <img src="/images/icons/pee.png" alt="pee" />
            <p className="my-[16px] font-space font-[700] text-[25px] leading-[31.9px] text-[#c0baa9]">
              Expert educators
            </p>
            <p className="font-dmsans font-[700] text-[25px] leading-[32.55px] text-white">
              You’ll learn live from the best in the design industry; Jerry is
              the a designer @ Figma
            </p>
          </div>
          <div
            className="pt-[29px] pl-[17px] bg-black min-h-[334px] w-[334.81px] pb-[10px] border-b-2 border-b-[rgba(184, 168, 125, 0.25)] text-left pr-[15px] rounded-[8px]"
            style={{ borderBottomColor: "rgba(184, 168, 125, 0.25)" }}
          >
            <img src="/images/icons/pee.png" alt="pee" />
            <p className="my-[16px] font-space font-[700] text-[25px] leading-[31.9px] text-[#c0baa9]">
              Certification
            </p>
            <p className="font-dmsans font-[700] text-[25px] leading-[32.55px] text-white">
              You’ll learn live from the best in the design industry; Jerry is
              the a designer @ Figma
            </p>
          </div>
          <div
            className="pt-[29px] pl-[17px] bg-black min-h-[334px] w-[334.81px] pb-[10px] border-b-2 border-b-[rgba(184, 168, 125, 0.25)] text-left pr-[15px] rounded-[8px]"
            style={{ borderBottomColor: "rgba(184, 168, 125, 0.25)" }}
          >
            <img src="/images/icons/pee.png" alt="pee" />
            <p className="my-[16px] font-space font-[700] text-[25px] leading-[31.9px] text-[#c0baa9]">
              Live Design Critics
            </p>
            <p className="font-dmsans font-[700] text-[25px] leading-[32.55px] text-white">
              You'll learn the value of asking for and giving feedback during
              the tvelve weeks of our Program. Our live Design Crits are held by
              our super Teaching Assistants
            </p>
          </div>
        </div>
      </section>
      <section
        id="collaborate"
        className="pt-[59px] px-[64px] pb-[65px] bg-black text-center
      "
      >
        <h3 className="font-space font-[700] text-[32px] leading-[35.2px] text-center text-primaryYellow">
          COLLABORATE WITH CLASSMATES
        </h3>

        <p className="w-[1015px] mx-auto text-center mt-[50px] mb-[80px] font-dmsasns font-[400] text-[20px] leading-[26px] text-[#9b9b9b]">
          We're doing our best to make it easy for you to learn UX/UI at a time
          that works for you. Right now, we have multiple live micro classes in
          every cohort. So, although you'll be learning live with a micro class,
          you'll get the opportunity to connect with over 60 awesome designers
          learning live around the world!
        </p>
        <div className="grid grid-rows-2 grid-cols-6 gap-4">
          <div className="bg-red-400 w-[179px]"> mon</div>
          <div className="bg-red-400 w-[179px]"> mon</div>
          <div className="bg-red-400 w-[179px]">Tu</div>
          <div className="bg-red-400 w-[179px]">we</div>
          <div className="bg-red-400 w-[179px]">thur</div>
          <div class="row-span-2 bg-red-400">fri</div>
          <div class="row-span-2 bg-red-400">week</div>
        </div>
      </section>
      <section
        id="portfolio"
        className="pt-[59px] pl-[64px] pb-[150px] bg-[#0a0909] text-center
      "
      >
        <h3 className="font-space font-[700] text-[32px] leading-[35.2px] text-center text-primaryYellow">
          UX/UI PORTFOLIO
        </h3>
        <p className="mt-[43px] font-space font-[700] text-[26px] leading-[11.7px] text-[#cccccc]">
          Build an interview-ready portfolio
        </p>
        <p className="w-[1015px] mx-auto text-center mt-[40px] mb-[80px] font-dmsasns font-[400] text-[20px] leading-[26px] text-[#9b9b9b]">
          We're proud to be the only UX/UI Program that helps you design and
          launch your portfolio during Bootcamp. This ensures you complete our
          Bootcamp with the skills of a UX/UI designer, and a portfolio to show
          for it, helping you find your dream role sooner!
        </p>
        <div className="w-[1150px]">
          <Card title="UX/UI Portfolio" btnText="launch during program">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
              voluptatum.
            </p>
          </Card>
          <Card title="UX/UI Career" btnText="Career support">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
              voluptatum.
            </p>
          </Card>
        </div>
      </section>
      <section
        id="tools"
        className="pt-[59px] px-[220px] pb-[65px] bg-black text-center
      "
      >
        <h3 className="font-space font-[700] text-[32px] leading-[35.2px] text-center text-primaryYellow">
          UX/UI DESIGN TOOLS
        </h3>
        <p className="mt-[43px] font-space font-[700] text-[26px] leading-[11.7px] text-[#cccccc]">
          Master the latest UX/UI design tools and workflows
        </p>
        <p className="mx-auto text-center mt-[40px] mb-[130px] font-dmsasns font-[400] text-[20px] leading-[26px] text-[#9b9b9b]">
          Our Programs are designed around the latest UX/UI design tools. Unlike
          corporate courses that have a fixed tool-stack from decades past, we
          believe it's important to equip designers with the latest tool-stack
          to excel in their career.
        </p>
        <div className="flex gap-x-[24px] mb-[20px]">
          <ToolsCard
            title="Figma"
            img="figma"
            details="Collaborative interface design tool used by remote design team to collaborate live."
          />
          <ToolsCard
            title="Notion"
            img="notion"
            details="Collaborative interface design tool used by remote design team to collaborate live."
          />
          <ToolsCard
            title="Slack"
            img="slack"
            details="Collaborative interface design tool used by remote design team to collaborate live."
          />
        </div>
        <div className="flex gap-x-[24px] ">
          <ToolsCard
            title="Maze"
            img="figma"
            details="Collaborative interface design tool used by remote design team to collaborate live."
          />
          <ToolsCard
            title="Loom"
            img="figma"
            details="Collaborative interface design tool used by remote design team to collaborate live."
          />
          <ToolsCard
            title="Typeform"
            img="tee"
            details="Collaborative interface design tool used by remote design team to collaborate live."
          />
        </div>
      </section>
      <section
        id="pricing"
        className="pt-[59px] pl-[64px] pb-[65px] bg-[#0a0909] text-center"
      >
        <h3 className="font-space font-[700] text-[32px] leading-[35.2px] text-center text-primaryYellow">
          PRICING PLANS
        </h3>
        <p className="mt-[43px] font-space font-[700] text-[26px] leading-[11.7px] text-[#cccccc]">
          Simple, transparent and flexible plans
        </p>
        <p className="w-[831px] mx-auto text-center mt-[40px] mb-[80px] font-dmsasns font-[400] text-[20px] leading-[26px] text-[#9b9b9b]">
          Unlike other courses who tuck away their prices, we are totally
          transparent with our online Bootcamp pricing and take pride in being
          accessible and affordable.
        </p>
      </section>
      <section className="px-[57px] py-[62px]  bg-[url('/images/devcentbg.png')] min-h-[110vh] w-[100vw] overflow-hidden ">
        <h3 className="font-space font-[700] text-[32px] leading-[35.2px] text-center text-primaryYellow">
          LEARN WITH THE BEST
        </h3>
        <div className="flex gap-x-[50px] mb-[60px]">
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
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default uiux;
