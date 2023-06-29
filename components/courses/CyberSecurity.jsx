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
import LearnArea from './common/LearnArea';
import FAQCard from 'components/common/FAQCard';

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

const CyberSecurity = ({ course, handleRoute, courseName }) => {
	return (
		<div>
			<Nav />
			<section className='md:flex justify-between items-center gap-x-[30px] p-[20px] md:p-[60px] bg-black overflow-hidden'>
				<div className='block md:hidden'>
					<img
						src='/images/courses/cybersecurity.avif'
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
						src='/images/courses/cyber.avif'
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
			<CourseOverview overview="Our Cyber Security Course is an immersive 12 week learning experience. You'll take a learn-by-doing approach during every class session. Learn how to protect networks and systems from cyber threats, understand encryption and incident response." />
			<section className='px-[20px] md:pl-[50px] pb-[35px] md:py-[35px] bg-black text-center'>
				<h3 className='font-space font-[700] text-[32px] leading-[35.2px] text-center text-primaryYellow mt-[30px] md:mt-[140px]'>
					What you'll learn
				</h3>
				<p className='md:w-[1015px] mx-auto text-center mt-[24px] mb-[20px] font-dmsasns font-[400] text-[20px] leading-[26px] text-[#9b9b9b]'>
					This course equips you with the skill set needed to design
					user centered product while meeting business needs. You'd
					learn how to achieve these through user research, ideation,
					bringing your ideas to life through prototypes and testing
					them with users.
				</p>
				<div className='py-[30px] md:py-[50px]'>
					<LearnArea
						number='01'
						title='Fundamentals of Information Security'
						info='Confidentiality, integrity, and availability (CIA) triad. Security governance and risk management. Security policies, procedures, and awareness. Incident response and handling.'
					/>
					<LearnArea
						number='02'
						title='Network Security'
						info='Network fundamentals and protocols. Firewalls, IDS, and IPS. Virtual private networks (VPNs) and secure remote access. Network security architecture and design'
					/>
					<LearnArea
						number='03'
						title='Cryptography and Data Protection'
						info='Basic principles of cryptography. Symmetric and asymmetric encryption algorithms. Digital signatures and certificates. Secure storage and data protection mechanisms.'
					/>
					<LearnArea
						number='04'
						title='Application Security'
						info='Web application security. Secure software development life cycle (SDLC). Secure coding practices and common vulnerabilities. Application-level firewalls and filters.'
					/>
					<LearnArea
						number='05'
						title='Operating System Security'
						info='Secure operating system configurations. Access control mechanisms and permissions. Patch management and vulnerability assessment. Endpoint protection and anti-malware strategies'
					/>
					<LearnArea
						number='06'
						title='Threats and Vulnerability Management'
						info='Threat intelligence and analysis. Vulnerability assessment and penetration testing. Common types of cyber threats (e.g., malware, phishing, social engineering). Security assessment methodologies.'
					/>
					<LearnArea
						number='07'
						title='Identity and Access Management'
						info='Authentication methods and technologies. Single sign-on (SSO) and multi-factor authentication (MFA). Role-based access control (RBAC) and privilege management. User provisioning and identity lifecycle management.'
					/>
					<LearnArea
						number='08'
						title='Cloud Security'
						info='Cloud computing fundamentals. Cloud service models (IaaS, PaaS, SaaS). Security considerations in cloud environments. Cloud data protection and encryption'
					/>
					<LearnArea
						number='09'
						title='Incident Response and Recovery'
						info=' Incident response planning and procedures. Threat hunting and detection techniques. Incident containment and eradication. Post-incident analysis and recovery strategies.'
					/>
					<LearnArea
						number='10'
						title='Compliance and Legal Aspects'
						info='Regulatory frameworks (e.g., GDPR, HIPAA, PCI-DSS). Privacy and data protection regulations. Security audits and assessments. International standards and best practices'
					/>
					<LearnArea
						number='11'
						title='Emerging Trends in Cyber Security'
						info='Internet of Things (IoT) security. Artificial intelligence (AI) and machine learning in security. Blockchain and decentralized security mechanisms. Threats and challenges in a rapidly evolving digital landscape'
					/>
				</div>
			</section>
			{/* <Tools /> */}
			<WhyDevcent />
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
			<FAQ>
				<FAQCard
					title='What topics will be covered in this course?'
					content='This course covers topics such as network security, cryptography, vulnerability assessment, penetration testing, incident response, and more. You will gain a comprehensive understanding of the fundamentals of cyber security and practical skills in various areas.'
				/>
				<FAQCard
					title='Will I get hands-on experience in this course?'
					content='Hands-on experience is a key component of this course. You will have the opportunity to work with real-world tools and techniques, take practical exercises and carry out projects.'
				/>
				<FAQCard
					title='Are there any certifications associated with this course?
'
					content='While this course does not offer a specific certification, it provides a solid foundation and practical skills that can help you prepare for various industry certifications, such as CompTIA Security+, Certified Ethical Hacker (CEH), and Certified Information Systems Security Professional (CISSP).'
				/>
				<FAQCard
					title='How much time should I dedicate to this course?'
					content='The self-paced nature of the course allows you to learn at your own convenience. However, we recommend dedicating a few hours each week to study and complete the course materials and assignments.'
				/>
				<FAQCard
					title='Will I learn about the legal and ethical aspects of cyber security?'
					content='Absolutely. You will learn about the ethical responsibilities of cybersecurity professionals, the legal frameworks governing cyber security practices, and the ethical implications of various techniques and tools.'
				/>
				<FAQCard
					title='Can I interact with instructors and fellow learners during the course?'
					content='You will have opportunities to interact with instructors and other learners through discussion forums and Q&A sessions.'
				/>
			</FAQ>
			<Portfolio courseName={courseName} />
			<Footer />
		</div>
	);
};

export default CyberSecurity;
