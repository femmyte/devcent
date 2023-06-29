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

const DataScience = ({ course, handleRoute, courseName }) => {
	return (
		<div>
			<Nav />
			<section className='md:flex justify-between items-center gap-x-[30px] p-[20px] md:p-[60px] bg-black overflow-hidden'>
				<div className='block md:hidden'>
					<img
						src='/images/courses/data.avif'
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
						{/* {course?.description} */}
						Embark on an exciting journey to uncover the hidden
						stories within data. Be prepared to delve into the world
						of statistical analysis techniques, data visualization,
						and predictive modeling.
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
						src='/images/courses/data.avif'
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
					{/* <li>
						<Link
							href='#schedule'
							className='font-space font-[700] text-[20px] leading-[26px]  text-white'
						>
							Our Schedule
						</Link>
					</li> */}
					{/* <li>
						<Link
							href='#portfolio'
							className='font-space font-[700] text-[20px] leading-[26px]  text-white'
						>
							{course?.name?.toUpperCase()} Porfolio
						</Link>
					</li> */}
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
			<CourseOverview overview="Our Data Analytics Course is an immersive 12 week learning experience. You'll take a learn-by-doing approach during every class session. Learn how to gather, clean, and organize data, and then transform it into actionable insights. At the end of this course, you will have a portfolio showing your skill set." />
			<section className='px-[20px] md:pl-[50px] pb-[35px] md:py-[35px] bg-black text-center'>
				<h3 className='font-space font-[700] text-[32px] leading-[35.2px] text-center text-primaryYellow mt-[30px] md:mt-[140px]'>
					What you'll learn
				</h3>
				<p className='md:w-[1015px] mx-auto text-center mt-[24px] mb-[20px] font-dmsasns font-[400] text-[20px] leading-[26px] text-[#9b9b9b]'>
					In this course, you'll dive into the world of data
					exploration, unlocking hidden insights and unraveling the
					stories within. You will learn how to harness the power of
					data - from deciphering customer behaviors to predicting
					market trends.
				</p>
				<div className='py-[30px] md:py-[50px]'>
					<LearnArea
						number='01'
						title='Introduction to Excel'
						info='Understanding the Excel interface. Entering and editing data. Basic formatting techniques. Basic formatting techniques. Basic Functions and Formulas such as mathematical functions (SUM, AVERAGE, MIN, MAX) cell referencing. Managing Data, sorting data, filtering data. Applying conditional formatting. Charts and Graphs. Working with Multiple Worksheets and Workbooks. Introduction to advanced functions (VLOOKUP IF, COUNTIF, SUMIF)'
					/>
					<LearnArea
						number='02'
						title='Power BI I'
						info='Introduction to Power Bl and business intelligence concepts. Setting up a Power Blaccount and installing the desktop application. Connecting to and importing data from various sources (such as Excel, CSV, and databases). Basic data transformation and manipulation using Power Query'
					/>
					<LearnArea
						number='03'
						title='Power BI II'
						info='Advanced data transformation and modeling using Power Query and the Data Model. DAX (Data Analysis Expressions) for calculated columns and measures. Creating interactive reports and dashboards using visualizations, slicers, and drill-down. Customizing the appearance and behavior of visuals using formatting and conditional formatting options. Introduction to Power BI Desktop layout and design options'
					/>
					<LearnArea
						number='04'
						title='Power BI III'
						info='Advanced report layout and design techniques using Power BI Desktop Collaborating on and publishing reports to the Power Biservice. Creating simple visualizations and reports in the Power BI service. Embedding Power reports and dashboards in other applications. Integrating Power BI with other Microsoft tools (such as Excel). Advanced topics (creating custom visuals). Integrating Power BI with other Microsoft tools. Q&A and troubleshooting. Embedding Power BI reports and dashboards in other applications. Sharing and distributing Power BI content within an organization. Hands-on exercises and case studies using real-world data scenarios. Review and exam preparation'
					/>
					<LearnArea
						number='05'
						title='SQL I'
						info='Introduction to SQL and database concepts. Setting up a MySQL server and connecting to it using a client. Basic SELECT statements. Filtering and sorting results. Table creation and modification'
					/>
					<LearnArea
						number='06'
						title='SQL II:'
						info='Aggregate functions and GROUP BY. Subqueries. JOINS. Indexes and keys. Stored procedures and functions'
					/>
					<LearnArea
						number='07'
						title='SQL III'
						info='Views. Triggers. Advanced SELECT techniques (such as using UNION and CASE statements). Handling NULL values. Data modeling and database design concepts
'
					/>
					<LearnArea
						number='08'
						title='Python'
						info='Introduction to Python'
					/>
					{/* <LearnArea number='01' title='' info='' /> */}
				</div>
			</section>
			<section
				id='tools'
				className='pt-[10px] px-[20px] md:px-[100px] lg:px-[180px] pb-[35px] bg-black text-center
      '
			>
				<h3 className='font-space font-[700] text-[32px] leading-[35.2px] text-center text-primaryYellow uppercase'>
					Data Analytics Tools
				</h3>
				<p className='mx-auto text-center mt-[20px] mb-[25px] md:mb-[130px] font-dmsasns font-[400] text-[20px] leading-[26px] text-[#9b9b9b]'>
					Learn and master data analytics tools to empower you on your
					journey as a data analyst
				</p>
				<div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-[100px] mb-[20px]'>
					<ToolsCard
						title='Excel'
						img='figma'
						details='Excel is a widely used spreadsheet software that allows you to organize and manipulate data, perform calculations, create charts, and apply basic statistical functions.'
					/>
					<ToolsCard
						title='SQL'
						img='figma'
						details='SQL (Structured Query Language) is a programming language designed for managing and manipulating relational databases. It enables you to retrieve and manipulate data, perform complex queries, and aggregate information from large datasets.'
					/>
					<ToolsCard
						title='Python'
						img='figma'
						details='Python is a programming language that is extensively used in data analytics. It offers a wide range of libraries and frameworks which provide powerful tools for data manipulation, analysis, statistical modeling, and machine learning.'
					/>
					<ToolsCard
						title='Power BI'
						img='figma'
						details='Power BI is a business intelligence tool by Microsoft that enables data analysis and visualization. It allows you to connect to multiple data sources, create interactive dashboards, and share reports with stakeholders.'
					/>
					{/* <ToolsCard title='' img='figma' details='' /> */}
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
				<h3 className='font-space font-[700] text-[32px] leading-[35.2px] text-center text-primaryYellow'>
					{course?.name} CURRICULUM
				</h3>
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
					title='Do I need any prior experience in data analytics to enroll in this course?'
					content='No, this course is designed for beginners and does not require any prior experience. We will start from the basics and gradually build your skills.'
				/>
				<FAQCard
					title='Will the live virtual classes be recorded?'
					content='Yes, the classes would be recorded and would be made available for you to refer back to whenever needed.'
				/>
				<FAQCard
					title='Can I take this course at my own pace?'
					content='This course is self-paced, allowing you to learn at a speed that suits your schedule. You will also have access to the course materials and resources.'
				/>
				<FAQCard
					title='Will I receive a certificate upon completion of the course?'
					content='Yes, you will receive a certificate of completion. This certificate can be a valuable addition to your resume and showcase your skills in data analytics.'
				/>
				<FAQCard
					title='Do I have to complete my course to get certified?'
					content='Yes it is mandatory for you to complete the course to get verified.'
				/>
				<FAQCard
					title='Are there any prerequisites for this course?'
					content='There are no specific prerequisites for this course. However, having a basic understanding of mathematics and statistics will be helpful in understanding the concepts covered.'
				/>
				<FAQCard
					title='Are there any assignments or projects in this course?'
					content='There will be assignments and projects throughout the course to help you apply the concepts you learn.'
				/>
			</FAQ>
			<Portfolio courseName={courseName} />
			<Footer />
		</div>
	);
};

export default DataScience;
