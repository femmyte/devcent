import { useRouter } from "next/router";
import { motion } from "framer-motion";

const CongratsOnBalance = () => {
  const router = useRouter();

  const goToDashboard = () => {
    router.replace("/user/overview");
  };

  return (
    <>
      <motion.div
        whileInView={{
          opacity: [0, 1],
          scale: [0.1, 1],
          y: [20, 0],
          borderRadius: ["50%", "none"],
        }}
        transition={{ duration: 1, type: "easeInOut" }}
        viewport={{ once: true }}
        className="bg-black h-screen overflow-y-auto fixed top-0 left-0 w-full z-[100]"
      >
        <div className="pt-[35px] px-[20px] md:px-[60px] text-white flex flex-col items-center justify-center">
          <img src="/images/icons/markgreen.png" alt="mark" />
          <p className="my-[30px] md:mt-[83px] font-space font-[700] text-[30px] md:text-[48px] leading-[35px] md:leading-[52px] text-center md:w-[909px] mb-[20px] md:mb-[30px] ">
            Congratulations! You’ve balanced up.
          </p>
        </div>
        <div className="pt-[35px] px-[20px] md:px-[60px] text-white pb-[20px] md:pb-[40px]">
          <p className="font-dmsans font-[500] text-[18px] leading-[40px]  text-justify ">
            Congratulations on successfully balancing up for your course! 🎉 You
            have demonstrated responsibility and commitment by fulfilling your
            financial obligations, we appreciate your diligence.
          </p>
          <ul className="font-dmsans font-[500] text-[18px] leading-[40px] text-left ml-[20px]">
            <li className="list-disc text-left ">
              Go through our frequently asked questions.
            </li>
            <li className="list-disc ">Browse through our curricullum.</li>
            <li className="list-disc ">
              Follow your instructors on their socials.
            </li>
            <li className="list-disc ">
              Invite your friends to join you on this journey as learning
              together is fun.
            </li>
          </ul>
          <p className="font-dmsans font-[500] text-[18px] leading-[40px]  text-justify mt-[20px] ">
            You can continue learning
          </p>
        </div>
        <div className="w-full flex justify-center pb-[50px]">
          <button
            onClick={goToDashboard}
            className="text-primaryPurple hover:border-yellow-500 rounded-sm border-2 border-white py-1 px-2"
          >
            Continue
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default CongratsOnBalance;
