import React from 'react';
import Nav from 'components/Nav';
import Meta from 'components/Meta';
// import CourseCard from "components/uiux/CourseCard";
import Instructor from 'components/Instructor';
import Footer from 'components/Footer';
import { FiArrowDownRight, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';
const CourseCard = ({
	background,
	title,
	children,
	img,
	first,
	second,
	about,
}) => {
	// ['#521C3C', '#3C2B68', '000000', '#19201D', '#433C28', '#1B2531']
	// bg.map(bg=> console.log(bg))
	// background == 1 ? '#521C3C' : 2 ? '#3C2B68' : 3 ? '000000' : 4 ? '#19201D' : 5 ? '#433C28' : '#1B2531'
	return (
		<div
			className={`${second != about ? ' md:pt-0' : ''} ${
				first && 'pt-0'
			}`}
		>
			<div
				className={`${
					second
						? 'flex-col-reverse flex md:flex-row-reverse'
						: 'flex-col-reverse flex md:flex-row'
				} md:flex  md:justify-between  my-0 md:mx-0 md:w-full`}
			>
				<article
					className={` w-full md:w-[50%] bg-[$] py-[30px] md:pt-[100px] px-[20px] md:px-[50px] text-white`}
					style={{ backgroundColor: background }}
				>
					{children}
				</article>
				<img
					src={`/images/courses/${img}.png`}
					alt={title}
					className='w-full md:w-[50%]'
					// className={`${
					//   second ? 'md:ml-[70px]' : 'md:mr-[72px]'
					// } max-w-6/7 mx-auto md:mx-0 md:max-w-[600px]`}
				/>
			</div>
		</div>
	);
};
const courses = () => {
	return (
		<>
			<Meta />
			<Nav />
			<div className='bg-black'>
				<section className='h-[95vh] flex flex-col items-center justify-center bg-black'>
					<h1 className='font-space font-[700] text-[30px] md:text-[96px] leading-[35px] md:leading-[94.1px] text-[#ffba0e] '>
						Our Courses
					</h1>
					<p
						className='font-dmsans font-[400] text-[24px] mt-[18px] md:mt-[80px] leading-[31.25px] mx-[15px]  md:w-[842px] text-white
          '
					>
						Our range of Skills resources will help you Build your
						career with as few bumps as possible. From pitching to
						clients, showing your work, or securing your business’s
						future, we’ve got what you need.
					</p>
				</section>
				<section className='gap-y-[120px] text-white w-screen'>
					<CourseCard img='uiux' background='#521C3C'>
						<h3 className='font-space font-[700] text-24px] leading-[19px]'>
							UI/UX Design
						</h3>
						<p className='font-[400] font-dmsans text-[15px] leading-[27px]'>
							Transform your passion for design into a career with
							our UI/UX Design Training. Learn the latest design
							tools, techniques and methodologies from industry
							experts, and build a portfolio of work that
							showcases your skills. Whether you're just starting
							out or looking to advance your career, our training
							program will equip you with the knowledge and
							hands-on experience needed to succeed in the dynamic
							world of UI/UX design. Enroll now and take the first
							step towards your dream career in design!
						</p>
						<p className='mt-[20px] md:mt-[36px] mb-[8px] font-dmsans font-[500] text-[24px]'>
							Ready to take a career in UI/UX?
						</p>
						<div className='flex items-center gap-x-[20px]'>
							<Link
								href='/courses/uiux'
								className='font-sora font-[600] text-[16px] leading-[20px]'
							>
								Join us now
							</Link>
							<FiArrowRight />
						</div>
					</CourseCard>
					<CourseCard img='dataScience' background='#3C2B68' second>
						<h3 className='font-space font-[700] text-24px] leading-[19px]'>
							Data Science
						</h3>
						<p className='font-[400] font-dmsans text-[15px] leading-[27px]'>
							Unlock the power of data with our Data Science
							Training. Learn to manipulate, analyze and visualize
							complex data sets using cutting-edge tools and
							techniques. Our program covers everything from data
							wrangling to machine learning, giving you a
							comprehensive understanding of the field. Led by
							experienced instructors, you'll gain hands-on
							experience with real-world projects, and graduate
							with a portfolio of work to showcase your skills to
							potential employers. Whether you're new to data
							science or looking to expand your skillset, our
							training program will prepare you for a successful
							career in this high-demand field. Enroll now and
							start your journey towards becoming a data
							scientist!
						</p>
						<p className='mt-[20px] md:mt-[36px] mb-[8px] font-dmsans font-[500] text-[24px]'>
							Ready to take a career in Data Science
						</p>
						<div className='flex items-center gap-x-[20px]'>
							<Link
								href=''
								className='font-sora font-[600] text-[16px] leading-[20px]'
							>
								Join us now
							</Link>
							<FiArrowRight />
						</div>
					</CourseCard>
					<CourseCard img='backend' background='#000000'>
						<h3 className='font-space font-[700] text-24px] leading-[19px]'>
							Back-end Development
						</h3>
						<p className='font-[400] font-dmsans text-[15px] leading-[27px]'>
							Take your coding skills to the next level with our
							Back-End Development Training. Learn to build
							robust, scalable and secure web applications from
							scratch using the latest back-end development
							technologies. Our program covers everything from
							server-side programming to database management,
							giving you a comprehensive understanding of the
							back-end development process. With hands-on
							experience working on real-world projects, you'll
							graduate with a portfolio of work to showcase your
							skills to potential employers. Whether you're new to
							back-end development or looking to advance your
							career, our training program will equip you with the
							knowledge and skills needed to succeed in this
							dynamic field. Enroll now and start your journey
							towards becoming a back-end developer!
						</p>
						<p className='mt-[20px] md:mt-[36px] mb-[8px] font-dmsans font-[500] text-[24px]'>
							Ready to take a career in Back-end Development
						</p>
						<div className='flex items-center gap-x-[20px]'>
							<Link
								href=''
								className='font-sora font-[600] text-[16px] leading-[20px]'
							>
								Join us now
							</Link>
							<FiArrowRight />
						</div>
					</CourseCard>
					<CourseCard img='fullstack' background='#19201D' second>
						<h3 className='font-space font-[700] text-24px] leading-[19px]'>
							Full Stack Web{' '}
						</h3>
						<p className='font-[400] font-dmsans text-[15px] leading-[27px]'>
							Become a full-stack web developer with our
							comprehensive Full-Stack Web Development Training.
							Learn to build dynamic, responsive and interactive
							web applications using both front-end and back-end
							development technologies. Our program covers
							everything from HTML and CSS to JavaScript, React,
							Node.js, and more, giving you a complete
							understanding of the web development process. With
							hands-on experience working on real-world projects,
							you'll graduate with a portfolio of work to showcase
							your skills to potential employers. Whether you're
							just starting out or looking to advance your career,
							our training program will prepare you for a
							successful career in full-stack web development.
							Enroll now and take the first step towards becoming
							a full-stack web developer!
						</p>
						<p className='mt-[20px] md:mt-[36px] mb-[8px] font-dmsans font-[500] text-[24px]'>
							Ready to take a career in Full Stack Web
						</p>
						<div className='flex items-center gap-x-[20px]'>
							<Link
								href=''
								className='font-sora font-[600] text-[16px] leading-[20px]'
							>
								Join us now
							</Link>
							<FiArrowRight />
						</div>
					</CourseCard>
					<CourseCard img='cyber' background='#433C28'>
						<h3 className='font-space font-[700] text-24px] leading-[19px]'>
							Cyber Security
						</h3>
						<p className='font-[400] font-dmsans text-[15px] leading-[27px]'>
							Protect against cyber threats with our Cyber
							Security Training. Learn the latest security
							techniques and methodologies to secure computer
							networks, data and applications from unauthorized
							access, attacks and breaches. Our program covers
							everything from network security to cryptography,
							giving you a comprehensive understanding of the
							cyber security landscape. With hands-on experience
							working on real-world projects, you'll graduate with
							a portfolio of work to showcase your skills to
							potential employers. Whether you're new to cyber
							security or looking to advance your career, our
							training program will equip you with the knowledge
							and skills needed to succeed in this critical field.
							Enroll now and start your journey towards becoming a
							cyber security expert!
						</p>
						<p className='mt-[20px] md:mt-[36px] mb-[8px] font-dmsans font-[500] text-[24px]'>
							Ready to take a career in Cyber Security
						</p>
						<div className='flex items-center gap-x-[20px]'>
							<Link
								href=''
								className='font-sora font-[600] text-[16px] leading-[20px]'
							>
								Join Us Now
							</Link>
							<FiArrowRight />
						</div>
					</CourseCard>
					<CourseCard img='frotend' background='#1B2531' second>
						<h3 className='font-space font-[700] text-24px] leading-[19px]'>
							Front-end Development
						</h3>
						<p className='font-[400] font-dmsans text-[15px] leading-[27px]'>
							Unlock your potential as a front-end web developer
							with our Front-End Development Training. Learn to
							build stunning, user-friendly and responsive web
							applications using the latest front-end development
							technologies. Our program covers everything from
							HTML and CSS to JavaScript, React, and more, giving
							you a comprehensive understanding of the front-end
							development process. With hands-on experience
							working on real-world projects, you'll graduate with
							a portfolio of work to showcase your skills to
							potential employers. Whether you're new to front-end
							development or looking to advance your career, our
							training program will prepare you for a successful
							career in this fast-paced field. Enroll now and
							start your journey towards becoming a front-end
							developer!
						</p>
						<p className='mt-[20px] md:mt-[36px] mb-[8px] font-dmsans font-[500] text-[24px]'>
							Ready to take a career in Front-end Development
						</p>
						<div className='flex items-center gap-x-[20px]'>
							<Link
								href=''
								className='font-sora font-[600] text-[16px] leading-[20px]'
							>
								Join us now
							</Link>
							<FiArrowRight />
						</div>
					</CourseCard>
				</section>
				<section className="px-[20px] md:px-[57px] py-[62px] bg-black md:bg-[url('/images/devcentbg.png')] min-h-[110vh] w-[100vw] overflow-hidden ">
					<h3 className='font-space font-[700] text-[32px] leading-[35.2px] text-left text-white'>
						LEARN WITH THE BEST
					</h3>
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
				</section>
				<Footer />
			</div>
		</>
	);
};

export default courses;
