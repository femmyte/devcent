import Nav from 'components/common/Nav';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import CourseOverview from './common/CourseOverview';
import Curriculum from './common/Curriculum';
import AlumniTestimony from './common/AlumniTestimony';
import Instructor from 'components/common/Instructor';
import Footer from 'components/common/Footer';
import WhyDevcent from './common/WhyDevcent';
import Pricing from './common/Pricing';
import FAQ from 'components/common/FAQ';
import Tools from './common/Tools';
import Portfolio from './common/Portfolio';
import WhatYouWillLearn from './common/WhatYouWillLearn';

const Card = ({ title, btnText, icon, children }) => {
	const [show, setShow] = useState(false);

	return (
		<div className=' min-h-[77px] rounded-[8px] bg-[#c8c8c8] mt-[10px]'>
			<div className='px-[20px] p-[16px] flex justify-between items-center h-full'>
				<div className='flex gap-x-[27px] items-center'>
					{/* <FcPlus color="#E40084" /> */}
					<img src='/images/icons/plus.png' alt='' />
					<h3
						className={`${
							show
								? 'text-[24px] font-[700] leading-[30.62px]'
								: 'font-[400] text-[20px] leading-[25.52px] '
						}font-space text-primaryPurple`}
					>
						{title}
					</h3>
					{icon && <img src='/images/icons/move.png' alt={icon} />}
				</div>
				<button
					className='px-[20px] py-[10px] text-[20px] font-[700] font-space leading-[25.52px] text-[#3f3d3d] border border-[#3f3d3d]'
					onClick={() => setShow(!show)}
				>
					{btnText}
				</button>
			</div>
			{show && (
				<div className=' bg-[#F3F2F2] text-left rounded-b-[8px]'>
					<div className='py-[16px] pl-[16px] pr-[30px]'>
						{children}
					</div>
				</div>
			)}
		</div>
	);
};
const CollaborateCard = () => {
	return (
		<>
			<div className='grid grid-rows-4 grid-flow-col gap-4'>
				<div className='bg-red-400'>0</div>
				<div class='row-span-2 bg-red-400'>01</div>
			</div>
		</>
	);
};

