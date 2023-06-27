import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      //   setTimeout(() => {
      //     setIsFinished(true);
      //   }, 60000);
    }
  }, [inView]);

  if (isFinished) {
    return null; // If the animation is finished, don't render anything
  }

  return (
    <div
      ref={ref}
      className="hidden sm:flex justify-center items-center relative h-full w-full"
    >
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
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
      )}
    </div>
  );
};

export default HeroSection;
