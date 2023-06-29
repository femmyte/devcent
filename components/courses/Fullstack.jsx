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

const Fullstack = ({ course, handleRoute, courseName }) => {
	return (
		<div>
			<Nav />
			<section className='md:flex justify-between items-center gap-x-[30px] p-[20px] md:p-[60px] bg-black overflow-hidden'>
				<div className='block md:hidden'>
					<img
						src='/images/courses/fullstack.avif'
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
						Gain a comprehensive understanding of the skills and
						knowledge needed to excel in building interactive and
						visually appealing websites and applications.
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
						src='/images/courses/fullstack.avif'
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
			<CourseOverview overview='Our Full-Stack Development Course is an immersive 12 week learning experience. Cover fundamental concepts of backend development, programming languages, frameworks, databases, server management, and API integration.' />
			<section className='px-[20px] md:pl-[50px] pb-[35px] py-[35px] bg-black text-center'>
				<h3 className='font-space font-[700] text-[32px] leading-[35.2px] text-center text-primaryYellow mt-[30px] md:mt-[140px]'>
					What you'll learn
				</h3>
				<p className='md:w-[1015px] mx-auto text-center mt-[24px] mb-[20px] font-dmsasns font-[400] text-[20px] leading-[26px] text-[#9b9b9b]'>
					In this course, you will learn how to design and develop the
					server-side logic that powers web applications, handle data
					storage and retrieval, implement security measures, and
					optimize performance.
				</p>
				<div className='py-[30px] md:py-[50px]'>
					<LearnArea
						number='01'
						title='Introduction to Web Development'
						info='Overview of frontend, backend, and full-stack development. Introduction to HTML, CSS, and JavaScript. Basics of web architecture and client-server communication.'
					/>
					<LearnArea
						number='02'
						title='HTML Fundamentals'
						info='Understanding HTML tags and elements. Structuring web pages with HTML. Working with text, links, images, and media'
					/>
					<LearnArea
						number='03'
						title='CSS Fundamentals:'
						info='Introduction to CSS syntax and selectors. Applying styles to HTML elements. Layout techniques, including box model, positioning, and flexbox'
					/>
					<LearnArea
						number='04'
						title='Advanced CSS'
						info='Responsive design principles and media queries. CSS frameworks and libraries (e.g., Bootstrap, Tailwind CSS). CSS preprocessors (e.g., Sass, Less) and post-processors (e.g., PostCSS)'
					/>
					<LearnArea
						number='05'
						title='JavaScript Fundamentals'
						info='JavaScript syntax, variables, data types, and operators. Control structures (conditionals, loops). Functions, scope, and closures'
					/>
					<LearnArea
						number='06'
						title='DOM Manipulation and Event Handling'
						info='Understanding the Document Object Model (DOM). Manipulating DOM elements with JavaScript. Handling user interactions and events'
					/>
					<LearnArea
						number='07'
						title='Frontend Frameworks and Libraries'
						info='Introduction to popular frontend frameworks (e.g., React, Angular, Vue.js). Building dynamic and interactive user interfaces with frameworks. Working with component-based architecture and state management.'
					/>
					<LearnArea
						number='08'
						title='Web Accessibility'
						info='Importance of accessibility and inclusive design. Techniques for making web content accessible (e.g., semantic HTML, ARIA). Testing and evaluating accessibility compliance'
					/>
					<LearnArea
						number='09'
						title='UI/UX Design Principles'
						info='Principles of user-centered design. Wireframing, prototyping, and mockup creation. Usability testing and user feedback analysis'
					/>
					<LearnArea
						number='10'
						title='Responsive Web Design and Mobile Development'
						info='Creating responsive layouts and media queries. Mobile-first design approach. Mobile app development considerations (e.g., PWAs, native vs. hybrid apps)'
					/>
					<LearnArea
						number='11'
						title='Testing and Debugging'
						info='Writing and running frontend tests (unit tests, integration tests). Debugging techniques and tools. Cross-browser compatibility testing'
					/>
					<LearnArea
						number='12'
						title='Deployment and Web Hosting'
						info='Deploying frontend applications to web servers. Domain management and DNS configuration. Continuous integration and deployment (CI/CD) pipelines'
					/>
					<LearnArea
						number='13'
						title='Web APIs and Data Fetching'
						info='Working with HTTP and RESTful APIs. Fetching and manipulating data using AJAX and Fetch API. Asynchronous programming with Promises and async/await'
					/>
					<LearnArea
						number='14'
						title='Portfolio Development and Career Support'
						info='Building a portfolio showcasing frontend projects. Resume writing and interview preparation. Job search strategies and industry networking'
					/>
					<LearnArea
						number='15'
						title='Introduction to Backend Development'
						info='Overview of backend development and its role in web applications. Understanding the client-server architecture and HTTP protocol. Introduction to server-side languages and frameworks'
					/>
					<LearnArea
						number='16'
						title='Database Fundamentals'
						info='Relational database concepts (tables, relationships, queries). Introduction to SQL (Structured Query Language). Database design and normalization principles'
					/>
					<LearnArea
						number='17'
						title='Backend Programming Languages'
						info='Introduction to server-side programming languages (e.g., Python, Java, Node.js). Syntax, data types, variables, and control structures. Working with functions, modules, and libraries'
					/>
					<LearnArea
						number='18'
						title='Web Frameworks'
						info="Introduction to popular web frameworks (e.g., Django, Ruby on Rails, Express.js). Building web applications using a framework' s MVC (Model-View-Controller) architecture. Handling routing, requests, and responses"
					/>
					<LearnArea
						number='19'
						title='APIs and RESTful Web Services'
						info='Understanding APIs (Application Programming Interfaces). Building and consuming RESTful APIs. Authentication and authorization mechanisms (e.g., JWT, OAuth)'
					/>
					<LearnArea
						number='20'
						title='Database Management Systems'
						info='Introduction to database management systems (e.g., MySQL, PostgreSQL, MongoDB). Querying databases using SQL or NoSQL techniques. Working with database connectors and ORMs (Object-Relational Mapping)'
					/>
					<LearnArea
						number='21'
						title='Data Modeling and Persistence'
						info='Designing database schemas and data models. Implementing CRUD (Create, Read, Update, Delete) operations. Working with database transactions and concurrency'
					/>
					<LearnArea
						number='22'
						title='Authentication and Authorization'
						info='User authentication techniques (e.g., username/password, social login). Implementing access control and role-based permissions. Security considerations (e.g., encryption, input validation)'
					/>
					<LearnArea
						number='23'
						title='Web Security and Best Practices'
						info='Common web vulnerabilities (e.g., cross-site scripting, SQL injection). Implementing secure coding practices. Protecting sensitive data and handling user input securely
'
					/>
					<LearnArea
						number='24'
						title='API Integration and Third-Party Services'
						info='Integrating external APIs into backend applications. Working with popular APIs (e.g., payment gateways, geolocation, social media). Handling asynchronous operations and callbacks'
					/>
					<LearnArea
						number='24'
						title='Scalability and Performance Optimization'
						info=''
					/>
					<LearnArea
						number='25'
						title='Testing and Debugging'
						info='Writing unit tests and integration tests for backend code. Debugging techniques and tools. Test-driven development (TDD) principles'
					/>
					<LearnArea
						number='26'
						title='Deployment and DevOps'
						info='Deploying backend applications to web servers or cloud platforms. Configuration management and server administration. Continuous integration and deployment (CI/CD) practices'
					/>
					<LearnArea
						number='27'
						title='Monitoring and Logging'
						info='Implementing logging and error handling mechanisms. Monitoring application performance and server health. Using tools for log analysis and debugging'
					/>
				</div>
			</section>
			<section
				id='tools'
				className='pt-[10px] px-[20px] md:px-[100px] lg:px-[180px] pb-[35px] bg-black text-center
      '
			>
				<h3 className='font-space font-[700] text-[32px] leading-[35.2px] text-center text-primaryYellow uppercase'>
					Full-Stack Development Tools
				</h3>
				<p className='mx-auto text-center mt-[20px] mb-[25px] md:mb-[130px] font-dmsasns font-[400] text-[20px] leading-[26px] text-[#9b9b9b]'>
					Learn and master Fullstack Development tools to empower you
					on your journey as a Fullstack Developer
				</p>
				<div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-[100px] mb-[20px]'>
					<ToolsCard
						title='Git'
						img='figma'
						details='Git is a distributed version control system that allows developers to track changes, collaborate with teammates, and manage code repositories efficiently.'
					/>
					<ToolsCard
						title='JavaScript Frameworks'
						img='figma'
						details='JavaScript frameworks like React, Angular, and Vue.js are widely used for building interactive and responsive user interfaces. They provide libraries and tools for efficient front-end development.'
					/>
					<ToolsCard
						title='Backend Frameworks'
						img='figma'
						details='Backend frameworks such as Node.js, Django, and Ruby offer a foundation for server-side development, providing features like routing, database integration, and API development.'
					/>
					<ToolsCard
						title='Databases'
						img='figma'
						details='Databases like MySQL, PostgreSQL, MongoDB, and SQLite are commonly used and enable developers to store and manage data efficiently.'
					/>
					<ToolsCard
						title='RESTful APIs'
						img='figma'
						details='Representational State Transfer (REST) is an architectural style used for building web services. Tools like Express.js and Django REST Framework simplify the creation and management of RESTful APIs.'
					/>
					{/* <ToolsCard title='' img='figma' details='' /> */}
				</div>
			</section>
			<WhyDevcent
				reason='"At Devcent, we take pride in our ability to produce world-class
				Fullstack Developers through our course. The course is instructed by
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
				</h3>
				<p className='mt-[43px] font-space font-[700] text-[26px] leading-[11.7px] text-[#cccccc]'>
					Learn-by-doing with live classes
				</p> */}
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
			<FAQ>
				<FAQCard
					title='Do I need prior programming experience?'
					content='While prior programming experience can be beneficial, this course is designed to accommodate learners at various skill levels, including beginners.'
				/>
				<FAQCard
					title='Will I be able to build real-world applications after completing this course?'
					content="Through practical projects and hands-on exercises, you'll build and deploy applications that encompass both front-end and back-end components."
				/>
				<FAQCard
					title='How much time should I dedicate to the course each week?'
					content='This course is self-paced, allowing you to learn at your own convenience and set a learning schedule that works best for you.'
				/>
				<FAQCard
					title='Are the course materials accessible after completion?'
					content='Yes, you will have access to the course materials even after completion.'
				/>
				<FAQCard
					title='Will I have access to instructor support during the course?'
					content='Absolutely! Our instructors and teaching assistants are available to provide guidance and support throughout your learning journey.'
				/>
			</FAQ>
			<Portfolio courseName={courseName} />
			<Footer />
		</div>
	);
};

export default Fullstack;
