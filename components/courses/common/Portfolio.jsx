import React from 'react';
import Link from 'next/link';
const Portfolio = ({ courseName }) => {
	return (
		<section
			id='portfolio'
			className='pt-[59px] px-[20px] md:pl-[64px] pb-[30px] md:pb-[150px] bg-[#0a0909] text-center
      '
		>
			<h3 className='font-space font-[700] text-[32px] leading-[35.2px] text-center text-primaryYellow'>
				JOIN US TODAY, LETS MAKE IMPACT TOGETHER
			</h3>
			<p className='md:w-[1015px] mx-auto text-center mt-[20px] md:mt-[40px] mb-[30px] md:mb-[62px] font-dmsasns font-[400] text-[20px] leading-[26px] text-[#9b9b9b]'>
				Start your tech journey, transition in to design, build world
				class products and live the life of your dreams. All of this is
				possible, join us today!
			</p>
			<div className='flex flex-row items-center justify-center gap-x-[60px]'>
				<Link
					href={`/courses/${courseName}/enrol`}
					className='text-white  bg-primaryPurple py-[10px] md:py-[16px] px-[20px] md:px-[32px] font-space font-bold text-[18px] md:text-[24px] hover:animate-pulse ease-out duration-300 rounded-[5px]'
				>
					Enroll Now
				</Link>
			</div>
		</section>
	);
};

export default Portfolio;
