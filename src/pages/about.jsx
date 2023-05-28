import React from 'react';
import Meta from 'components/common/Meta';
import Nav from 'components/common/Nav';
import AlumniTestimony from 'components/uiux/AlumniTestimony';
import Instructor from 'components/common/Instructor';
import Link from 'next/link';
import Footer from 'components/common/Footer';

const ProcessCard = ({ title, number, description }) => {
	return (
		<div className='w-full md:w-[390px] mb-[30px] md:mb-0'>
			<div className='flex items-center gap-[20px] md:gap-x-[60px]'>
				<p className='font-[700] font-space text-[32px] leading-[35px] text-primaryPurple'>
					{number}
				</p>
				<p className='font-[700] font-space text-[20px] md:text-[24px] leading-[35px] text-white'>
					{title}
				</p>
			</div>
			<p className='font-[400] font-dmsans text-[16px] leading-[20px] text-white mt-[24px] shadow-sm'>
				{description}
			</p>
		</div>
	);
};
const ToolsCard = ({ title, details }) => {
	return (
		<div className='flex flex-col gap-x-[15px] md:gap-x-[24px] items-start mb-[30px]'>
			<img src={`/images/icons/rectangle.png`} alt='' />
			{/* <div> */}
			<h3 className='font-space font-[500] text-[20px] md:text-[32px] leading-[40px] text-white mb-[8px] mt-[15px] md:mt-[32px]'>
				{title}
			</h3>
			<p className='text-[18px] md:text-[24px] font-dmsans font-[400] leading-[30px] md:leading-[40px] text-[#9b9b9b] text-justify'>
				{details}
			</p>
			{/* </div> */}
		</div>
	);
};
const About = () => {
	return (
		<div>
			<Meta title='Devcent | About Us' />
			<Nav />
			<div className="relative bg-[url('/images/aboutbg.png')] h-[100vh] md:h-[80vh] bg-cover bg-center overflow-hidden">
				<div
					className='absolute top-[1px] left-0 right-0 bottom-0 h-[100vh] md:h-[80vh] z-[1]'
					style={{
						background: 'rgba(0, 0, 0, 0.5)',
						// "linear-gradient(84.59deg, rgba(0, 0, 0, 0.58) 17.84%, rgba(0, 0, 0, 0.17) 52.14%, rgba(0, 0, 0, 0.65) 80.9%)",
					}}
				/>
				<div className='flex flex-col justify-center items-center relative z-[100] h-full px-[20px] md:px-[160px]'>
					<h1 className='font-space font-[700] text-[30px] md:text-[48px] leading-[30px] md:leading-[52px] text-white text-center mt-[15px] md:mt-0'>
						Welcome to Devcent Trainings
					</h1>
					<p className='font-dmsans font-[500] text-[18px] md:text-[24px] leading-[20px] md:leading-[40px] text-justify text-white mt-[30px] md:mt-[56px]'>
						Our mission at DevCent is to provide affordable,
						accessible, and industry-relevant e-learning courses in
						UI/UX, web development, and data science. We are
						committed to creating an inclusive and supportive
						learning community that fosters creativity,
						collaboration, and critical thinking. Our goal is to
						equip learners with practical skills and knowledge that
						enable them to succeed in their careers, pursue their
						passions, and make a positive impact on society.
					</p>
				</div>
			</div>
			<section className='px-[20px] md:px-[57px] py-[20px] md:py-[62px] bg-black w-full '>
				<h3 className='font-space font-[700] text-[32px] leading-[35.2px] text-center text-primaryYellow'>
					What Drives Us
				</h3>
				<p className='md:w-[1015px] mx-[20px] md:mx-auto text-center md:mt-[40px] my-[20px] md:mb-[80px] font-dmsasns font-[400] text-[20px] leading-[26px] text-[#9b9b9b]'>
					Here’s what fuels our passion
				</p>
				<div className='flex flex-col-reverse md:flex-row gap-x-[80px] '>
					<ToolsCard
						title='Our Mission'
						details='Our mission at DevCent is to provide affordable, accessible, and industry-relevant e-learning courses in UI/UX, web development, and data science. We are committed to creating an inclusive and supportive learning community that fosters creativity, collaboration, and critical thinking. Our goal is to equip learners with practical skills and knowledge that enable them to succeed in their careers, pursue their passions, and make a positive impact on society.'
					/>
					<img
						src='/images/mission.png'
						alt='mission image'
						className='mb-[15px] md:mb-0'
					/>
				</div>
				<div className='flex flex-col md:flex-row gap-x-[80px] mt-[30px] md:mt-[80px]'>
					<img
						src='/images/vision.png'
						alt='vision image'
						className='mb-[15px] md:mb-0'
					/>
					<ToolsCard
						title='Our Vision'
						details='At DevCent, our vision is to empower individuals with the skills and knowledge needed to thrive in the ever-evolving tech industry. We aspire to be a leading e-learning platform that delivers high-quality education and training in UI/UX, web development, and data science, and inspires a generation of innovative problem solvers.'
					/>
				</div>
			</section>
			<AlumniTestimony
				title='Our Students Love Us'
				description='Hear what our past students are saying'
			/>
			<section className='px-[20px] md:px-[57px] py-[20px] bg-black w-full '>
				<h3 className='font-space font-[700] text-[32px] leading-[35.2px] text-center text-primaryYellow'>
					Our 6-D Process
				</h3>
				<p className='md:w-[1015px] mx-[20px] md:mx-auto text-center my-[20px] md:mt-[20px] md:mb-[40px]  font-dmsasns font-[400] text-[20px] leading-[26px] text-[#9b9b9b]'>
					Explore how we create world class techies at Devcent
				</p>
				<div className='md:flex justify-between'>
					<ProcessCard
						number='01'
						title='Choose your Course'
						description='Unsure of where to start? We’ve got something for everyone from
				design, to web development. We’ll point you in the right
				direction.'
					/>
					<ProcessCard
						number='02'
						title='Learn By Doing'
						description='Unsure of where to start?  We’ve got something for everyone from design, to web development. We’ll point you in the right direction.'
					/>
					<ProcessCard
						number='03'
						title='Get Instant Feedback'
						description='Unsure of where to start?  We’ve got something for everyone from design, to web development. We’ll point you in the right direction.'
					/>
				</div>
				<div className='md:flex justify-between mt-[30px] md:mt-[60px]'>
					<ProcessCard
						number='04'
						title='Practice What You Learn'
						description='Unsure of where to start?  We’ve got something for everyone from design, to web development. We’ll point you in the right direction.'
					/>
					<ProcessCard
						number='04'
						title='Land Your Dream Job'
						description='Unsure of where to start?  We’ve got something for everyone from design, to web development. We’ll point you in the right direction.'
					/>
					<ProcessCard
						number='04'
						title='Come Join Us'
						description='Unsure of where to start?  We’ve got something for everyone from design, to web development. We’ll point you in the right direction.'
					/>
				</div>
				<div className='text-center mt-[30px] md:mt-[60px]'>
					<Link
						href='/courses/uiux'
						className='md:ml-[48px] text-white bg-[#E40084] px-[40px] text-center py-[10px]  font-source text-[18px] rounded-lg  hover:bg-primaryYellow hover:animate-pulse ease-out duration-300'
					>
						Get Started
					</Link>
				</div>
			</section>
			<section className='px-[20px] md:px-[57px] pt-[30px] bg-black  '>
				<h3 className='font-space font-[700] text-[32px] leading-[35.2px] text-center text-primaryYellow'>
					Meet Our Team
				</h3>
				<p className='md:w-[1015px] mx-[20px] md:mx-auto text-center mt-[40px] mb-[80px] font-dmsasns font-[400] text-[20px] leading-[26px] text-[#9b9b9b]'>
					These are the People that do the transforming to world class
				</p>
				<div className="md:bg-[url('/images/devcentbg.png')] min-h-[100vh] bg-no-repeat overflow-hidden">
					<div className='md:flex gap-x-[50px] mb-[60px]'>
						<Instructor
							img='mary'
							name='Mariam Omotola'
							role='UI Designer, DevCent'
							description="Mariam has enjoyed working in UX design across a variety of domains at Google, from YouTube, to technical cloud platforms. She is particularly interested in bringing a human touch to products. She received her Master's in Human Computer Interaction from The University of Michigan."
						/>
						<Instructor
							img='tosin'
							name='Fakile Tosin'
							role='UI Designer, Tinacle'
							description="Tosin has enjoyed working in UX design across a variety of domains at Google, from YouTube, to technical cloud platforms. He is particularly interested in bringing a human touch to products. She received her Master's in Human Computer Interaction from The University of Michigan."
						/>
						<Instructor
							img='alalade'
							name='Olanrewaju Alalade'
							role='UI Designer, DevCent'
							description="Olanrewaju has enjoyed working in UX design across a variety of domains at Google, from YouTube, to technical cloud platforms. He is particularly interested in bringing a human touch to products. She received her Master's in Human Computer Interaction from The University of Michigan."
						/>
					</div>
				</div>
			</section>
			<section className='px-[20px] md:px-[57px] py-[62px] w-full md:flex items-center border-t border-[#747474] justify-between md:h-[394px] bg-black '>
				<div className='text-white text-center md:text-left'>
					<h3 className='font-[700] text-[25px] md:text-[48px] leading-[40px] md:leading-[120px] '>
						Want to learn with Us?
					</h3>
					<p className='font-[600] text-[20px] leading-[27px]'>
						Drop your mail ID we will get back to you shortly
					</p>
				</div>
				<div className='flex gap-x-[15px] justify-between items-center mb-[24px] mt-[30px] md:mt-0'>
					{/* <div className='flex flex-col flex-1 mb-[24px] md:mb-0'> */}
					<input
						type='email'
						className='p-4 text-[#747474] font-[600] text-[16px] leading-5 bg-white rounded-lg w-full md:w-[470px] border-none '
						placeholder='John@doe.com'
						id='email'
						name='email'
						// onChange={handleChange}
						// value={state.firstName}
						required
					/>
					{/* </div> */}
					{/* <div className='text-center '> */}
					<button
						href='/courses/uiux'
						className='md:ml-[48px] text-white bg-[#E40084] px-[40px] text-center py-[10px]  font-source text-[18px] rounded-lg  hover:bg-primaryYellow hover:animate-pulse ease-out duration-300'
					>
						Send
					</button>
					{/* </div> */}
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default About;
