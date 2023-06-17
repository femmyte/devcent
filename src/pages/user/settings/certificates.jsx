import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../../../components/dashboard/DashboardLayout';
const Card = ({ name, date, first, type }) => {
	return (
		<div
			className={`${
				first && 'bg-[#323131] '
			} flex flex-wrap md:flex-nowrap w-full gap-y-[20px] justify-between mt-[40px] py-[16px] px-[8px] items-center`}
		>
			<p className='font-space font-[700] text-[16px] leading-[20px] text-white'>
				{name}
			</p>
			<p className='font-space font-[700] text-[16px] leading-[20px] text-white'>
				{date}
			</p>
			<button className=' py-[8px] px-[16px] rounded-lg border border-primaryPurple font-dmsans font-[500] text-[24px] hover:bg-primaryPurple mx-auto md:mx-0'>
				Get {type}
			</button>
		</div>
	);
};
const Certificates = () => {
	return (
		<>
			<DashboardLayout>
				<div className='px-[20px] md:pl-[70px] md:w-[789px]'>
					<p className='font-space font-[700] text-[24px] leading-[30.2px]  mb-[5px]'>
						Certificate of Completion
					</p>

					<p className='mt-[25px] font-dmsans font-[400] text-[16px] leading-[26px] text-white'>
						A certificate of completion is awarded to all students
						who satisfactorily complete the UiUx course by taking
						all classes and completing all tasks and module tests.
					</p>
					<div className='mt-[40px]'>
						<div className='flex md:gap-x-[180px] border-b border-[#252424] pb-[2px]'>
							<p className='font-space font-[700] text-[16px] leading-[20px] text-white'>
								Course Name
							</p>
							<p className='font-space font-[700] text-[16px] leading-[20px] text-white'>
								Completion Date
							</p>
						</div>
						<Card
							name='UiUx Design'
							date='2nd March,2023'
							first
							type='certificate'
						/>
						<Card
							name='UiUx Design'
							date='2nd March,2023'
							type='certificate'
						/>
					</div>

					<div className='mt-[40px]'>
						<p className='font-space font-[700] text-[24px] leading-[30.2px]  mb-[5px]'>
							Letter of Merit
						</p>

						<p className='mt-[25px] font-dmsans font-[400] text-[16px] leading-[26px] text-white'>
							A letter of merit is a letter signed by the CEO of
							DevCent Fakile Oluwatosin that is awarded to every
							student that scores 80% and above in their final
							course assessment.
						</p>
						<div className='flex md:gap-x-[180px] border-b border-[#252424] pb-[2px] mt-[40px]'>
							<p className='font-space font-[700] text-[16px] leading-[20px] text-white'>
								Course Name
							</p>
							<p className='font-space font-[700] text-[16px] leading-[20px] text-white'>
								Completion Date
							</p>
						</div>
						<Card
							name='UiUx Design'
							date='2nd March,2023'
							first
							type='letter'
						/>
						<Card
							name='UiUx Design'
							date='2nd March,2023'
							type='letter'
						/>
					</div>
				</div>
			</DashboardLayout>
		</>
	);
};

export default Certificates;
