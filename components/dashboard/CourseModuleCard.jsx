import Link from 'next/link';
import React from 'react';
import { FaUser } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

const CourseModuleCard = ({
	number,
	title,
	reading,
	video,
	instructor,
	percent,
	isActive,
	link,
	page,
}) => {
	return (
		<div
			className={` md:w-[720px] md:h-[80px] flex flex-col md:flex-row justify-center items-center rounded-[8px] gap-x-5 md:gap-x-[30px] px-[20px] md:px-[24px] py-[15px] md:py-0`}
			style={{ backgroundColor: isActive ? 'white' : '#e0e0e0' }}
		>
			<div className='w-[20px] md:w-[64px] h-[20px] md:h-[50px] rounded-[8px] hidden md:flex items-center justify-center bg-slate-600 '>
				<p className='font-space font-[700] text-[16px] md:text-[32px] leading-[12px] md:leading-[41px]'>
					{number}
				</p>
			</div>
			<div className='w-full md:w-[300px] flex flex-col items-center justify-center'>
				<p className='font-space font-[400] text-[16px] leading-[20px]'>
					{title}
				</p>
				<p className='font-space font-[400] text-[14px] leading-[18px]'>
					{video} videos | {reading} Readings
				</p>
			</div>
			<div className='w-auto md:w-[188px] flex items-center justify-center py-[6px]  gap-x-[7px]'>
				<FaUser />
				<p className='font-space font-[400] text-[12px] leading-[15px]'>
					{instructor}
				</p>
			</div>
			<div className='w-full md:w-[188px] flex md:flex-col items-center md:items-start justify-between md:justify-center'>
				<p className='font-space font-[400] text-[16px] leading-[20px]'>
					{percent}% done
				</p>
				<div className='w-full relative mt-[4px]'>
					<div className='w-full bg-[#C7D4E0] h-[10px] rounded-[6px]'></div>
					<div
						className={` bg-primaryPurple h-[10px] absolute top-0 left-0 rounded-[6px]`}
						style={{ width: `${percent}%` }}
					></div>
				</div>
			</div>
			<div className='flex items-center justify-center'>
				{isActive ? (
					<Link href={`/auth/modules/${link}`}>
						<p className='font-space font-[400] text-[30px] leading-[20px]'>
							<FiArrowRight />
						</p>
					</Link>
				) : (
					<img src='/images/icons/lock.png' alt='' />
				)}
			</div>
		</div>
	);
};

export default CourseModuleCard;
