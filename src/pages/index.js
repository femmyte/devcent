import Animation from 'components/common/Animation';
import Box from 'components/common/Box';
import Footer from 'components/common/Footer';
import Meta from 'components/common/Meta';
import Nav from 'components/common/Nav';
import TestimonyCarousel from 'components/common/TestimonyCarousel';
import Link from 'next/link';
import React, { useEffect } from 'react';
import Typewriter from 'typewriter-effect';

const Index = () => {
	return (
		<div>
			<Meta title='Devcent | Home' />
			{/* <Animation style="flip-left" placement="center-center"> */}
			{/* <div className="relative bg-[url('/images/homebg.png')] h-[140vh] bg-cover bg-center overflow-hidden"> */}
			{/* <div
          className="absolute top-[1px] left-0 right-0 bottom-0 min-h-[100vh] z-[1] bg-black"
          // style={{
          //   background: "rgba(0, 0, 0, 0.92)",
          //   // "linear-gradient(84.59deg, rgba(0, 0, 0, 0.58) 17.84%, rgba(0, 0, 0, 0.17) 52.14%, rgba(0, 0, 0, 0.65) 80.9%)",
          // }}
        /> */}
			<Nav />
			<div className='bg-black flex flex-col-reverse lg:flex-row justify-between items-center text-white z-10 px-[25px] md:pl-[90px] relative'>
				<div className='w-full md:w-[580px] mt-[30px] md:mt-[160px] text-center md:text-left  '>
					<h1 className='text-[#FFBA0E] text-[35px] md:text-[48px] font-[700] leading-[40px] md:leading-[58px] font-space h-[15rem]'>
						<Typewriter
							options={{
								strings: [
									'Developing Worldclass Tech Talent at Devcent',
									'Welcome to Devecnt, where learning meets limitless possibilities in the world of tech',
									'Discover the limitless possibilities of the digital world of tech at Devcent',
									"Don't just dream about a rewarding career in tech make it a reality with Devcent.",
								],
								autoStart: true,
								loop: true,
							}}
						/>
					</h1>
					<p className='text-[20px] md:text-[24px] leading-6 md:leading-10 my-[20px]'>
						Master your craft and unleash your potential with our
						Online/Physical training from the best industry experts.
					</p>
					<div className='flex flex-col items-center md:items-start'>
						<Link
							href='/signup'
							className='block py-[18px] text-center mt-[20px] text-white bg-[#E40084] w-[160px] font-source text-[18px] rounded-lg  hover:bg-primaryYellow hover:animate-pulse ease-out duration-300 '
						>
							Get Started
						</Link>
					</div>
				</div>
				<div className='w-4/5 md:w-[570px] my-[30px] md:mt-0'>
					<img
						src='/images/hero.png'
						// className='App-logo'
						alt='hero'
					/>
				</div>
			</div>
			<section className='bg-black pt-[30px] md:pt-[30px] pb-[50px] md:pb-[190px] px-[25px] relative'>
				<Animation
					style='fade-right'
					placement='center-center'
					className='md:w-[550px] flex flex-col justify-center items-center md:items-start mb-[50px] xl:mb-0'
				>
					<div className='lg:w-[85%] lg:mx-auto'>
						<h1 className='font-space font-[700] text-white text-[30px] md:text-[40px] leading-[35px] md:leading-[51px] text-center mx-[20px] md:mx-[70px] mt-[50px] '>
							Develop In-Demand Tech Skills. Learn At Your Own
							Pace. Build a happier tech life. Experience the
							magic at Devcent
						</h1>
					</div>
				</Animation>
				<p className='md:w-[70%] mt-[90px] text-[25px] text-center font-dmsans leading-[33px] mx-auto text-[#ffba0e] mb-[80px] md:mb-[100px]'>
					Embark on an exciting learning journey with our online UX/UI
					& coding bootcamps, designed to provide hands-on practice in
					a global community of passionate learners.
				</p>

				<div className='flex flex-col gap-x-[30px] items-center md:flex-row md:pl-[45px] xl:pr-[15px]'>
					<Animation
						style='zoom-in-right'
						placement='center-center'
						className='md:w-[550px] flex flex-col justify-center items-center md:items-start mb-[50px] xl:mb-0'
					>
						<p className='font-bold font-space text-[30px] md:text-[40px] leading-[35px] md:leading-[61px] text-white text-center md:text-left'>
							Develop tech skills. <br /> save times. <br /> Build
							happier tech life
						</p>
						<Link
							href='/courses'
							className='block mt-[20px] md:mt-[40px] mx-auto md:mx-0 text-white bg-[#E40084] py-[20px] px-[56px] font-source text-[18px] rounded-lg  hover:bg-primaryYellow hover:animate-pulse ease-out duration-300 w-max mb-[100px] md:mb-0'
						>
							View all
						</Link>
					</Animation>
					<div className=''>
						<div className='flex flex-col items-center md:flex-row gap-[20px]'>
							<Animation
								style='zoom-in-left'
								placement='center-center'
							>
								<Box
									img='/images/icons/uiux.png'
									title='UI/UX Design'
									description='Explore the world of user-centric designs with our UI/UX Design course. Unleash your creativity, master industry-leading tools, and craft stunning digital experiences that leave an impact.'
								/>
							</Animation>
							<Animation
								style='zoom-in-left'
								placement='center-center'
							>
								<Box
									img='/images/icons/fulstack.png'
									title='Full Stack Web'
									description='Learn the ins and outs of front-end and back-end technologies, build dynamic websites, and become a versatile developer. All this and more when you enroll in our Full Stack Web course.'
								/>
							</Animation>
						</div>
						<div className='flex flex-col items-center md:flex-row gap-[20px] mt-[20px] md:mt-[50px]'>
							<Animation
								style='zoom-in-left'
								placement='center-center'
							>
								<Box
									img='/images/icons/dataScience.png'
									title='Data Science'
									description='Harness the power of data. Our Data Science course is equipped to teach you how to unravel complex datasets, gain insights, and make data-driven decisions. Arm yourself with the necessary skills to tackle problems and drive innovation in any industry.'
								/>
							</Animation>
							<Animation
								style='zoom-in-left'
								placement='center-center'
							>
								<Box
									img='/images/icons/backend.png'
									title='Backend Development'
									description='Delve behind the scenes with our Back End Development course. Master server-side programming, database management, and learn how to build the backbone of powerful web applications, with seamless functionality and exceptional performance.'
								/>
							</Animation>
						</div>
					</div>
				</div>

				<div className='mt-[30px] md:mt-[200px]'>
					<h1 className='font-space font-[700] text-[#ffba0e] text-[20px] md:text-[40px] leading-[35px] md:leading-[51px] text-center  '>
						THE BEST TIME TO START IS NOW
					</h1>
					{/* <div className="flex gap-x-[36px] mt-[50px]"> */}
					<div className='md:grid md:grid-cols-3 md:gap-x-[80px] px-[10px] md:px-[100px] mt-[20px] md:mt-[50px]'>
						<Animation
							style='fade-right'
							placement='center-center'
							className='md:w-[550px] flex flex-col justify-center items-center md:items-start mb-[50px] xl:mb-0'
						>
							<div className='flex gap-x-[15px] md:gap-x-[24px] items-center'>
								<img src='/images/icons/learning.png' alt='' />
								<div>
									<h3 className='font-space font-[500] text-[24px] leading-[31px] text-white'>
										Effective Learning
									</h3>
									<p className='text-[18px] font-space font-[400] leading-[23px] text-[#9b9b9b]'>
										Get skilled through lectures and
										practical sessions.
									</p>
								</div>
							</div>
						</Animation>
						<Animation
							style='fade-left'
							placement='center-center'
							className='md:w-[550px] flex flex-col justify-center items-center md:items-start mb-[50px] xl:mb-0'
						>
							<div className='my-[20px] md:my-0 flex gap-x-[24px] items-center'>
								<img src='/images/icons/capstone.png' alt='' />
								<div>
									<h3 className='font-space font-[500] text-[24px] leading-[31px] text-white'>
										Capstone Projects
									</h3>
									<p className='text-[18px] font-space font-[400] leading-[23px] text-[#9b9b9b]'>
										Work on multiple projects to gain
										hands-on exposure and real world work
										experience.
									</p>
								</div>
							</div>
						</Animation>
						<Animation
							style='fade-right'
							placement='center-center'
							className='md:w-[550px] flex flex-col justify-center items-center md:items-start mb-[50px] xl:mb-0'
						>
							<div className='flex gap-x-[24px] items-center'>
								<img src='/images/icons/learning.png' alt='' />
								<div>
									<h3 className='font-space font-[500] text-[24px] leading-[31px] text-white'>
										Intensive Training
									</h3>
									<p className='text-[18px] font-space font-[400] leading-[23px] text-[#9b9b9b]'>
										Our training pushes your limits,
										sharpens your skills, and propels you
										towards mastery in your field.
									</p>
								</div>
							</div>
						</Animation>
					</div>
				</div>

				<img
					src='/images/gradinenthome.png'
					alt='gra'
					className='absolute bottom-[-240px] left-[50%] md:left-[35%]'
				/>
			</section>
			<section className='xl:pt-[120px] pb-[100px] xl:pb-[200px] bg-[#F9F9F9] xl:px-[80px] relative'>
				<div className='xl:w-[95%] mx-auto relative'>
					<Animation
						style='zoom-in-left'
						placement='center-center'
						className='md:w-[550px] flex flex-col justify-center items-center md:items-start mb-[50px] xl:mb-0'
					>
						<div
							className="relative z-20 py-[52px]  text-white bg-[url('/images/counterbg.png')] bg-cover bg-center max-h-[100vh] xl:h-[751px] w-full xl:max-w-[751px] rounded-[10px] "
							style={{
								boxShadow: '0px 3px 45px rgba(0, 0, 0, 0.14)',
							}}
						>
							<div
								className='absolute top-0 left-0 right-0 bottom-0 max-h-[100vh] xl:h-[751px] w-full xl:w-[751px] z-[1] rounded-[10px]'
								style={{
									background:
										'linear-gradient(261.98deg, rgba(228, 0, 132, 0.74) 0%, rgba(255, 186, 14, 0.55) 100%)',
								}}
							/>
							<div className='relative z-10 flex flex-col h-full justify-center'>
								<div className='xl:ml-[200px] text-center xl:text-left'>
									<p className='font-roboto font-[300] text-[80px] xl:text-[130px] leading-[90px] xl:leading-[168px]'>
										7
									</p>
									<p className='font-source font-regular text-[22px] leading-[55px] text-center  xl:text-left ml-[30px]'>
										COURSES
									</p>
								</div>
								<div className='xl:flex xl:ml-[70px] mb-[20px] xl:mb-0'>
									<div className='flex flex-col items-center xl:items-start'>
										<p className='font-roboto font-light text-[45px] leading-[56px]'>
											+100
										</p>
										<p className='font-source font-regular text-[22px] leading-[30px]'>
											LIVE PROJECTS
										</p>
									</div>
									<div className='flex flex-col items-center xl:items-start xl:ml-[70px]'>
										<p className='font-roboto font-light text-[45px] leading-[56px] ml-[10px]'>
											100%
										</p>
										<p className='font-source font-regular text-[22px] leading-[30px]'>
											HAPPY TRAINEES
										</p>
									</div>
								</div>
								{/* <div className="flex gap-x-[160px] mt-[15px] ml-[70px]">
              <p className="font-source font-regular text-[22px] leading-[30px]">
                LIVE PROJECTS
              </p>
            </div> */}
							</div>
						</div>
					</Animation>
					<Animation
						style='fzoom-in-right'
						placement='center-center'
						className='md:w-[550px] flex flex-col justify-center items-center md:items-start mb-[50px] xl:mb-0'
					>
						<div
							className='xl:mt-[12px] xl:min-h-min  xl:max-w-[687px] xl:absolute xl:top-[30px] xl:left-[480px] rounded-[10px] bg-white border border-[rgba(0, 0, 0, 0.14)] z-[20] px-[20px] text-center xl:text-left xl:px-[50px] pt-[40px] xl:mb-[40px]'
							style={{
								boxShadow: '0px 3px 45px rgba(0, 0, 0, 0.14)',
							}}
						>
							<p className='font-space font-[400] text-[30px] xl:text-[37px] leading-[35px] xl:leading-[44.72px] text-black'>
								Take the next step towards <br /> your personal
								and <br /> professional goals with <br />
								Devcent.
							</p>
							<div className='flex justify-center xl:justify-start mt-[20px] xl:mt-[32px]'>
								<div
									className=' h-[5px] w-[9px] mr-[6px] rounded-[20px]'
									style={{
										background:
											'linear-gradient(#FFBA0E 0%, #E40084 100%',
									}}
								></div>
								<div
									className='h-[5px] w-[48px] rounded-[20px]'
									style={{
										background:
											'linear-gradient(#FFBA0E 0%, #E40084 100%',
									}}
								></div>
							</div>
							<p className='mt-[34px] xl:mr-[60px] text-black'>
								At Devcent, we are more than a learning
								platform. We are your partner in growth and
								success. With our wide range of advanced
								courses, expert instructors, and hands-on
								learning experiences, you'll be equipped with
								the required skills and knowledge to master your
								craft.
							</p>
							<p className='mt-[8px] ml-[10px] text-black font-[700]'>
								Everything you need in one place
							</p>
							<ul>
								<li className='mt-[13px] ml-[10px] text-black list-disc'>
									A Global Community
								</li>
								<li className='mt-[13px] ml-[10px] text-black list-disc'>
									A 24/7 Support System
								</li>
								<li className='mt-[13px] ml-[10px] text-black list-disc'>
									Perfect for beginners
								</li>
							</ul>
							{/* <p className='mt-[13px] ml-[10px] text-black'>
							A Global Community
						</p>
						<p className='mt-[13px] ml-[10px] text-black'>
							A 24/7 Support System
						</p>
						<p className='mt-[13px] ml-[10px] text-black'>
							Perfect for beginners
						</p> */}
							<div className='mx-auto xl:w-1/2 mb-[20px] xl:mb-0'>
								<Link
									href='/signup'
									className='block mt-[20px] xl:my-[40px] mx-auto text-[#E40084] border border-[#E40084] py-[10px] xl:py-[20px] px-[20px] xl:px-[56px] font-dmsans font-bold text-[18px] rounded-lg hover:animate-pulse ease-out duration-300 text-center'
								>
									Join now
								</Link>
							</div>
						</div>
					</Animation>
				</div>
			</section>
			<section className='pt-[40px] pb-[40px] md:pb-[200px] px-[20px] md:px-[80px] bg-black text-white'>
				<h3 className='font-space font-[700] text-[32px] leading-[35.2px] text-center text-primaryYellow'>
					WHAT YOU STAND TO GAIN
				</h3>
				<p className='md:w-[1015px] mx-auto text-center mt-[40px] mb-[20px] md:mb-[80px] font-dmsans font-[400] text-[20px] leading-[26px] text-[#9b9b9b]'>
					At Devcent, we are committed to your success and strive to
					provide you with the tools, resources, and necessary
					guidance. Learn everything required to take your career to
					the next level.
				</p>
				{/* <div className="md:flex"> */}
				{/* <div className="md:w-[900px] "> */}
				<div className='rounded-[8px] py-[55px] px-[0px] md:px-[40px]'>
					<div className='md:flex justify-between text-white gap-x-[30px] lg:gap-x-[50px] mb-[20px] md:mb-0'>
						<Animation
							style='fade-right'
							placement='center-center'
							className='md:w-[550px] flex flex-col justify-center items-center md:items-start mb-[50px] xl:mb-0'
						>
							<div className='flex gap-x-[15px] md:gap-x-[30px] items-start'>
								<img
									src='/images/icons/markbg.png'
									alt='mark'
									className=''
								/>
								<div className='md:max-w-[400px]'>
									<h3 className='font-sora font-[700] text-white text-[24px] leading-[25px] mb-[12px]'>
										Global Community
									</h3>
									<p className='font-dmsans font-regular text-[18.5px] leading-[24px] pb-[20px] md:pb-0'>
										Connect with a diverse community of
										learners and industry experts. Expand
										your network, fostering collaborations
										that can lead to exciting opportunities
										and lifelong connections.
									</p>
								</div>
							</div>
						</Animation>
						<Animation
							style='fade-left'
							placement='center-center'
							className='md:w-[550px] flex flex-col justify-center items-center md:items-start mb-[50px] xl:mb-0'
						>
							<div className='flex gap-x-[15px] md:gap-x-[30px] items-start'>
								<img
									src='/images/icons/markbg.png'
									alt='mark'
									className=''
								/>
								<div className='md:max-w-[400px]'>
									<h3 className='font-sora font-[700] text-white text-[24px] leading-[25px] mb-[12px]'>
										Support and Mentorship
									</h3>
									<p className='font-dmsans font-regular text-[18.5px] leading-[24px]'>
										Receive 24/7 support and mentorship
										throughout your learning journey. You
										are ensured that you stay motivated,
										overcome obstacles, and reach your full
										potential.
									</p>
								</div>
							</div>
						</Animation>
					</div>

					<div className='md:flex justify-between text-white gap-x-[30px] lg:gap-x-[50px] md:mt-[50px]'>
						<Animation
							style='fade-right'
							placement='center-center'
							className='md:w-[550px] flex flex-col justify-center items-center md:items-start mb-[50px] xl:mb-0'
						>
							<div className='flex gap-x-[15px] md:gap-x-[30px] items-start'>
								<img
									src='/images/icons/markbg.png'
									alt=''
									className=''
								/>
								<div className='md:max-w-[400px]'>
									<h3 className='font-sora font-[700] text-white text-[24px] leading-[25px] mb-[12px]'>
										Industry Insights
									</h3>
									<p className='font-dmsans font-regular text-[18.5px] leading-[24px] pb-[20px] md:pb-0'>
										Benefit from the experience of seasoned
										instructors and industry professionals.
										Gain a deeper understanding of the field
										from their shared insights, best
										practices, and real-world examples.
									</p>{' '}
								</div>
							</div>
						</Animation>
						<Animation
							style='fade-left'
							placement='center-center'
							className='md:w-[550px] flex flex-col justify-center items-center md:items-start mb-[50px] xl:mb-0'
						>
							<div className='flex gap-x-[15px] md:gap-x-[30px] items-start'>
								<img
									src='/images/icons/markbg.png'
									alt='j'
									className=''
								/>
								<div className='md:max-w-[400px]'>
									<h3 className='font-sora font-[700] text-white text-[24px] leading-[25px] mb-[12px]'>
										In-demand Skills
									</h3>
									<p className='font-dmsans font-regular text-[18.5px] leading-[24px]'>
										Acquire the latest and most sought-after
										skills in the tech industry. Equip
										yourself with the skills that companies
										are actively seeking. Engage in
										practical, real-world projects that
										mirror the challenges encountered in the
										industry.
									</p>
								</div>
							</div>
						</Animation>
					</div>
				</div>
				<Animation
					style='zoom-in-down'
					placement='center-center'
					className='md:w-[550px] flex flex-col justify-center items-center md:items-start mb-[50px] xl:mb-0'
				>
					<div className='mt-[13px] md:ml-[28px] flex flex-col md:flex-row items-center gap-x-[80px] gap-y-[40px] justify-center flex-wrap'>
						<div className='mt-[40px] max-w-[299px]'>
							<div className='flex items-center'>
								<img
									src='/images/icons/beginner.png'
									alt='beginner icon'
								/>
								<h1 className='font-[700] font-space text-[30px] leading-[38px] text-white ml-[16px]'>
									Beginner Level
								</h1>
							</div>
							<p className='mt-[13px] font-dmsans font-[700] text-[15px] leading-[20px] text-[#9b9b9b] '>
								With our beginner-friendly approach, you'll
								build a solid foundation and gain the confidence
								needed to navigate the exciting world of tech.
							</p>
						</div>
						<div className='mt-[40px] max-w-[299px]'>
							<div className='flex items-center'>
								<img
									src='/images/icons/online.png'
									alt='beginner icon'
								/>
								<h1 className='font-[700] font-space text-[30px] leading-[38px] text-white ml-[16px]'>
									Online and Physical
								</h1>
							</div>
							<p className='mt-[13px] font-dmsans font-[700] text-[15px] leading-[20px] text-[#9b9b9b] '>
								Tailor your educational experience to fit your
								schedule and preference.
							</p>
						</div>
						<div className='mt-[40px] max-w-[299px]'>
							<div className='flex items-center'>
								<img
									src='/images/icons/lectures.png'
									alt='beginner icon'
								/>
								<h1 className='font-[700] font-space text-[30px] leading-[38px] text-white ml-[16px]'>
									Lectures are Flexible
								</h1>
							</div>
							<p className='mt-[13px] font-dmsans font-[700] text-[15px] leading-[20px] text-[#9b9b9b] '>
								At Devcent, we offer the flexibility to take
								your lectures at your convenient time.
							</p>
						</div>
						{/* </div>
				<div className='mt-[13px] md:ml-[28px] md:grid grid-cols-3 gap-4 place-items-center'> */}
						<div className='mt-[40px] max-w-[299px]'>
							<div className='flex items-center'>
								<img
									src='/images/icons/certificate.png'
									alt='beginner icon'
								/>
								<h1 className='font-[700] font-space text-[30px] leading-[38px] text-white ml-[16px]'>
									Certificates
								</h1>
							</div>
							<p className='mt-[13px] font-dmsans font-[700] text-[15px] leading-[20px] text-[#9b9b9b] '>
								Earn a certificate upon successful completion of
								our courses.
							</p>
						</div>
						<div className='mt-[40px] max-w-[299px]'>
							<div className='flex items-center'>
								<img
									src='/images/icons/language.png'
									alt='beginner icon'
								/>
								<h1 className='font-[700] font-space text-[30px] leading-[38px] text-white ml-[16px]'>
									Language
								</h1>
							</div>
							<p className='mt-[13px] font-dmsans font-[700] text-[15px] leading-[20px] text-[#9b9b9b] '>
								Our courses are conducted in the English
								Language.
							</p>
						</div>
					</div>
				</Animation>
				{/* </div> */}
			</section>
			<section className="relative z-20 pt-[140px] py-[52px]  text-white bg-[url('/images/testimonybg.jpg')] bg-cover bg-fixed bg-center h-[100vh] break overflow-hidden w-screen">
				<div
					className='absolute top-0 left-0 right-0 bottom-0 h-[100vh] z-[1]'
					style={{
						background:
							'linear-gradient(261.98deg, rgba(0, 7, 2, 0.9) 8.27%, rgba(6, 7, 0, 0.8) 91.06%)',
					}}
				/>
				<div className='relative z-10 flex flex-col h-full items-center justify-center w-full'>
					<img src='/images/icons/quote.png' alt='quote acon' />
					<div className='w-full md:w-[80%] h-[80%] mx-auto'>
						<TestimonyCarousel />
					</div>
				</div>
			</section>
			<Animation
				style='flip-left'
				placement='center-center'
				className='md:w-[550px] flex flex-col justify-center items-center md:items-start mb-[50px] xl:mb-0'
			>
				<section className='pt-[20px] md:pt-[60px] pb-[39px] px-[15px] md:pl-[60px] md:flex gap-x-[120px] text-white bg-black'>
					<article className='md:w-[314px]'>
						<h3 className='font-[700] font-space text-[30px] md:text-[46px] leading-[35px] md:leading-[60px] '>
							A message from the
							<span className='font-[400] font-kaushan leading-[65.53px]'>
								CEO.{' '}
							</span>
						</h3>
						<p className='font-dmsans font-[400] text-[20.12px] leading-[26px] mt-[21px]'>
							When it comes to sharing the true impact of learning
							our learners tell it best.
						</p>
						<p className='font-dmsans font-[400] text-[20.12px] leading-[26px] my-[21px]'>
							In our featured video, discover how A Leap Ahead IT
							team keeps its knowledge and skills relevant with
							training and certification.
						</p>
					</article>
					<div className='relative'>
						<img
							src='/images/video.png'
							alt='video'
							className='relative'
						/>
						<img
							src='/images/icons/video.png'
							alt='video icon'
							className='absolute top-[25%] md:top-[212.02px] left-[25%] md:left-[50%]'
						/>
					</div>
				</section>
			</Animation>
			<Footer />
		</div>
	);
};

export default Index;
