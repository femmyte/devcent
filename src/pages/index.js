import Box from "components/Box";
import Footer from "components/Footer";
import Meta from "components/Meta";
import Nav from "components/Nav";
import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <div>
      <Meta title="Devcent | Home" />
      {/* <Animation style="flip-left" placement="center-center"> */}
      {/* <div className="relative bg-[url('/images/homebg.png')] h-[140vh] bg-cover bg-center overflow-hidden"> */}
        <div
          className="absolute top-[1px] left-0 right-0 bottom-0 min-h-[110vh] z-[1] bg-black"
          // style={{
          //   background: "rgba(0, 0, 0, 0.92)",
          //   // "linear-gradient(84.59deg, rgba(0, 0, 0, 0.58) 17.84%, rgba(0, 0, 0, 0.17) 52.14%, rgba(0, 0, 0, 0.65) 80.9%)",
          // }}
        />
        <Nav />

        {/* <div className='flex justify-between relative'> */}

        <div className="flex justify-between text-white z-10 md:pr-[27px] md:ml-[40px] h-[65%] relative">
          <div className="w-full md:w-[580px] mt-[20px] md:mt-[120px] text-center md:text-left">
            <h1 className="text-white text-[30px] md:text-[48px] font-[700] leading-[35px] md:leading-[58px] font-space ">
              Developing <span className="text-[#FFBA0E]">Worldclass </span>{" "}
              <br />
              Tech <span className="text-[#FFBA0E]">Talent</span> at{" "}
              <span className="text-[#FFBA0E]"> Devcent</span>
            </h1>
            <p className="text-[20px] md:text-[24px] leading-6 md:leading-10 my-[20px]  ">
              Our Trainings are designed to help you learn <br /> from the best
              industry experts around.
            </p>
            <button className="mt-[20px] text-white bg-[#E40084] w-[160px] h-[47px] font-source text-[18px] rounded-lg hover:animate-pulse ease-out duration-300 ">
              Get Started
            </button>
          </div>
          <div>
            {/* <img src="/images/map.png" /> */}
          </div>
        </div>
        {/* </div> */}
      {/* </div> */}
      <section className="bg-black pt-[30px] md:pt-[90px] pb-[50px] md:pb-[150px] px-[10px] ">
        <h1 className="font-space font-[700] text-white text-[30px] md:text-[40px] leading-[35px] md:leading-[51px] text-center mx-[20px] md:mx-[70px] mt-[50px] ">
          Develop tech skills. save times. Build happier tech life. And
          transform your goals into gains. All with Devcent
        </h1>
        <p className="md:w-[886px] mt-[90px] text-[25px] text-center font-dmsans leading-[33px] mx-auto text-[#ffba0e] mb-[20px] md:mb-[100px]">
          Our online UX/UI & coding bootcamps are created to support you in
          learning via practice in a mini class of about 30 people globally.
        </p>

        <div className="md:flex">
          <div className="md:min-w-[500px] flex flex-col justify-center items-center md:items-start mb-[20px] md:mb-0 md:ml-[30px]">
            <p className="font-bold font-space text-[30px] md:text-[48px] leading-[35px] md:leading-[61px] text-white text-center md:text-left md:w-[410px]">
              Develop tech <br /> skills. save times. <br /> Build happier{" "}
              <br /> tech life
            </p>
            <button className="mt-[20px] md:mt-[115px] mx-auto md:mx-0 text-white bg-[#E40084] py-[20px] px-[56px] font-source text-[18px] rounded-lg hover:animate-pulse ease-out duration-300 ">
              View all
            </button>
          </div>
          <div className="">
            <div className="md:flex gap-x-[36px]">
              <Box
                img="/images/icons/uiux.png"
                title="UI/UX Design"
                description="Far far away, behind the word mountains, far from the countries Vokalia Separated..."
              />
              <Box
                img="/images/icons/fulstack.png"
                title="Full Stack Web"
                description="Far far away, behind the word mountains, far from the countries Vokalia Separated..."
              />
            </div>
            <div className="md:flex gap-x-[36px] mt-[50px]">
              <Box
                img="/images/icons/dataScience.png"
                title="Data Science"
                description="Far far away, behind the word mountains, far from the countries Vokalia Separated..."
              />
              <Box
                img="/images/icons/backend.png"
                title="Backend Development"
                description="Far far away, behind the word mountains, far from the countries Vokalia Separated..."
              />
            </div>
          </div>
        </div>
          <div className="mt-[30px] md:mt-[200px]">
              <h1 className="font-space font-[700] text-[#ffba0e] text-[20px] md:text-[40px] leading-[35px] md:leading-[51px] text-center  ">
                THE BEST TIME TO START IS NOW
              </h1>
              {/* <div className="flex gap-x-[36px] mt-[50px]"> */}
              <div className="md:grid md:grid-cols-3 gap-4 px-[10px] md:px-[120px] mt-[20px] md:mt-[50px]">
                <div className="flex gap-x-[15px] md:gap-x-[24px] items-center">
                  <img src="/images/icons/learning.png" alt="" />
                  <div>
                  <h3 className="font-space font-[500] text-[24px] leading-[31px] text-white">Effective Learning</h3>
                  <p className="text-[18px] font-space font-[400] leading-[23px] text-[#9b9b9b]">Get skilled through lectures and practical sessions.</p>
                  </div>
                </div>
                 <div className="my-[20px] md:my-0 flex gap-x-[24px] items-center">
                  <img src="/images/icons/capstone.png" alt="" />
                  <div>
                  <h3 className="font-space font-[500] text-[24px] leading-[31px] text-white">Capstone Projects</h3>
                  <p className="text-[18px] font-space font-[400] leading-[23px] text-[#9b9b9b]">Get to work on multiple projects to gain know-how.</p>
                  </div>
                </div>
                 <div className="flex gap-x-[24px] items-center">
                  <img src="/images/icons/learning.png" alt="" />
                  <div>
                  <h3 className="font-space font-[500] text-[24px] leading-[31px] text-white">Intensive Training</h3>
                  <p className="text-[18px] font-space font-[400] leading-[23px] text-[#9b9b9b]">Get skilled through lectures and practical sessions.</p>
                  </div>
                </div>
              </div>
            </div>
      </section>
      <section className="md:py-[120px] bg-[#F9F9F9] md:px-[80px] relative md:min-h-[1000px]">
        <div className="relative z-20 py-[52px]  text-white bg-[url('/images/counterbg.png')] bg-cover bg-center max-h-[100vh] md:h-[751px] w-full md:w-[751px] rounded-[10px] ">
          <div
            className="absolute top-0 left-0 right-0 bottom-0 max-h-[100vh] md:h-[751px] w-full md:w-[751px] z-[1] rounded-[10px]"
            style={{
              background:
                "linear-gradient(261.98deg, rgba(228, 0, 132, 0.74) 0%, rgba(255, 186, 14, 0.55) 100%)",
            }}
          />
          <div className="relative z-10 flex flex-col h-full justify-center">
            <div className="md:ml-[240px]text-center md:text-left">
              <p className="font-roboto font-light text-[80px] md:text-[130px] leading-[90px] md:leading-[168px] text-center md:text-left">
                28
              </p>
              <p className="font-source font-regular text-[22px] leading-[55px] text-center md:text-left">
                COURSES
              </p>
            </div>
            <div className="md:flex md:ml-[70px] mb-[20px] md:mb-0">
              <div className="flex flex-col items-center md:items-start">
                <p className="font-roboto font-light text-[45px] leading-[56px]">
                  +3500
                </p>
                <p className="font-source font-regular text-[22px] leading-[30px]">
                  LIVE PROJECTS
                </p>
              </div>
              <div className="flex flex-col items-center md:items-start md:ml-[70px]">
                <p className="font-roboto font-light text-[45px] leading-[56px] ml-[10px]">
                  100%
                </p>
                <p className="font-source font-regular text-[22px] leading-[30px]">
                  HAPPY TRAINEES
                </p>
              </div>
            </div>
            {/* <div className="flex gap-x-[160px] mt-[15px] ml-[70px]">
              <p className="font-source font-regular text-[22px] leading-[30px]">
                LIVE PROJECTS
              </p>
            </div> */}
          </div>
        </div>
        <div className="mt-[15px] md:mt-[52px] md:h-[751px] md:w-[687px] md:absolute md:top-[120px] md:left-[590px] rounded-[10px] bg-white border border-[rgba(0, 0, 0, 0.14)] z-[20] px-[20px] text-center md:text-left md:pl-[93px] pt-[40px] mb-[20px] md:mb-[40px]">
          <p className="font-space font-[400] text-[30px] md:text-[42.88px] leading-[35px] md:leading-[54.72px] text-black">
            Take the next step towards <br /> your personal and <br />{" "}
            professional goals with <br />
            Devcent.
          </p>
          <div className="flex justify-center md:justify-start mt-[20px] md:mt-[32px]">
            <div
              className=" h-[5px] w-[9px] mr-[6px] rounded-[20px]"
              style={{ background: "linear-gradient(#FFBA0E 0%, #E40084 100%" }}
            ></div>
            <div
              className="h-[5px] w-[48px] rounded-[20px]"
              style={{ background: "linear-gradient(#FFBA0E 0%, #E40084 100%" }}
            ></div>
          </div>
          <p className="mt-[34px] md:mr-[60px]">
            Lorem ipsum dolor sit amet consectetur. Ac venenatis turpis
            pellentesque sit quam egestas. Est viverra vitae at lobortis mi eget
            pulvinar. Sit orci sollicitudin enim habitant rhoncus donec. Nisi
            amet tempor consequat ultrices suspendisse justo. Tortor et
            adipiscing egestas gravida eu nibh. Ultrices nam enim tristique
            sagittis auctor at penatibus neque urna. Non risus magna lacus.
          </p>
          <p className="mt-[8px] ml-[10px]">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <p className="mt-[13px] ml-[10px]">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <p className="mt-[13px] ml-[10px]">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <div className="mx-auto md:w-1/2 mb-[20px] md:mb-0">
            <button className="mt-[20px] md:mt-[40px] mx-auto text-[#E40084] border border-[#E40084] py-[10px] md:py-[20px] px-[20px] md:px-[56px] font-dmsans font-bold text-[18px] rounded-lg hover:animate-pulse ease-out duration-300 ">
              Join now
            </button>
          </div>
        </div>
      </section>
      <section className="py-[40px] px-[20px] md:px-[80px] bg-black text-white">
          <h3 className="font-space font-[700] text-[32px] leading-[35.2px] text-center text-primaryYellow">
        WHAT YOU STAND TO GAIN
      </h3>
      <p className="md:w-[1015px] mx-auto text-center mt-[40px] mb-[20px] md:mb-[80px] font-dmsans font-[400] text-[20px] leading-[26px] text-[#9b9b9b]">
       Coding, Designing, Prototyping, digital Marketing, Programming, Networking skills 
