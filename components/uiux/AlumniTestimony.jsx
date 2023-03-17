import Grid from "components/Grid";
import React, { useState } from "react";
import { FcPlus } from "react-icons/fc";

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
const TestimonyCard = ({image, name, title, info }) => {
  return (
    <div className="bg-[#1F1D1D] px-[12px] md:px-[12px] py-[15px] md:py-[24px] rounded-[16px] text-white mb-[20px] md:mb-[40px]">
      <div className="flex items-center">
        <img src={`/images/testimony/${image}.png`} alt="" />
        <div className="ml-[16px]">
          <h3 className="font-[700] font-space text-[24px] leading-[31px] text-left">{name}</h3>
          <p className="font-[500] font-space text-[16px] leading-[31px] mt-[2px] mb-[17px] text-left">{title}</p>
        </div>
      </div>
      <p className="font-[400] font-space text-[16px] leading-[31px] text-left">{info}</p>
    </div>
  )
}
const AlumniTestimony = () => {
  return (
    <div
      id="schedule"
      className="pt-[59px] pb-[65px] bg-black text-center
      "
    >
      <h3 className="font-space font-[700] text-[32px] leading-[35.2px] text-center text-primaryYellow">
        WHAT OUR ALUMNI ARE SAYING
      </h3>
      <p className="md:w-[1015px] mx-[20px] md:mx-auto text-center mt-[40px] mb-[80px] font-dmsasns font-[400] text-[20px] leading-[26px] text-[#9b9b9b]">
        Seeing our students making impact at top tech companies and getting paid for their service gives us great joy.
      </p>
      <div className="relative bg-[url('/images/alumnitestimonybg.png')] min-h-[120vh] w-full bg-cover bg-center overflow-hidden">
        {/* <img src="/images/alumnitestimonybg.png" alt="alumnitestimonybg" /> */}
         <div
          className="absolute top-[1px] left-0 right-0 bottom-0 min-h-[120vh] w-[95vw] md:w-[70vw] mx-auto z-[1]"
          style={{
            background: "rgba(0, 0, 0, 0.2)",}}
        />
        <div className="relative flex flex-col items-center justify-center w-[95vw] md:w-[70vw] h-[120vh] mx-auto">
          <img src="/images/icons/video.png" alt="video icon" />
          <p className="font-space font-[500] text-[18px] md:text-[24px] leading-[40px]text-center text-white mt-[30px] md:mt-[56px] mb-[30px] md:mb-[80px]">“I was able to achieve my dreams and become the designer i’ve always dreamed to be thanks to Devcent”</p>
          <p className="font-space font-[700] leading-[40px] text-center text-[30px] md:text-[40px]">-  Mojoyin</p>
          <p className="font-space font-[500] text-[24px] leading-[40px]text-center text-white">UiUx Designer</p>
        </div>
      </div>
      <section className="mx-[20px] md:mx-[40px] my-[20px] md:my-[40px]">
      <Grid>
        <TestimonyCard image='isaac' name='Isaac Olorunfemi' title='UiUx Designer' info='Devcent helped me build strong confidence in my design skills  it was a really lovely and insightful experience. I met really interesting people who are fun to talk to.' />
        <TestimonyCard image='vivian' name='Vivian Anyawu' title='UiUx Designer' info='Devcent helped me build strong confidence in my design skills  it was a really lovely and insightful experience. I met really interesting people who are fun to talk to.' />
        <TestimonyCard image='esther' name='Esther Ayodele' title='UiUx Designer' info='Devcent helped me build strong confidence in my design skills  it was a really lovely and insightful experience. I met really interesting people who are fun to talk to.' />
        <TestimonyCard image='leonard' name='Leonard Victor' title='UiUx Designer' info='Devcent helped me build strong confidence in my design skills  it was a really lovely and insightful experience. I met really interesting people who are fun to talk to.' />
        <TestimonyCard image='sanni' name='Sanni Mustapha' title='UiUx Designer' info='Devcent helped me build strong confidence in my design skills  it was a really lovely and insightful experience. I met really interesting people who are fun to talk to.' />
        <TestimonyCard image='daniel' name='Daniel Ifeanyi' title='UiUx Designer' info='Devcent helped me build strong confidence in my design skills  it was a really lovely and insightful experience. I met really interesting people who are fun to talk to.' />
        <TestimonyCard image='amoebi' name='Ameobi Jemima' title='UiUx Designer' info='Devcent helped me build strong confidence in my design skills  it was a really lovely and insightful experience. I met really interesting people who are fun to talk to.' />
        <TestimonyCard image='akanni' name='Akanni Hassan' title='UiUx Designer' info='Devcent helped me build strong confidence in my design skills  it was a really lovely and insightful experience. I met really interesting people who are fun to talk to.' />
         <TestimonyCard image='buhari' name='Buhari Raheemat' title='UiUx Designer' info='Devcent helped me build strong confidence in my design skills  it was a really lovely and insightful experience. I met really interesting people who are fun to talk to.' />
        </Grid>
      </section>
    </div>
  );
};

export default AlumniTestimony;
