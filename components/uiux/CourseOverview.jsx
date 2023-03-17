import React from "react";

const LearnArea = ({number, title, info}) => {
 return <>
   <div className="md:flex justify-between items-center">
     <div className="flex"> 
      <h2 className="font-[700] font-space text-[25px] md:text-[40px] leading-[35px] mr-[15px] md:mr-[30px] text-primaryYellow">{number}</h2>
      <p className="font-[700] font-space text-[20px] md:text-[30px] leading-[25px] text-white text-left">{title}</p>
     </div>
      <p className="md:w-[580px] font-dmsans font-[400] text-[18px] leading-[35px] text-white text-left">{info }</p>
    </div>
    <div className="w-full h-[1px] bg-[#9b9b9b] mt-[20px] md:mt-[30px] mb-[20px] md:mb-[30px]"></div>
    </>
}
const CourseOverview = () => {
  return (
    <div
      id="overview"
      className="pt-[59px] px-[20px] md:pl-[50px] pb-[35px] md:pb-[120px] bg-black text-center
      "
    >
      <h3 className="font-space font-[700] text-[32px] leading-[35.2px] text-center text-primaryYellow">
        COURSE OVERVIEW
      </h3>
      {/* <p className="mt-[43px] mb-[80px] font-space font-[700] text-[26px] leading-[11.7px] text-[#cccccc]">
        Change your life, become a UX/UI Designer
      </p> */}
      <p className="md:w-[1015px] mx-auto text-center mt-[24px] mb-[20px] font-dmsasns font-[400] text-[20px] leading-[26px] text-[#9b9b9b]">
        Our UX/UI Design is an immersive 12 week learning experience. You'll take a learn-by-doing approach during every class session. During this course, you'll understand the design thinking process, master the latest design tools, build case studies and importantly, design and launch your portfolio!
      </p>
      <div className="md:grid md:grid-cols-4 gap-4 px-[10px] md:px-[120px] mt-[20px] md:mt-[50px]">
                <div className="flex flex-col gap-x-[15px] md:gap-x-[24px] items-center">
                  <img src="/images/icons/duration.png" alt="" />
                  {/* <div> */}
                  <h3 className="font-space font-[500] text-[24px] leading-[31px] text-white mb-[8px] mt-[15px] md:mt-[26px]">Duration</h3>
                  <p className="text-[18px] font-space font-[400] leading-[23px] text-[#9b9b9b]">12 weeks of intense learning and practice</p>
                  {/* </div> */}
        </div>
         <div className="flex flex-col gap-x-[15px] md:gap-x-[24px] items-center my-[15px] md:my-0">
                  <img src="/images/icons/training.png" alt="" />
                  {/* <div> */}
                  <h3 className="font-space font-[500] text-[24px] leading-[31px] text-white mb-[8px] mt-[15px] md:mt-[26px]">Training Method</h3>
                  <p className="text-[18px] font-space font-[400] leading-[23px] text-[#9b9b9b]"> Hands on sessions to gain real experience</p>
                  {/* </div> */}
        </div>
         <div className="flex flex-col gap-x-[15px] md:gap-x-[24px] items-center">
                  <img src="/images/icons/flexible.png" alt="" />
                  {/* <div> */}
                  <h3 className="font-space font-[500] text-[24px] leading-[31px] text-white mb-[8px] mt-[15px] md:mt-[26px]">Flexible Learning</h3>
                  <p className="text-[18px] font-space font-[400] leading-[23px] text-[#9b9b9b]">Self paced journey on your lessons</p>
                  {/* </div> */}
        </div>
         <div className="flex flex-col gap-x-[15px] md:gap-x-[24px] items-center mt-[20px] md:mt-0">
                  <img src="/images/icons/course.png" alt="" />
                  {/* <div> */}
                  <h3 className="font-space font-[500] text-[24px] leading-[31px] text-white mb-[8px] mt-[15px] md:mt-[26px]">Course Resources</h3>
                  <p className="text-[18px] font-space font-[400] leading-[23px] text-[#9b9b9b]">Get access to over 500 design resources</p>
                  {/* </div> */}
        </div>
        </div>
      {/* <p className="w-[1015px] mx-auto text-center mb-[120px] font-dmsasns font-[400] text-[20px] leading-[26px] text-[#9b9b9b]">
        {" "}
        During this course, you'll understand the design thinking process,
        master the latest design tools, build case studies and importantly,
        design and launch your portfolio!
      </p> */}
      <section className="">
      <h3 className="font-space font-[700] text-[32px] leading-[35.2px] text-center text-primaryYellow mt-[30px] md:mt-[140px]">
        What you'll learn
      </h3>
      <p className="md:w-[1015px] mx-auto text-center mt-[24px] mb-[20px] font-dmsasns font-[400] text-[20px] leading-[26px] text-[#9b9b9b]">
        This course equips you with the skill set needed to design user centered product while meeting business needs. You'd learn how to achieve these through user research, ideation, bringing your ideas to life through prototypes and testing them with users.
        </p>
        <div className="py-[30px] md:py-[50px]">
          <LearnArea number='01' title='Introduction to UIUX' info='Designing tools, identifying good and bad design, design critique, understanding design briefs' />
          <LearnArea number='02' title='Design-thinking Research' info='Designing tools, identifying good and bad design, design critique, understanding design briefs' />
          <LearnArea number='03' title='Fundamentals of UX Design' info='User research.  User flow.  User Stories. User testing. Usability. Information architecture.' />
          <LearnArea number='04' title=' Elements of  (UI) Design' info='Typography. Color. Grids and layout. Atomic design. Design systems. Responsive design. Accessibility.' />
          <LearnArea number='05' title='High-fidelity Prototypes' info='User flows. Low to high fidelity design. Creating interactive prototypes.' />
          <LearnArea number='06' title='Handoff and documentation' info='Documenting design. Handoff workflow. Working with developer. Measuring product success with analytics.' />
          <LearnArea number='07' title='Projects and career support' info='Personal project. Inter-track project. Client Project. Career profile review.' />
          
        </div>
      </section>
      {/* <div className="flex gap-x-[80px]">
        <div className="">
          <div className="flex items-start gap-x-[21px] mb-[35px] ">
            <img src="/images/icons/mark.png" alt="" className="" />
            <div className="text-[#9b9b9b] text-left">
              <h5 className="mb-[9px] text-[20px] font-dmsans font-[700]">
                UX Research
              </h5>
              <p className="w-[518px] font-dmsans font-[700] text-[17px] leading-[28px]">
                Learn the value of mapping the content of a product both
                globally and locally
              </p>
            </div>
          </div>
          <div className="flex items-start gap-x-[21px] mb-[35px] ">
            <img src="/images/icons/mark.png" alt="" className="" />
            <div className="text-[#9b9b9b] text-left">
              <h5 className="mb-[9px] text-[20px] font-dmsans font-[700]">
                Information Architecture
              </h5>
              <p className="w-[518px] font-dmsans font-[700] text-[17px] leading-[28px]">
                Master user flow diagramming in Figma to help inform your design
              </p>
            </div>
          </div>
          <div className="flex items-start gap-x-[21px] mb-[35px] ">
            <img src="/images/icons/mark.png" alt="" className="" />
            <div className="text-[#9b9b9b] text-left">
              <h5 className="mb-[9px] text-[20px] font-dmsans font-[700]">
                Wireframing & Sketching
              </h5>
              <p className="w-[518px] font-dmsans font-[700] text-[17px] leading-[28px]">
                Learn the value of rapidly ideating and wireframing to test your
                design
              </p>
            </div>
          </div>
          <div className="flex items-start gap-x-[21px] mb-[35px] ">
            <img src="/images/icons/mark.png" alt="" className="" />
            <div className="text-[#9b9b9b] text-left">
              <h5 className="mb-[9px] text-[20px] font-dmsans font-[700]">
                UI Interactive Components
              </h5>
              <p className="w-[518px] font-dmsans font-[700] text-[17px] leading-[28px]">
                Ace Figma and learn how to rapidly create interactive components
                with Figma
              </p>
            </div>
          </div>
          <div className="flex items-start gap-x-[21px] mb-[35px] ">
            <img src="/images/icons/mark.png" alt="" className="" />
            <div className="text-[#9b9b9b] text-left">
              <h5 className="mb-[9px] text-[20px] font-dmsans font-[700]">
                UI Design
              </h5>
              <p className="w-[518px] font-dmsans font-[700] text-[17px] leading-[28px]">
                Learn the the way to deisgn eyes pleasing Interfaces
              </p>
            </div>
          </div>
        </div>
        {/* /col-1 *
        <div className="">
          <div className="flex items-start gap-x-[21px] mb-[35px] ">
            <img src="/images/icons/mark.png" alt="" className="" />
            <div className="text-[#9b9b9b] text-left">
              <h5 className="mb-[9px] text-[20px] font-dmsans font-[700]">
                Design Thinking
              </h5>
              <p className="w-[518px] font-dmsans font-[700] text-[17px] leading-[28px]">
                Understand the value and learn how to conduct UX Research
              </p>
            </div>
          </div>
          <div className="flex items-start gap-x-[21px] mb-[35px] ">
            <img src="/images/icons/mark.png" alt="" className="" />
            <div className="text-[#9b9b9b] text-left">
              <h5 className="mb-[9px] text-[20px] font-dmsans font-[700]">
                User Flows
              </h5>
              <p className="w-[518px] font-dmsans font-[700] text-[17px] leading-[28px]">
                Understand how to ideate on a user problem with a series of
                practical techniques
              </p>
            </div>
          </div>
          <div className="flex items-start gap-x-[21px] mb-[35px] ">
            <img src="/images/icons/mark.png" alt="" className="" />
            <div className="text-[#9b9b9b] text-left">
              <h5 className="mb-[9px] text-[20px] font-dmsans font-[700]">
                UI Styles
              </h5>
              <p className="w-[518px] font-dmsans font-[700] text-[17px] leading-[28px]">
                Master creating Color palettes, Typography, Grid Systems and all
                styles in Figma
              </p>
            </div>
          </div>
          <div className="flex items-start gap-x-[21px] mb-[35px] ">
            <img src="/images/icons/mark.png" alt="" className="" />
            <div className="text-[#9b9b9b] text-left">
              <h5 className="mb-[9px] text-[20px] font-dmsans font-[700]">
                Animation & Prototyping
              </h5>
              <p className="w-[518px] font-dmsans font-[700] text-[17px] leading-[28px]">
                Create animations of your hi-fidelity mockups using
                smart-animate in Figma
              </p>
            </div>
          </div>
          <div className="flex items-start gap-x-[21px] mb-[35px] ">
            <img src="/images/icons/mark.png" alt="" className="" />
            <div className="text-[#9b9b9b] text-left">
              <h5 className="mb-[9px] text-[20px] font-dmsans font-[700]">
                Interview Techniques
              </h5>
              <p className="w-[518px] font-dmsans font-[700] text-[17px] leading-[28px]">
                Learn the interview stages and techniques to smash interviews
                and design challenges
              </p>
            </div>
          </div>
        </div>
        {/* /col-2 
      </div> */}
    </div>
  );
};

export default CourseOverview;