have never been more in-demand. Learn everything you need to take your career to the next level.

      </p>
        {/* <div className="md:flex"> */}
          {/* <div className="md:w-[900px] "> */}
            <div className="rounded-[8px] py-[55px] px-[0px] md:px-[40px]">
          <div className="md:flex justify-between text-white gap-x-[100px] mb-[20px] md:mb-0">
            <div className="flex gap-x-[15px] md:gap-x-[30px] items-start">
              <img src="/images/icons/markbg.png" className="" />
            <div className="md:w-[400px]">
              <h3 className="font-sora font-[700] text-white text-[24px] leading-[25px] mb-[12px]">In-depth Knowledge</h3>
                <p className="font-dmsans font-regular text-[18.5px] leading-[24px] pb-[20px] md:pb-0">
                  We train and teach you Computer and ICT skills from scratch to
                  professional level. Even if you are a novice in computer ,
                  then you are in the right place.
              </p>
            </div>
            </div>
            <div className="flex gap-x-[15px] md:gap-x-[30px] items-start">
              <img src="/images/icons/markbg.png" className="" />
            <div className="md:w-[400px]">
              <h3 className="font-sora font-[700] text-white text-[24px] leading-[25px] mb-[12px]">In-depth Knowledge</h3>
                <p className="font-dmsans font-regular text-[18.5px] leading-[24px]">
                  We train and teach you Computer and ICT skills from scratch to
                  professional level .Even if you are a novice in computer ,
                  then you are in the right place.
                </p>
              </div>
              </div>
              </div>

          <div className="md:flex justify-between text-white gap-x-[50px] md:mt-[50px]">
            <div className="flex gap-x-[15px] md:gap-x-[30px] items-start">
              <img src="/images/icons/markbg.png" className="" />
            <div className="md:w-[400px]">
              <h3 className="font-sora font-[700] text-white text-[24px] leading-[25px] mb-[12px]">In-depth Knowledge</h3>
                <p className="font-dmsans font-regular text-[18.5px] leading-[24px] pb-[20px] md:pb-0">
                  We train and teach you Computer and ICT skills from scratch to
                  professional level .Even if you are a novice in computer ,
                  then you are in the right place.
                </p> </div>
            </div>
            <div className="flex gap-x-[15px] md:gap-x-[30px] items-start">
              <img src="/images/icons/markbg.png" className="" />
            <div className="md:w-[400px]">
              <h3 className="font-sora font-[700] text-white text-[24px] leading-[25px] mb-[12px]">In-depth Knowledge</h3>
                <p className="font-dmsans font-regular text-[18.5px] leading-[24px]">
                  We train and teach you Computer and ICT skills from scratch to
                  professional level .Even if you are a novice in computer ,
                  then you are in the right place.
                </p>
              </div>
              </div>
              </div>
            </div>
            {/* <p className="mt-[50px] mb-[10px] font-space font-[700] text-[30px] leading-[38px] font-white">
              This is the right Path
            </p>
            <p className="mb-[27px] font-dmsans font-[700] text-[20px] leading-[26px] font-white ">
              Coding, Designing, Prototyping, digital Marketing, Programming,
              Networking skills <br /> have never been more in-demand. Learn
              everything you need to take your career to <br /> the next level.
            </p>
            <button className="mt-[20px] md:mt-[40px] text-white bg-[#E40084] py-[20px] px-[56px] font-source text-[18px] rounded-lg hover:animate-pulse ease-out duration-300 ">
              Learn More
            </button> */}
          {/* </div> */}
          <div className="mt-[13px] md:ml-[28px] md:grid grid-cols-3 gap-4">
            <div className="mt-[40px]">
              <div className="flex items-center">
                <img src="/images/icons/beginner.png" alt="beginner icon" />
                <h1 className="font-[700] font-space text-[30px] leading-[38px] text-white ml-[16px]">
                  Beginner Level
                </h1>
              </div>
              <p className="mt-[13px] font-dmsans font-[700] text-[15px] leading-[20px] text-[#9b9b9b] ">
                Starting from scratch in tech to help you
              </p>
            </div>
            <div className="mt-[40px]">
              <div className="flex items-center">
                <img src="/images/icons/online.png" alt="beginner icon" />
                <h1 className="font-[700] font-space text-[30px] leading-[38px] text-white ml-[16px]">
                  Online and Physical
                </h1>
              </div>
              <p className="mt-[13px] font-dmsans font-[700] text-[15px] leading-[20px] text-[#9b9b9b] ">
                Start instantly and learn at your own schedule
              </p>
            </div>
            <div className="mt-[40px]">
              <div className="flex items-center">
                <img src="/images/icons/lectures.png" alt="beginner icon" />
                <h1 className="font-[700] font-space text-[30px] leading-[38px] text-white ml-[16px]">
                  Lectures are Flexible
                </h1>
              </div>
              <p className="mt-[13px] font-dmsans font-[700] text-[15px] leading-[20px] text-[#9b9b9b] ">
                You can take online lectures at your convinent time
              </p>
            </div>
            <div className="mt-[40px]">
              <div className="flex items-center">
                <img src="/images/icons/certificate.png" alt="beginner icon" />
                <h1 className="font-[700] font-space text-[30px] leading-[38px] text-white ml-[16px]">
                  Certificates
                </h1>
              </div>
              <p className="mt-[13px] font-dmsans font-[700] text-[15px] leading-[20px] text-[#9b9b9b] ">
                We offer certificate when you are done with youer lectures
              </p>
            </div>
            <div className="mt-[40px]">
              <div className="flex items-center">
                <img src="/images/icons/language.png" alt="beginner icon" />
                <h1 className="font-[700] font-space text-[30px] leading-[38px] text-white ml-[16px]">
                  Language
                </h1>
              </div>
              <p className="mt-[13px] font-dmsans font-[700] text-[15px] leading-[20px] text-[#9b9b9b] ">
                Learn in English Langauge
              </p>
            </div>
          </div>
        {/* </div> */}
      </section>
      <section className="relative z-20 pt-[140px] py-[52px]  text-white bg-[url('/images/testimonybg.png')] bg-cover bg-fixed bg-center h-[120vh] break overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 bottom-0 h-[120vh] z-[1]"
          style={{
            background:
              "linear-gradient(261.98deg, rgba(0, 7, 2, 0.9) 8.27%, rgba(6, 7, 0, 0.8) 91.06%)",
          }}
        />
        <div className="relative z-10 flex flex-col h-full items-center justify-center ">
          <img src="/images/icons/quote.png" alt="quote acon" />
          <h1 className="mt-[100px] mb-[74px] font-dmsans font-[400] text-[27px] leading-[45px] text-center w-[748px]">
            I can recommend Devcent for anybody who wants to <br /> transit into
            Tech, their classes are top notch
          </h1>
          <img src="/images/testimony.png" alt="" />
          <p className="mt-[13px] mb-[8px] text-[18.95px] font-[700] font-space">
            Azim
          </p>
          <p className="font-dmsans font-[400] text-[18.95px] leading-[24.6px]">
            Product Designer
          </p>
        </div>
      </section>
      <section className="pt-[20px] md:pt-[60px] pb-[39px] px-[15px] md:pl-[60px] md:flex gap-x-[120px] text-white bg-black">
        <article className="md:w-[314px]">
          <h3 className="font-[700] font-space text-[30px] md:text-[46px] leading-[35px] md:leading-[60px] ">
            A message from the 
            <span className="font-[400] font-kaushan leading-[65.53px]">
              CEO.{" "}
            </span>
          </h3>
          <p className="font-dmsans font-[400] text-[20.12px] leading-[26px] mt-[21px]">
            When it comes to sharing the true impact of learning our learners
            tell it best.
          </p>
          <p className="font-dmsans font-[400] text-[20.12px] leading-[26px] my-[21px]">
            In our featured video, discover how A Leap Ahead IT team keeps its
            knowledge and skills relevant with training and certification.
          </p>
          <button className="text-white bg-[#E40084] py-[14px] px-[34px] font-[7pp] font-source text-[25px] rounded-[20px] hover:animate-pulse ease-out duration-300 mb-[20px] md:mb-0">
            More stories
          </button>
        </article>
        <div className="relative">
          <img src="/images/video.png" alt="video" className="relative" />
          <img
            src="/images/icons/video.png"
            alt="video icon"
            className="absolute top-[25%] md:top-[212.02px] left-[25%] md:left-[50%]"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default index;
