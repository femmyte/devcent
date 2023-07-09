import { motion } from "framer-motion";

const ToolsCard = ({ title, details }) => {
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
      className="flex flex-col gap-x-[15px] md:gap-x-[24px] items-start mb-[30px]"
    >
      <img src={`/images/icons/rectangle.png`} alt="" />
      {/* <div> */}
      <h3 className="font-space font-[500] text-[20px] md:text-[32px] leading-[40px] text-white mb-[8px] mt-[15px] md:mt-[32px]">
        {title}
      </h3>
      <p className="text-[18px] md:text-[24px] font-sans font-[400] leading-[30px] md:leading-[40px] text-[#9b9b9b]">
        {details}
      </p>
      {/* </div> */}
    </motion.div>
  );
};