const Backend = ({ course, handleRoute, courseName }) => {
	return (
		<div>
			<Nav />
			<section className='md:flex justify-between p-[20px] md:p-[60px] bg-black overflow-hidden'>
				<div className='block md:hidden'>
					<img
						src='/images/courses/uxui.png'
						alt='uxui course'
						// className="w-[600px] h-full"
					/>
				</div>
				<div className='md:max-w-[600px]'>
					<p className='mt-[34px] text-[#c0baa9] font-[400] font-space text-[24px] leading-[31px]'>
						Beginner Friendly
					</p>
					<h1 className='font-space font-[700] text-[30px] md:text-[80px] leading-[35px] md:leading-[102px] text-primaryYellow mt-[24px]'>
						{course?.name}
					</h1>

					<p className='font-dmsans font-[400] text-[18px] md:text-[24px] leading-[31px] text-[#f2f2f2] mb-[20px] md:mb-[60px] text-justify'>
						{course?.description}
					</p>
					<div className='md:flex items-center mb-[20px] md:mb-[80px] gap-x-[8px]'>
						<div className='flex items-center gap-x-[8px]'>
							<p className='font-dmsans font-[700] text-[20px] leading-[26px] text-[#f2f2f2]'>
								5
							</p>
							<img src='/images/icons/start.png' alt='start' />{' '}
							<img src='/images/icons/start.png' alt='start' />{' '}
							<img src='/images/icons/start.png' alt='start' />{' '}
							<img src='/images/icons/start.png' alt='start' />{' '}
							<img src='/images/icons/start.png' alt='start' />
							<img
								src='/images/icons/circle.png'
								alt='start'
								className='hidden md:block'
							/>
						</div>
						<p className='font-dmsans font-[500] text-[20px] leading-[26px] text-[#f2f2f2]'>
							{' '}
							100% completion rate + 70+ People Trained
						</p>
					</div>
					<div className='flex flex-col md:flex-row items-center gap-x-[60px]'>
						<button
							// href={`/payment?courseName=${course.urlName}`}
							onClick={handleRoute}
							className='text-white  bg-primaryPurple py-[10px] md:py-[16px] px-[20px] md:px-[32px] font-space font-bold text-[18px] md:text-[24px] hover:animate-pulse ease-out duration-300 rounded-[5px]'
						>
							Enroll Now
						</button>
					</div>
				</div>
				<div className='hidden md:block'>
					<img
						src='/images/courses/uxui.png'
						alt='uxui course'
						// className="w-[600px] h-full"
					/>
				</div>
			</section>
			<section className='h-[106px] md:flex items-center justify-between px-[30px] bg-[#0f0309] hidden '>
				<ul className='flex justify-between w-full'>
					<li>
						<Link
							href='#overview'
							className='font-space font-[700] text-[20px] leading-[26px]  text-primaryPurple'
						>
							OVERVIEW
						</Link>
					</li>
					<li>
						<Link
							href='#curriculum'
							className='font-space font-[700] text-[20px] leading-[26px]  text-white'
						>
							{course?.name?.toUpperCase()} Curriculum
						</Link>
					</li>
					<li>
						<Link
							href='#schedule'
							className='font-space font-[700] text-[20px] leading-[26px]  text-white'
						>
							Our Schedule
						</Link>
					</li>
					<li>
						<Link
							href='#portfolio'
							className='font-space font-[700] text-[20px] leading-[26px]  text-white'
						>
							{course?.name?.toUpperCase()} Porfolio
						</Link>
					</li>
					<li>
						<Link
							href='#instructor'
							className='font-space font-[700] text-[20px] leading-[26px]  text-white'
						>
							Instructor
						</Link>
					</li>
					<li>
						<Link
							href='#tools'
							className='font-space font-[700] text-[20px] leading-[26px]  text-white'
						>
							Tools
						</Link>
					</li>
					<li>
						<Link
							href='#pricing'
							className='font-space font-[700] text-[20px] leading-[26px]  text-white'
						>
							Pricing
						</Link>
					</li>
					<li>
						<Link
							href='#cohort'
							className='font-space font-[700] text-[20px] leading-[26px]  text-white'
						>
							Next Cohort
						</Link>
					</li>
					<li>
						<Link
							href='#faq'
							className='font-space font-[700] text-[20px] leading-[26px]  text-white'
						>
							FAQ
						</Link>
					</li>
				</ul>
			</section>
			<CourseOverview overview='overview text' />
			{/* <WhatYouWillLearn
				description="This course equips you with the skill set needed to design user centered product while meeting business needs. You'd learn how
				to achieve these through user research, ideation, bringing your
				ideas to life through prototypes and testing them with users."
			/> */}
			{/* <Tools /> */}
			<WhyDevcent />
			<Instructor />
			<AlumniTestimony
				title='WHAT OUR ALUMNI ARE SAYING'
				description='Seeing our students making impact at top tech companies and getting paid for their service gives us great joy.'
				showVideo
			/>
			<Pricing amount={course?.discountFee} />
			<Curriculum>
				<h3 className='font-space font-[700] text-[32px] leading-[35.2px] text-center text-primaryYellow'>
					{course?.name} CURRICULUM
				</h3>
				<p className='mt-[43px] font-space font-[700] text-[26px] leading-[11.7px] text-[#cccccc]'>
					Learn-by-doing with live classes
				</p>
				{/* <p className='w-[1015px] mx-auto text-center mt-[40px] mb-[80px] font-dmsasns font-[400] text-[20px] leading-[26px] text-[#9b9b9b]'>
					Our course is setup to make you learn UX/UI step by step
					with a practical curriculum that focuses 100% on
					learn-by-doing. Unlike a lotta UX/UI courses who teach the
					same powerpoint heavy curriculum for years, our course
					teaches you the latest tools, workflows, and best practices
					. To save time and nail it from the beginning, we encourage
					you to complete some reading and practical prep work ahead
					of the Bootcamp.
				</p>

				<p className='mb-[40px] font-space font-[700] text-[26px] leading-[11.7px] text-[#cccccc]'>
					Construct UX/UI case studies using actual design briefs.
				</p>
				<p className='w-[1015px] mx-auto text-center font-dmsasns font-[400] text-[20px] leading-[26px] text-[#9b9b9b]'>
					{' '}
					You'll be working on briefs provided by actual businesses
					that we partner with in addition to studying the fundamental
					abilities needed to be a junior UX/UI Designer. This is a
					fantastic chance to work on a current product and produce
					pertinent case studies using actual products!
				</p> */}
			</Curriculum>
			<FAQ />
			<Portfolio courseName={courseName} />
			<Footer />
		</div>
	);
};

export default Backend;
