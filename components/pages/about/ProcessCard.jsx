import { motion } from "framer-motion";

const ProcessCard = ({ title, number, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, visibility: "hidden" }}
      whileInView={{
        opacity: [0, 1],
        y: [100, 0],
        visibility: "visible",
      }}
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
