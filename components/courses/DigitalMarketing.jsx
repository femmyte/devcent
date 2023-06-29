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
import FAQCard from 'components/common/FAQCard';
import LearnArea from './common/LearnArea';
import ToolsCard from './common/ToolsCard';

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

const DigitalMarketing = ({ course, handleRoute, courseName }) => {
	return (
		<div>
			<Nav />
			<section className='md:flex justify-between items-center gap-x-[30px] p-[20px] md:p-[60px] bg-black overflow-hidden'>
				<div className='block md:hidden'>
					<img
						src='/images/courses/digital.jpg'
						alt='uxui course'
						// className="w-[600px] h-full"
					/>
				</div>
				<div className='md:max-w-[600px]'>
					<p className='mt-[34px] text-[#c0baa9] font-[400] font-space text-[24px] leading-[31px]'>
						Beginner Friendly
					</p>
					<h1 className='font-space font-[700] text-[30px] md:text-[80px] leading-[35px] md:leading-[82px] text-primaryYellow mt-[24px]'>
						{course?.name}
					</h1>

					<p className='font-dmsans font-[400] text-[18px] md:text-[24px] leading-[31px] text-[#f2f2f2] mb-[20px] md:mb-[60px]'>
						{/* {course?.description} */}
						Understand the process of generating and developing
						unique and innovative ideas, concepts, and solutions.
						Learn and employ effective strategies, techniques, and
						tools to attract, engage, and convert customers.
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
						src='/images/courses/digital.jpg'
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
			<CourseOverview overview='Our Creative Design and Digital Marketing Course is an immersive 12 week learning experience. Learn how to blend aesthetics, functionality, and user experience to create visually appealing and meaningful outcomes. Master the skill of blending design with marketing principles to create impactful campaigns.' />
			<section className='px-[20px] md:pl-[50px] pb-[35px] py-[35px] bg-black text-center'>
				<h3 className='font-space font-[700] text-[32px] leading-[35.2px] text-center text-primaryYellow mt-[30px] md:mt-[140px]'>
					What you'll learn
				</h3>
				<p className='md:w-[1015px] mx-auto text-center mt-[24px] mb-[20px] font-dmsasns font-[400] text-[20px] leading-[26px] text-[#9b9b9b]'>
					In this course, you'll explore the powerful combination of
					creativity and strategic marketing. Learn to craft visually
					compelling designs and leverage digital channels to
					captivate audiences and drive engagement.
				</p>
				<div className='py-[30px] md:py-[50px]'>
					<LearnArea
						number='01'
						title='Introduction to Logo Design'
						info='Logo Fundamentals. Types of Logo. Logo Evolution/Trends. Principles of Logo'
					/>
					<LearnArea
						number='02'
						title='Research and Ideation'
						info='Briefs from Clients. Research. Mind Mapping. Sketching'
					/>
					<LearnArea
						number='03'
						title='Vectorization'
						info='Designing with Corel Draw. Designing with Illustrator'
					/>
					<LearnArea
						number='04'
						title='Typography & Colours'
						info='Type of Fonts. Adopting the right fonts. Working with Colours'
					/>
					<LearnArea
						number='05'
						title='Presentation'
						info='Presenting your Projects. Brand Story Telling. Working with Mockups. Preparing deliverables'
					/>
					<LearnArea
						number='06'
						title='Piece Of Works/Assignment'
						info='Creating a Wordmark. Creating a lettermark. Creating an Abstract Mark. Creating Pictorial Mark'
					/>
					<LearnArea
						number='07'
						title='Bonuses'
						info='Certifications. Unlimited Graphics Resources. Avoid Clichés & Plagiarism. Monetization Of Skills'
					/>
					<LearnArea
						number='08'
						title='Introduction to Digital Marketing'
						info="Overview of digital marketing and its importance in today's business landscape. Digital marketing channels and their characteristics. Understanding the buyer's journey and digital touchpoints. Key digital marketing metrics and analytics tools"
					/>
					<LearnArea
						number='09'
						title='Website Design and Optimization'
						info=' Importance of website design and user experience. Elements of a well-designed website. Introduction to HTML and CSS. Designing using WordPress. Search engine optimization (SEO) best practices. Conversion rate optimization (CRO) techniques'
					/>
					<LearnArea
						number='10'
						title='Search Engine Marketing (SEM)'
						info='Introduction to search engine marketing and search advertising. Keyword research and selection. Creating effective ad campaigns using Google Ads. Bid management and optimization strategies. Tracking and measuring campaign performance'
					/>
					<LearnArea
						number='11'
						title='Social Media Marketing'
						info='Overview of major social media platforms (Facebook, Instagram, Twitter, LinkedIn). Developing a social media strategy. Creating engaging social media content. Advertising on social media platforms. Social media analytics and reporting'
					/>
					<LearnArea
						number='12'
						title='Content Marketing'
						info='Importance of content marketing in digital strategies. Developing a content marketing plan. Creating high-quality and engaging content (blogs, videos, infographics). Content distribution and promotion. Measuring content marketing success'
					/>
					<LearnArea
						number='13'
						title='Email Marketing'
						info='Building an email marketing strategy. Creating effective email campaigns and templates. Segmentation and targeting. A/B testing and optimization. Email marketing analytics and automation'
					/>
					<LearnArea
						number='14'
						title='Influencer Marketing'
						info='Introduction to influencer marketing and its benefits. Identifying and engaging with influencers. Negotiating partnerships and collaborations. Measuring the impact of influencer campaigns'
					/>
					<LearnArea
						number='15'
						title='Online Advertising and Display marketing'
						info='ntroduction to online advertising and display marketing. Google Display Network and programmatic advertising. Creating compelling display ads. Targeting options and ad placement strategies. Performance tracking and optimization'
					/>
					<LearnArea
						number='16'
						title='Mobile Marketing'
						info='Overview of mobile marketing trends and opportunities. Mobile advertising strategies and best practices. Creating mobile-optimized websites and apps. Location-based marketing and targeting. Mobile analytics and measurement'
					/>
					<LearnArea
						number='17'
						title='Analytics and Reporting'
						info='Introduction to web analytics tools (Google Analytics). Setting up tracking codes and goals. Analyzing website traffic and user behavior. Creating custom reports and dashboards. Data-driven decision making and optimization'
					/>
					<LearnArea
						number='18'
						title='Digital Marketing Strategy and Planning'
						info='Developing a comprehensive digital marketing strategy. Setting goals and objectives. Budgeting and resource allocation. Integration of different digital marketing channels. Monitoring and evaluating the success of digital marketing campaigns'
					/>
					{/* <LearnArea number='14' title='' info='' /> */}
				</div>
			</section>
			<section
				id='tools'
				className='pt-[10px] px-[20px] md:px-[100px] lg:px-[180px] pb-[35px] bg-black text-center
      '
			>
				<h3 className='font-space font-[700] text-[32px] leading-[35.2px] text-center text-primaryYellow uppercase'>
					Creative Design and Digital Marketing Tools
				</h3>
				<p className='mx-auto text-center mt-[20px] mb-[25px] md:mb-[130px] font-dmsasns font-[400] text-[20px] leading-[26px] text-[#9b9b9b]'>
					Learn and master Creative Design and Digital Marketing tools
					to empower you on your journey as a TCreative Designer and
					Digital Marketer
				</p>
				<div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-[100px] mb-[20px]'>
					<ToolsCard
						title='Design Software'
						img='figma'
						details='Tools like Adobe Photoshop, Illustrator, Figma and Canva enable you to create stunning visual designs, edit images, and design graphics.'
					/>
					<ToolsCard
						title='Content Management Systems (CMS)'
						img='figma'
						details='Platforms like WordPress and Drupal provide a user-friendly interface for managing and updating website content.'
					/>
					<ToolsCard
						title='Email Marketing Tools'
						img='figma'
						details='Platforms such as Mailchimp and ConvertKit offer features for designing visually appealing email templates, managing subscriber lists, and tracking email campaign performance.'
					/>
					<ToolsCard
						title='SEO Tools'
						img='figma'
						details="Tools like SEMrush, Moz, and Google Analytics provide insights into search engine optimization (SEO), helping you optimize your website's performance, track keyword rankings, analyze competitor strategies, and monitor website traffic."
					/>
					<ToolsCard
						title='Social Media Management Tools'
						img='figma'
						details='Tools like Hootsuite, Buffer, and Sprout Social allow you to schedule, manage, and analyze social media posts across multiple platforms'
					/>
					<ToolsCard
						title='Analytics and Reporting Tools'
						img='figma'
						details=' Analytics tools like Google Analytics and Adobe Analytics provide valuable data and insights on website performance, user behavior, conversion rates, and campaign tracking.'
					/>
					<ToolsCard
						title='Project Management Tools'
						img='figma'
						details='Tools like Asana and Trello  help manage tasks, deadlines, and communication among team members. '
					/>
				</div>
			</section>
			<WhyDevcent
				reason='"At Devcent, we take pride in our ability to produce world-class
				Data Scientist through our course. The course is instructed by
				industry leaders and employs a project-based learning model,
				guaranteeing students gain practical experience."'
			/>
			<Instructor />
			<AlumniTestimony
				title='WHAT OUR ALUMNI ARE SAYING'
				description='Seeing our students making impact at top tech companies and getting paid for their service gives us great joy.'
				showVideo
			/>
			<Pricing amount={course?.discountFee} price={course?.fee} />
			<Curriculum>
				{/* <h3 className='font-space font-[700] text-[32px] leading-[35.2px] text-center text-primaryYellow'>
					{course?.name} CURRICULUM
				</h3> */}
				{/* <p className='mt-[43px] font-space font-[700] text-[26px] leading-[11.7px] text-[#cccccc]'>
					Learn-by-doing with live classes
				</p>
				<p className='w-[1015px] mx-auto text-center mt-[40px] mb-[80px] font-dmsasns font-[400] text-[20px] leading-[26px] text-[#9b9b9b]'>
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
			<FAQ>
				<FAQCard
					title='Is this course suitable for beginners with no prior experience in creative design or digital marketing?'
					content='Absolutely! This course is designed to cater to beginners and provide a solid foundation in creative design and digital marketing principles.'
				/>
				<FAQCard
					title='Will I learn how to create and implement effective digital marketing campaigns?'
					content='Yes, you will gain hands-on experience in planning, executing, and measuring the success of digital marketing campaigns across various platforms and channels.'
				/>
				<FAQCard
					title='Will I learn how to use design software like Adobe Photoshop or Illustrator?'
					content='Yes, our course includes hands-on training in popular design software, such as Adobe Creative Suite, Canva, Figma, to develop your skills and proficiency.'
				/>
				<FAQCard
					title='Will there be any practical projects in the course?'
					content='Absolutely! The course includes practical design and marketing exercises, projects, and real-world examples to help you apply the concepts learned and develop your design and marketing skills.'
				/>
				<FAQCard
					title='Can I apply the knowledge from this course to my own business or personal brand?'
					content='The strategies and techniques you learn can be applied to any business or personal brand.'
				/>
				<FAQCard
					title='Can I access the course materials and lessons after the course completion?'
					content='You will have access to the course materials, including video lectures, resources, and any future updates or additions to the content.'
				/>
			</FAQ>
			<Portfolio courseName={courseName} />
			<Footer />
		</div>
	);
};

export default DigitalMarketing;
