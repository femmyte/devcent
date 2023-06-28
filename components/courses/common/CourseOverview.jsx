import React from 'react';
import WhatYouWillLearn from './WhatYouWillLearn';

const LearnArea = ({ number, title, info }) => {
	return (
		<>
			<div className='md:flex justify-between items-center'>
				<div className='flex'>
					<h2 className='font-[700] font-space text-[25px] md:text-[40px] leading-[35px] mr-[15px] md:mr-[30px] text-primaryYellow'>
						{number}
					</h2>
					<p className='font-[700] font-space text-[20px] md:text-[30px] leading-[25px] text-white text-left'>
						{title}
					</p>
				</div>
				<p className='md:w-[580px] font-dmsans font-[400] text-[18px] leading-[35px] text-white text-left'>
					{info}
				</p>
			</div>
			<div className='w-full h-[1px] bg-[#9b9b9b] mt-[20px] md:mt-[30px] mb-[20px] md:mb-[30px]'></div>
		</>
	);
};
const CourseOverview = ({ overview }) => {
	return (
		<div
			id='overview'
			className=' px-[20px] md:pl-[50px] pb-[35px] md:py-[35px] bg-black text-center
      '
		>
			<h3 className='font-space font-[700] text-[32px] leading-[35.2px] text-center text-primaryYellow'>
				COURSE OVERVIEW
			</h3>
			{/* <p className="mt-[43px] mb-[80px] font-space font-[700] text-[26px] leading-[11.7px] text-[#cccccc]">
        Change your life, become a UX/UI Designer
      </p> */}
			<p className='md:w-[1015px] mx-auto text-center mt-[24px] mb-[20px] font-dmsasns font-[400] text-[20px] leading-[26px] text-[#9b9b9b]'>
				{overview}
			</p>
			<div className='md:grid md:grid-cols-4 gap-4 px-[10px] md:px-[120px] mt-[20px] md:mt-[50px]'>
				<div className='flex flex-col gap-x-[15px] md:gap-x-[24px] items-center'>
					<img src='/images/icons/duration.png' alt='' />
					{/* <div> */}
					<h3 className='font-space font-[500] text-[24px] leading-[31px] text-white mb-[8px] mt-[15px] md:mt-[26px]'>
						Duration
					</h3>
					<p className='text-[18px] font-space font-[400] leading-[23px] text-[#9b9b9b]'>
						12 weeks of intense learning and practice
					</p>
					{/* </div> */}
				</div>
				<div className='flex flex-col gap-x-[15px] md:gap-x-[24px] items-center my-[15px] md:my-0'>
					<img src='/images/icons/training.png' alt='' />
					{/* <div> */}
					<h3 className='font-space font-[500] text-[24px] leading-[31px] text-white mb-[8px] mt-[15px] md:mt-[26px]'>
						Training Method
					</h3>
					<p className='text-[18px] font-space font-[400] leading-[23px] text-[#9b9b9b]'>
						{' '}
						Hands on sessions to gain real experience
					</p>
					{/* </div> */}
				</div>
				<div className='flex flex-col gap-x-[15px] md:gap-x-[24px] items-center'>
					<img src='/images/icons/flexible.png' alt='' />
					{/* <div> */}
					<h3 className='font-space font-[500] text-[24px] leading-[31px] text-white mb-[8px] mt-[15px] md:mt-[26px]'>
						Flexible Learning
					</h3>
					<p className='text-[18px] font-space font-[400] leading-[23px] text-[#9b9b9b]'>
						Self paced journey on your lessons
					</p>
					{/* </div> */}
				</div>
				<div className='flex flex-col gap-x-[15px] md:gap-x-[24px] items-center mt-[20px] md:mt-0'>
					<img src='/images/icons/course.png' alt='' />
					{/* <div> */}
					<h3 className='font-space font-[500] text-[24px] leading-[31px] text-white mb-[8px] mt-[15px] md:mt-[26px]'>
						Course Resources
					</h3>
					<p className='text-[18px] font-space font-[400] leading-[23px] text-[#9b9b9b]'>
						Get access to over 500 design resources
					</p>
					{/* </div> */}
				</div>
			</div>
			{/* <p className="w-[1015px] mx-auto text-center mb-[120px] font-dmsasns font-[400] text-[20px] leading-[26px] text-[#9b9b9b]">
        {" "}
        During this course, you'll understand the design thinking process,
        master the latest design tools, build case studies and importantly,
        design and launch your portfolio!
      </p> */}
		</div>
	);
};

export default CourseOverview;
