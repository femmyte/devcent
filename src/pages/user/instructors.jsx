import React, { useEffect, useState } from 'react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import DashboardLayout from '../../../components/dashboard/DashboardLayout';
import Image from 'next/image';

const InstructorCard = ({ name, expericience, bio, img, skills }) => {
	return (
		<div className='md:w-[781px] mb-[40px]'>
			<div className='flex flex-col md:flex-row items-center gap-x-[32px] '>
				<div className=''>
					<Image
						src={`/images/instructor/${img}.png`}
						alt={name}
						width={150}
						height={150}
					/>
				</div>
				<div className='flex flex-col items-center md:items-start md:justify-between md:h-[100px] gap-y-[10px]'>
					<p className='font-space font-[700] text-[24px] leading-[30.2px]  text-white'>
						{name}
					</p>
					<ul className='font-space font-[500] text-[20px] leading-[25.2px] text-[#bbb5b5] flex flex-wrap items-center justify-center gap-x-[30px]'>
						{skills.map((skill, i) => (
							<li className='list-disc' key={i}>
								{skill}
							</li>
						))}
					</ul>
					<p className='font-space font-[500] text-[20px] leading-[25.2px] text-[#bbb5b5]'>
						{expericience}
					</p>
				</div>
			</div>
			<p className='font-sans font-[400] text-[16px] leading-[25.2px] text-[#bbb5b5] mt-[20px] text-justify'>
				{bio}
			</p>
		</div>
	);
};
const Instructor = () => {
	const router = useRouter();
	const handleLogout = async () => {
		const data = await signOut({ redirect: false, callbackUrl: '/' });
		router.push(data.url);
	};
	return (
		<>
			<DashboardLayout>
				<div className='px-[20px]'>
					<p className='font-space font-[700] text-[18px] leading-[22.2px]  mb-[4px] text-white'>
						Instructors
					</p>
					<p className='font-dmsans font-[400] text-[12px] leading-[18.2px] text-white mb-[30px] md:mb-[50px]'>
						Meet and know your instructors
					</p>
					<InstructorCard
						name='Ayotomiwa Ajewole'
						img='alalade'
						expericience='4 years+ of experience'
						bio="Ayotomiwa is a seasoned designer with over four years experience in user research, interaction design and user interface design. He's design prowess has landed him jobs in global companies like Google, Amazon and Uber. He's the CEO of DuoAce Inc. a design agency with it's headquarters in Ontario, Canada. He's a very cheerful person and loves to teach designs. He also writes design related articles at his leisure. "
						skills={[
							'Ux researcher',
							'Interaction designer',
							'Interface Designer',
						]}
					/>
					<InstructorCard
						name='Daniel Esther'
						img='mary'
						expericience='3 years+ of experience'
						bio="Ayotomiwa is a seasoned designer with over four years experience in user research, interaction design and user interface design. He's design prowess has landed him jobs in global companies like Google, Amazon and Uber. He's the CEO of DuoAce Inc. a design agency with it's headquarters in Ontario, Canada. He's a very cheerful person and loves to teach designs. He also writes design related articles at his leisure. "
						skills={['Interface designer', 'Ux Writer']}
					/>
					<InstructorCard
						name='Ayotomiwa Ajewole'
						img='tosin'
						expericience='4 years+ of experience'
						bio="Ayotomiwa is a seasoned designer with over four years experience in user research, interaction design and user interface design. He's design prowess has landed him jobs in global companies like Google, Amazon and Uber. He's the CEO of DuoAce Inc. a design agency with it's headquarters in Ontario, Canada. He's a very cheerful person and loves to teach designs. He also writes design related articles at his leisure. "
						skills={[
							'Ux researcher',
							'Interaction designer',
							'Interface Designer',
						]}
					/>
				</div>
			</DashboardLayout>
		</>
	);
};

export default Instructor;
