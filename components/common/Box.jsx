const Box = ({ title, description, img }) => {
  return (
    <div className="sm:w-[350px] md:h-[350px] overflow-hidden py-[30px] bg-white rounded-[35px] shadow shadow-[rgba(0, 0, 0, 0.14)] flex flex-col justify-center px-[20px] xl:px-[30px] mb-[20px] md:mb-[0]">
      <img src={img} alt={title} className="w-[57px] h-[57px] md:mb-[20px]" />
      <p className="font-space font-[300] text-[29px] leading-[36px] text-[#202020]">
        {title}
      </p>
      <p className="mt-[15px] font-dmsans text-[16px] leading-[24px] text-[#202020]">
        {description}{" "}
      </p>
      {/* <div className="flex items-center gap-x-[20px]">
              <Link href='' className="font-sora font-[600] text-[16px] leading-[20px] text-primaryPurple mr-[20px] mt-[14px]">Join us now</Link>
              <FiArrowRight />
            </div> */}
    </div>
  );
};

export default Box;
