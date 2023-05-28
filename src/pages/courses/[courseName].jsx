import Meta from 'components/common/Meta';
import Nav from 'components/common/Nav';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import CourseOverview from 'components/uiux/CourseOverview';
import Curriculum from 'components/uiux/Curriculum';
import AlumniTestimony from 'components/uiux/AlumniTestimony';
import ToolsCard from 'components/uiux/ToolsCard';
import Instructor from 'components/common/Instructor';
import Footer from 'components/common/Footer';
import WhyDevcent from 'components/uiux/WhyDevcent';
import Pricing from 'components/uiux/Pricing';
import FAQ from 'components/common/FAQ';
import axios from 'axios';
import { useRouter } from 'next/router';
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

const Uiux = () => {
	const [course, setCourse] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const router = useRouter();
	const { courseName } = router.query;
	const handleRoute = () => {
		router.push({
			pathname: '/payment',
			query: { courseName: course.urlName },
		});
	};
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`/api/courses/${courseName}/course`
				);
				setCourse(response.data.course);
				setIsLoading(false);
			} catch (error) {
				console.error('Error fetching data:', error);
				setIsLoading(false);
			}
		};

		fetchData();
	}, []);
	// const encodedObject = encodeURIComponent(JSON.stringify(course));

	if (isLoading) {
		return (
			<div className='h-screen w-screen flex flex-col items-center justify-center bg-black text-white'>
				Loading...
			</div>
		);
	}

	return (
		<div>
			<Meta />
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
						{course.name}
					</h1>
					{/* <h3 className="font-space font-[400] text-[60px] leading-[77px] mt-[18px] mb-[50px] text-[#C0BAA9]">
            Duration · 12 weeks
          </h3> */}
					{/* <p className="font-space font-[400] text-[32px] leading-[41px] mt-[18px] mb-[50px] text-[#C0BAA9]">
            5/5 · 100% completion rate
          </p> */}
					<p className='font-dmsans font-[400] text-[18px] md:text-[24px] leading-[31px] text-[#f2f2f2] mb-[20px] md:mb-[60px] text-justify'>
						Become a seasoned UiUx designer as you learn from expert
						designers. Our project based approach will help you gain
						the skill sets needed to create high impact user
						experiences on digital products.
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
						{/* <Link
							href={`/payment?courseName=${course.urlName}`}
							className='text-white  bg-primaryPurple py-[10px] md:py-[16px] px-[20px] md:px-[32px] font-space font-bold text-[18px] md:text-[24px] hover:animate-pulse ease-out duration-300 rounded-[5px]'
						>
							Enroll Now
						</Link> */}
						<button
							// href={`/payment?courseName=${course.urlName}`}
							onClick={handleRoute}
							className='text-white  bg-primaryPurple py-[10px] md:py-[16px] px-[20px] md:px-[32px] font-space font-bold text-[18px] md:text-[24px] hover:animate-pulse ease-out duration-300 rounded-[5px]'
						>
							Enroll Now
						</button>
						<Link
							href=''
							className='text-primaryPurple border border-primaryPurple py-[10px] md:py-[16px] px-[20px] md:px-[32px] font-space font-bold text-[18px] md:text-[24px] hover:animate-pulse ease-out duration-300 rounded-[5px] my-[20px] md:mt-0'
						>
							Contact us
						</Link>
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
			<section className='h-[106px] md:flex items-center pl-[120px] bg-[#0f0309] hidden '>
				<ul className='flex justify-between basis-[90%]'>
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
							UI/UX Curriculum
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
							UI/UX Porfolio
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
			<CourseOverview />
			<section
				id='tools'
				className='pt-[10px] px-[20px] md:px-[180px] pb-[35px] bg-black text-center
      '
			>
				<h3 className='font-space font-[700] text-[32px] leading-[35.2px] text-center text-primaryYellow'>
					MASTER DESIGN AND COLLABORATIVE TOOLS
				</h3>
				<p className='mx-auto text-center mt-[20px] mb-[25px] md:mb-[130px] font-dmsasns font-[400] text-[20px] leading-[26px] text-[#9b9b9b]'>
					Learn and master design and collaborative tools to empower
					you on your UiUx design career journey
				</p>
				<div className='md:grid grid-cols-3 gap-x-[100px] mb-[20px]'>
					<ToolsCard
						title='Figma'
						img='figma'
						details='Figma is a design and prototyping tool used for user interface (UI) and user experience (UX) design. It allows designers to create, collaborate, and share designs with team members in real-time.'
					/>
					<ToolsCard
						title='Google Forms'
						img='form'
						details='Google Forms is a free online survey and questionnaire creation tool that allows designers to quickly and easily create custom forms to collect qualitative and quantitative data from users.'
					/>
					<ToolsCard
						title='Notion'
						img='notion'
						details='Notion is an all-in-one workspace and productivity tool that allows you to manage and organize your  tasks. it  has features such as note-taking , project management software, and databases.'
					/>
					<ToolsCard
						title='Google Meet'
						img='figma'
						details='Google Meet is a video conferencing and collaboration tool. It allows you to conduct virtual meetings, interviews, and presentations with individuals or groups no matter where you are.'
					/>
					<ToolsCard
						title='Miro'
						img='mirro'
						details='Miro  is a collaborative online whiteboard platform designed to help teams collaborate and communicate in real-time. It allows teams to brainstorm, design, plan projects, and more.'
					/>
				</div>
			</section>
			<WhyDevcent />
			<section className='px-[20px] md:px-[57px]  bg-black  '>
				<h3 className='font-space font-[700] text-[32px] leading-[35.2px] text-center text-primaryYellow'>
					LEARN WITH THE BEST
				</h3>
				<p className='md:w-[1015px] mx-[20px] md:mx-auto text-center mt-[40px] font-dmsasns font-[400] text-[20px] leading-[26px] text-[#9b9b9b] mb-[20px]'>
					Our instructors are seasoned with plenty of knowledge as
					well as good cheer. With over 20+ years of combined
					experience, you’re sure to be equipped with core design
					skills needed to excel.
				</p>
				<div className="md:bg-[url('/images/devcentbg.png')] min-h-[100vh] bg-no-repeat overflow-hidden">
					<div className='md:flex gap-x-[50px] mb-[60px] '>
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
			<AlumniTestimony
				title='WHAT OUR ALUMNI ARE SAYING'
				description='Seeing our students making impact at top tech companies and getting paid for their service gives us great joy.'
				showVideo
			/>
			<Pricing amount={course.discountFee} />
			{/* <Curriculum /> */}
			<FAQ />
			<section
				id='portfolio'
				className='pt-[59px] px-[20px] md:pl-[64px] pb-[30px] md:pb-[150px] bg-[#0a0909] text-center
      '
			>
				<h3 className='font-space font-[700] text-[32px] leading-[35.2px] text-center text-primaryYellow'>
					JOIN US TODAY, LETS MAKE IMPACT TOGETHER
				</h3>
				<p className='md:w-[1015px] mx-auto text-center mt-[20px] md:mt-[40px] mb-[30px] md:mb-[62px] font-dmsasns font-[400] text-[20px] leading-[26px] text-[#9b9b9b]'>
					Start your tech journey, transition in to design, build
					world class products and live the life of your dreams. All
					of this is possible, join us today!
				</p>
				<div className='flex flex-row items-center justify-center gap-x-[60px]'>
					<Link
						href=''
						className='text-white  bg-primaryPurple py-[10px] md:py-[16px] px-[20px] md:px-[32px] font-space font-bold text-[18px] md:text-[24px] hover:animate-pulse ease-out duration-300 rounded-[5px]'
					>
						Enroll Now
					</Link>
				</div>

				{/* <div className="md:w-[1150px]">
          <Card title="UX/UI Portfolio" btnText="launch during program">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
              voluptatum.
            </p>
          </Card>
          <Card title="UX/UI Career" btnText="Career support">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
              voluptatum.
            </p>
          </Card>
        </div> */}
			</section>
			<Footer />
		</div>
	);
};

export default Uiux;
