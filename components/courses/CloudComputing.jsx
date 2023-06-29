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

const CloudComputing = ({ course, handleRoute, courseName }) => {
	return (
		<div>
			<Nav />
			<section className='md:flex justify-between gap-x-[30px] p-[20px] md:p-[60px] bg-black overflow-hidden'>
				<div className='block md:hidden'>
					<img
						src='/images/courses/cloud.avif'
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

					<p className='font-dmsans font-[400] text-[18px] md:text-[24px] leading-[31px] text-[#f2f2f2] mb-[20px] md:mb-[60px]'>
						{/* {course?.description} */}
						Gain proficiency in cloud computing fundamentals and
						begin utilizing Azure services, ranging from virtual
						machines and databases to web apps. Learn about the core
						AWS services, including compute, storage, networking,
						and databases.
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
						src='/images/courses/cloud.avif'
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
					</li>
					<li>
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
			<CourseOverview overview="Our Cloud Computing Course is an immersive 12 week learning experience. You'll take a learn-by-doing approach during every class session. Embark on a learning path that introduces you to the Microsoft Azure cloud platform and Amazon Web Services." />
			<section className='px-[20px] md:pl-[50px] pb-[35px] md:py-[35px] bg-black text-center'>
				<h3 className='font-space font-[700] text-[32px] leading-[35.2px] text-center text-primaryYellow mt-[30px] md:mt-[140px]'>
					What you'll learn
				</h3>
				<p className='md:w-[1015px] mx-auto text-center mt-[24px] mb-[20px] font-dmsasns font-[400] text-[20px] leading-[26px] text-[#9b9b9b]'>
					In this course, you will learn the fundamentals of cloud
					computing and its various service models. Explore topics
					such as cloud infrastructure, security, deployment, cost
					optimization, and gain practical knowledge to leverage cloud
					technologies effectively for business success.
				</p>
				<div className='py-[30px] md:py-[50px]'>
					<LearnArea
						number='01'
						title='Introduction to Cloud Computing'
						info='Introduction into the world of Cloud Computing; solutions, services and concepts'
					/>
					<LearnArea
						number='02'
						title='Core Azure concepts and services'
						info='Microsoft Azure fundamentals and core Azure architectural components. Microsoft Azure compute services, storage services, analytics and database.'
					/>
					<LearnArea
						number='03'
						title='Core Azure Management Tools'
						info='Learn the skill of managing and configuring your Azure environment, using tools to build better solutions.'
					/>
					<LearnArea
						number='04'
						title='Azure Network Security Features'
						info='strategies for protecting against threat and securing your network connectivity on Microsoft Azure.'
					/>
					<LearnArea
						number='05'
						title='Azure Identity & Compliance Features'
						info='using the Microsoft Azure identity services features to secure access to your application.'
					/>
					<LearnArea
						number='06'
						title='Azure Cost Management and SLA'
						info='Manage Microsoft Azure costs, and choose the right Microsoft Azure services by examining SLAs and lifecycles.'
					/>
					<LearnArea
						number='07'
						title='Introduction to Virtual Machines (VM)'
						info='Learn how to connect to a VM with a remote desktop, add virtual hard drives, and scale the VM.'
					/>
					<LearnArea
						number='08'
						title='AWS Identity and Access Management (IAM)'
						info='Manage AWS user accounts and access control. Implement IAM policies and secure AWS resources with IAM.'
					/>
					<LearnArea
						number='09'
						title='Compute and Storage Services'
						info='Amazon Elastic Compute Cloud (EC2). Launching and managing EC2 instances. Amazon Simple Storage Service (S3). Amazon Elastic Block Store (EBS) and Amazon Glacier'
					/>
					<LearnArea
						number='10'
						title='Networking and Content Delivery'
						info='Configuring virtual private clouds (VPCs). AWS Direct Connect and Amazon CloudFront'
					/>
					<LearnArea
						number='11'
						title='Security and Compliance'
						info='AWS security best practices and network security measures. Understanding AWS compliance frameworks and services.'
					/>
					<LearnArea
						number='12'
						title='Monitoring and Management Services'
						info='AWS CloudWatch. Monitoring AWS resources and setting up alerts. AWS CloudFormation and AWS Elastic Beanstalk'
					/>
					<LearnArea
						number='13'
						title='Career coaching services'
						info='Projects and portfolio building. Interview prep and coaching. Tech visa coaching'
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
					Cloud Computing Tools
				</h3>
				<p className='mx-auto text-center mt-[20px] mb-[25px] md:mb-[130px] font-dmsasns font-[400] text-[20px] leading-[26px] text-[#9b9b9b]'>
					Learn and master cloud computing tools to empower you on
					your journey as a cloud engineer
				</p>
				<div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-[100px] mb-[20px]'>
					<ToolsCard
						title='AWS'
						img='figma'
						details='AWS offers reliable, scalable, and inexpensive cloud computing services. It provides a comprehensive suite of cloud services, including compute, storage, database, networking, and more.'
					/>
					<ToolsCard
						title='Microsoft Azure'
						img='figma'
						details='Azure is a cloud platform by Microsoft that provides access, management, and development of applications and services through global data centers. It offers tools like Azure Virtual Machines, Blob Storage, SQL Database, and Azure Functions.'
					/>
					<ToolsCard
						title='Kubernetes'
						img='figma'
						details='Kubernetes (K8s) is an open-source system for automating deployment, scaling, and management of containerized applications. It allows for efficient scaling, load balancing, and automated management of containerized workloads.'
					/>
					<ToolsCard
						title='CloudFormation'
						img='figma'
						details='CloudFormation, offered by AWS, is an infrastructure-as-code service that allows you to define and provision cloud resources using templates. It simplifies the management and deployment of AWS resources in a consistent and repeatable manner.'
					/>
					{/* <ToolsCard title='' img='figma' details='' /> */}
				</div>
			</section>
			<WhyDevcent
				reason='"At Devcent, we take pride in our ability to produce world-class
				Cloud Engineers through our course. The course is instructed by
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
					title='Who is this course for?'
					content='The course is designed for beginners who wish to learn and start a career in cloud computing. We will start from the basics and gradually build your knowledge and skills.'
				/>
				<FAQCard
					title='What are the requirements for this course?'
					content='You will need a laptop with internet access. Specific software requirements will be discussed during the course, but we will primarily use cloud platforms like AWS and Azure, which can be accessed through a web browser.'
				/>
				<FAQCard
					title='Can I take this course at my own pace?'
					content='Yes, this course is self-paced, giving you the flexibility to study at your convenience. You will also have access to the course materials and resources.'
				/>
				<FAQCard
					title='Are there any hands-on projects or practical exercises in this course?'
					content='Absolutely! You will have the opportunity to work on real-world projects and exercises that simulate common cloud computing scenarios.'
				/>
				<FAQCard
					title='Can I interact with instructors and fellow learners during the course?'
					content='You will have opportunities to interact with instructors and other learners through discussion forums and Q&A sessions. '
				/>
				<FAQCard
					title='Are there any prerequisites for this course?'
					content='There are no specific prerequisites for this course.'
				/>
				{/* <FAQCard title='' content='' /> */}
			</FAQ>
			<Portfolio courseName={courseName} />
			<Footer />
		</div>
	);
};

export default CloudComputing;
