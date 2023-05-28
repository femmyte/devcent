import Nav from 'components/common/Nav';
import Footer from 'components/common/Footer';
import React, { useState, useEffect } from 'react';

const Congratulations = () => {
	return (
		<>
			<div className='bg-black min-h-screen '>
				<Nav />
				<div className='pt-[35px] px-[20px] md:px-[60px] text-white flex flex-col items-center justify-center'>
					<img src='/images/icons/markgreen.png' alt='mark' />
					<p className='my-[30px] md:mt-[83px] font-space font-[700] text-[30px] md:text-[48px] leading-[35px] md:leading-[52px] text-center md:w-[909px] mb-[20px] md:mb-[50px] '>
						Congratulations! You’ve successfully registered for your
						course.
					</p>
				</div>
				<div className='pt-[35px] px-[20px] md:px-[60px] text-white pb-[20px] md:pb-[60px]'>
					<p className='font-dmsans font-[500] text-[18px] md:text-[24px] leading-[40px]  text-justify '>
						We’re glad to have you onboard. Be want you to know that
						you’ve mde the right decision to take this course and
						skill up. Kindly be on the lookout for our email update
						as classes starts son on the{' '}
						<span className='font-[700] '>5th of June, 2023</span>.
						Here are a few things you can do to get yourself
						prepared for class
					</p>
					<ul className='font-dmsans font-[500] text-[18px] md:text-[24px] leading-[40px] text-left ml-[20px]'>
						<li className='list-disc text-left '>
							Go through our frequently asked questions.
						</li>
						<li className='list-disc '>
							Browse through our curricullum.
						</li>
						<li className='list-disc '>
							Follow your instructors on their socials.
						</li>
						<li className='list-disc '>
							Invite your friends to join you on this journey as
							learning together is fun.
						</li>
					</ul>
					<p className='font-dmsans font-[500] text-[18px] md:text-[24px] leading-[40px]  text-justify mt-[20px] '>
						We can’t wait to meet you in person! See you soon.
					</p>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Congratulations;
