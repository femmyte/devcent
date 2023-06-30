import React from "react";
import { motion } from "framer-motion";

const InstructorCard = ({ name, img, role, description }) => {
  return (
    <div className="md:flex gap-x-[50px] md:w-[30%]">
      <div className="pt-[30px] bg-[rgba(228, 0, 132, 0.06)] text-white">
        <motion.div
          initial={{ opacity: 0, visibility: "hidden" }}
          whileInView={{
            opacity: [0, 1],
            y: [100, 0],
            visibility: "visible",
          }}
          transition={{ duration: 1, type: "easeInOut" }}
          viewport={{ once: true }}
          className="pt-[38px] z-40"
          style={{ background: "rgba(228, 0, 132, 0.06)" }}
        >
          <img
            src={`/images/instructor/${img}`}
            className="rounded-[50%] h-[100px] w-[100px]"
            alt={name}
          />
          <p className="my-[10px] md:my-[14px] font-space font-[700] text-[20px] md:text-[25px] leading-[28px]">
            {name}
          </p>
          <p className="my-[10px] md:my-[14px] text-[#9b9b9b] font-space font-[700] text-[18px] md:text-[20px] leading-[28.33px]">
            {role}
          </p>
          <p className="font-inter text-[#9b9b9b] text-[16.09px] leading-[22.53px]">
            {description}
          </p>
        </motion.div>
      </div>
    </div>
  );
};
const Instructor = () => {
  return (
    <section className="px-[20px] pt-[20px] md:px-[57px]  bg-black  ">
      <h3 className="font-space font-[700] text-[32px] leading-[35.2px] text-center text-primaryYellow">
        Learn With The Best
      </h3>
      <motion.p
        initial={{ opacity: 0, visibility: "hidden" }}
        whileInView={{
          opacity: [0, 1],
          y: [100, 0],
          visibility: "visible",
        }}
        transition={{ duration: 1, type: "easeInOut" }}
        viewport={{ once: true }}
        className="md:w-[600px] md:mx-auto text-center mt-[20px] font-dmsasns font-[400] text-[20px] leading-[26px] text-[#9b9b9b] mb-[20px]"
      >
        Our instructors are seasoned with plenty of knowledge as well as good
        cheer. With over 20+ years of combined experience, you’re sure to be
        equipped with core design and development skills needed to excel.
      </motion.p>
      <div className="md:bg-[url('/images/devcentbg.png')] min-h-[100vh] bg-no-repeat overflow-hidden">
        <div className="md:flex gap-x-[50px] mb-[60px] ">
          <InstructorCard
            img="oluwafemi.jpg"
            name="Oluwafemi Faleye"
            role="Fullstack Developer, DevCent"
            description="Oluwafemi is a dynamic and accomplished fullstack developer with a remarkable track record of over ten years in computer programming. His extensive skill set encompasses React.js, Node.js, Arduino, and much more. As an experienced instructor, Oluwafemi has helped over 2000 students become a web developer. With his guidance, students gain not only technical expertise but also the confidence to tackle complex challenges and create innovative solutions in the ever-evolving world of IT."
          />
          <InstructorCard
            img="femmyte.jpg"
            name="Adefemi Sanyaolu"
            role="Frontend Developer, Devcent"
            description="Adefemi is a seasoned frontend developer and instructor with four years of experience. Specializing in React.js, His expertise in frontend development, combined with his passion for teaching, enables Femi to effectively convey complex concepts to students, empowering them to excel in their own frontend development journeys."
          />
          <InstructorCard
            img="human.png"
            name="Adeleke Oluwaseun"
            role="UI Designer, DevCent"
            description="Adeleke Oluwaseun is a highly skilled and experienced cloud engineer with an impressive career spanning over 20 years in the field of information technology. His expertise lies in designing, implementing, and managing cloud infrastructure solutions to support the ever-evolving needs of modern businesses."
          />
        </div>
      </div>
    </section>
  );
};

export default Instructor;
