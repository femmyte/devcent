import React from "react";
import { motion } from "framer-motion";
import Meta from "components/common/Meta";
import Nav from "components/common/Nav";
import AlumniTestimony from "components/courses/common/AlumniTestimony";
import Instructor from "components/common/Instructor";
import Link from "next/link";
import Footer from "components/common/Footer";
import Image from "next/image";
import HeroSection from "components/common/HeroSection";

const ProcessCard = ({ title, number, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, visibility: "hidden" }}
      whileInView={{ opacity: [0, 1], y: [100, 0], visibility: "visible" }}
      transition={{ duration: 1, type: "easeInOut" }}
      viewport={{ once: true }}
      className="w-full md:w-[390px] mb-[30px] md:mb-0"
    >
      <div className="flex items-center gap-[20px] md:gap-x-[60px]">
        <p className="font-[700] font-space text-[32px] leading-[35px] text-primaryPurple">
          {number}
        </p>
        <p className="font-[700] font-space text-[20px] md:text-[24px] leading-[35px] text-white">
          {title}
        </p>
      </div>
      <p className="font-[400] font-dmsans text-[16px] leading-[26px] text-[#9b9b9b] mt-[24px] shadow-sm">
        {description}
      </p>
    </motion.div>
  );
};
const ToolsCard = ({ title, details }) => {
  return (
    <motion.div
      initial={{ opacity: 0, visibility: "hidden" }}
      whileInView={{ opacity: [0, 1], y: [100, 0], visibility: "visible" }}
      transition={{ duration: 1, type: "easeInOut" }}
      viewport={{ once: true }}
      className="flex flex-col gap-x-[15px] md:gap-x-[24px] items-start mb-[30px]"
    >
      <img src={`/images/icons/rectangle.png`} alt="" />
      {/* <div> */}
      <h3 className="font-space font-[500] text-[20px] md:text-[32px] leading-[40px] text-white mb-[8px] mt-[15px] md:mt-[32px]">
        {title}
      </h3>
      <p className="text-[18px] md:text-[24px] font-dmsans font-[400] leading-[30px] md:leading-[40px] text-[#9b9b9b] text-justify">
        {details}
      </p>
      {/* </div> */}
    </motion.div>
  );
};
const About = () => {
  return (
    <div>
      <Meta title="Devcent | About Us" />
      <Nav />
      {/* <div className="relative bg-[url('/images/aboutbg.jpg')] h-[100vh] md:h-[80vh] bg-cover bg-top overflow-hidden"></div> */}
      <div className="relative h-[27vh] sm:h-[60vh] md:h-[80vh] overflow-hidden">
        <Image
          src={"/images/aboutbg.jpg"}
          alt="about us"
          fill
          priority
          className="object-cover"
        />
        <div
          className="absolute top-[1px] left-0 right-0 bottom-0 h-[27vh] sm:h-[60vh] md:h-[80vh] z-[1]"
          style={{
            // background: 'rgba(0, 0, 0, 0.5)',
            background:
              "linear-gradient(84.59deg, rgba(0, 0, 0, 0.3) 17.84%, rgba(0, 0, 0, 0.3) 52.14%, rgba(0, 0, 0, 0.3) 80.9%)",
          }}
        />
        <div className="hidden sm:flex justify-center items-center relative h-full w-full">
          <motion.div
            whileInView={{ opacity: [0, 1], y: [30, 0] }}
            transition={{ delay: 1, duration: 1 }}
            whileHover={{ opacity: 0 }}
            className="w-[90%] sm:w-[80%] md:w-[50%] bg-[rgba(228,0,132,0.38)] px-[1.1rem] py-[1.6rem] md:py-[2.2rem]"
          >
            <h1 className="font-bold text-[1.5rem] md:text-[2.1rem] mb-[5px] text-white">
              ABOUT US
            </h1>
            <p className="font-dmsans md:text-[18px] leading-[22px] sm:leading-[26px] text-white">
              We are deeply committed to promoting an inclusive and supportive
              learning community that embraces diversity, encourages creativity,
              fosters collaboration, and nurtures critical thinking.
            </p>
          </motion.div>
        </div>
      </div>
      <section className="px-[20px] md:px-[57px] py-[20px] md:py-[62px] bg-black w-full ">
        <motion.p
          whileInView={{ opacity: [0, 1] }}
          transition={{ delay: 0.5, duration: 1, type: "tween" }}
          viewport={{ once: true }}
          className="block sm:hidden text-center my-[50px] font-dmsasns font-[400] text-[20px] leading-[26px] text-[#9b9b9b]"
        >
          We are deeply committed to promoting an inclusive and supportive
          learning community that embraces diversity, encourages creativity,
          fosters collaboration, and nurtures critical thinking.
        </motion.p>
        <motion.h3
          whileInView={{ opacity: [0, 1], y: [15, 0] }}
          transition={{ duration: 1, type: "tween" }}
          viewport={{ once: true }}
          className="font-space font-[700] text-[32px] mt-[15px] leading-[35.2px] text-center text-primaryYellow"
        >
          What Drives Us
        </motion.h3>
        <motion.p
          whileInView={{ opacity: [0, 1] }}
          transition={{ delay: 0.5, duration: 1, type: "tween" }}
          viewport={{ once: true }}
          className="md:w-[1015px] mx-[20px] md:mx-auto text-center md:mt-[40px] my-[20px] md:mb-[80px] font-dmsasns font-[400] text-[20px] leading-[26px] text-[#9b9b9b]"
        >
          Here’s what fuels our passion
        </motion.p>
        <div className="flex flex-col-reverse md:flex-row gap-x-[80px] ">
          <ToolsCard
            title="Our Mission"
            details="At DevCent, our mission is to provide affordable, accessible, and industry-relevant e-learning courses in UI/UX, web development, and data science. Our goal is to equip learners with practical skills and knowledge that enable them to succeed in their careers, pursue their passions, and make a positive impact on society."
          />
          <Image
            width={588}
            height={441}
            src="/images/mission.jpg"
            alt="mission image"
            className="mb-[15px] md:mb-0"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-x-[80px] mt-[30px] md:mt-[80px]">
          <Image
            width={588}
            height={441}
            src="/images/vision.jpg"
            alt="vision image"
            className="mb-[15px] md:mb-0"
          />
          <ToolsCard
            title="Our Vision"
            details="Our vision is to empower individuals with the skills and knowledge needed to thrive in the ever-evolving tech industry. We aspire to be a leading e-learning platform that delivers high-quality education and training in UI/UX, web development, and data science, and inspires a generation of innovative problem solvers."
          />
        </div>
      </section>
      <AlumniTestimony
        title="Our Students Love Us"
        description="Hear what our past students are saying"
      />
      <section className="px-[20px] md:px-[57px] py-[20px] bg-black w-full ">
        <h3 className="font-space font-[700] text-[32px] leading-[35.2px] text-center text-primaryYellow">
          Our 6-D Process
        </h3>
        <p className="md:w-[600px] mx-[20px] md:mx-auto text-center my-[20px] md:mt-[20px] md:mb-[40px]  font-dmsasns font-[400] text-[20px] leading-[26px] text-[#9b9b9b]">
          Our 6-D Process sets the foundation for your success as a tech
          professional. Here is how we create world class techies at Devcent.
        </p>
        <div className="md:flex justify-between">
          <ProcessCard
            number="01"
            title="Choose your Course"
            description="Select from our wide range of courses designed to meet your specific tech goals. We have the perfect course to kickstart your tech journey."
          />
          <ProcessCard
            number="02"
            title="Learn By Doing"
            description="Our curriculum is designed to give you real-world skills and knowledge from day one. Through interactive projects and coding exercises, you'll gain the confidence and expertise required to tackle real-world challenges."
          />
          <ProcessCard
            number="03"
            title="Get Instant Feedback"
            description="At Devcent, feedback is an essential part of the learning process. Our instructors provide timely and constructive feedback, helping you understand your strengths and areas for improvement. This personalized guidance ensures that you're constantly growing and evolving."
          />
        </div>
        <div className="md:flex justify-between mt-[30px] md:mt-[60px]">
          <ProcessCard
            number="04"
            title="Practice What You Learn"
            description="Put your newly acquired skills into practice. Through our immersive practice sessions, you'll have the opportunity to reinforce your learning and build a robust portfolio of projects that showcase your abilities."
          />
          <ProcessCard
            number="04"
            title="Land Your Dream Job"
            description="At Devcent, our ultimate goal is to help you land your dream job in the tech industry. We provide career support, interview preparation, and networking opportunities to enhance your job prospects."
          />
          <ProcessCard
            number="04"
            title="Come Join Us"
            description="Ready to embark on an exciting journey? Join the vibrant community of learners at Devcent and experience the power of transformative tech education."
          />
        </div>
        <div className="text-center mt-[50px] md:mt-[60px]">
          <Link
            href="/courses/uiux"
            className="md:ml-[48px] text-white bg-[#E40084] px-[40px] text-center py-[10px]  font-source text-[18px] rounded-lg  hover:bg-primaryYellow hover:animate-pulse ease-out duration-300"
          >
            Get Started
          </Link>
        </div>
      </section>
      <section className="px-[20px] md:px-[57px] pt-[60px] bg-black  ">
        {/* <h3 className="font-space font-[700] text-[32px] leading-[35.2px] text-center text-primaryYellow">
          Meet Our Team
        </h3>
        <p className="md:w-[1015px] mx-[20px] md:mx-auto text-center mt-[40px] mb-[80px] font-dmsasns font-[400] text-[20px] leading-[26px] text-[#9b9b9b]">
          Meet the Extraordinary Individuals Behind Our Success at Devcent
        </p> */}
        <div className="md:bg-[url('/images/devcentbg.png')] min-h-[100vh] bg-no-repeat overflow-hidden">
          <Instructor />
        </div>
      </section>
      <section className="px-[20px] md:px-[57px] py-[62px] w-full md:flex items-center border-t border-[#747474] justify-between md:h-[394px] bg-black ">
        <motion.div
          initial={{ opacity: 0, visibility: "hidden" }}
          whileInView={{ opacity: [0, 1], y: [100, 0], visibility: "visible" }}
          transition={{ duration: 1, type: "easeInOut" }}
          viewport={{ once: true }}
          className="text-white text-center md:text-left"
        >
          <h3 className="font-[700] text-primaryPurple text-[25px] md:text-[48px] leading-[40px] md:leading-[120px] ">
            Want to learn with Us?
          </h3>
          <p className="font-[600] text-[#9b9b9b] text-[20px] leading-[27px]">
            Drop your mail ID we will get back to you shortly
          </p>
        </motion.div>
        <div className="flex gap-x-[15px] justify-between items-center mb-[24px] mt-[30px] md:mt-0">
          {/* <div className='flex flex-col flex-1 mb-[24px] md:mb-0'> */}
          <input
            type="email"
            className="p-4 text-[#747474] font-[600] text-[16px] leading-5 bg-white rounded-lg w-full md:w-[470px] border-none "
            placeholder="John@doe.com"
            id="email"
            name="email"
            // onChange={handleChange}
            // value={state.firstName}
            required
          />
          {/* </div> */}
          {/* <div className='text-center '> */}
          <button
            href="/courses/uiux"
            className="md:ml-[48px] text-white bg-[#E40084] px-[40px] text-center py-[10px]  font-source text-[18px] rounded-lg  hover:bg-primaryYellow hover:animate-pulse ease-out duration-300"
          >
            Send
          </button>
          {/* </div> */}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
