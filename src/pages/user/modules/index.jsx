import React, { useState } from 'react';
import CourseModuleCard from 'components/dashboard/CourseModuleCard';
import Schedular from 'components/dashboard/SchedularPart';
import { FiCalendar } from 'react-icons/fi';
import courseInfo from '../../../../courseInfo';
import ModuleLayout from 'components/dashboard/modules/ModuleLayout';
import DashboardLayout from 'components/dashboard/DashboardLayout';

const Modules = () => {
	const [courseInformation, setCourseInformationo] = useState(courseInfo);

	return (
		<div>
			{/* <ModuleLayout> */}
			<DashboardLayout>
				<div className='w-full flex flex-col md:flex-row justify-center md:justify-between pl-[15px] mt-[20px] md:mt-[31px]'>
					<div className=''>
						<h1 className='font-[700] text-white text-[20px] md:text-[24px] leading-[30.24px] '>
							Course Outline
						</h1>
						<p className='font-plus font-[500] text-[16px] text-[#71717a] leading-[20.16px] mb-[20px] md:mb-[32px] mt-[8px]'>
							Explore your course module by module{' '}
						</p>
						{courseInformation.map((info) => {
							const {
								number,
								title,
								reading,
								video,
								instructor,
								percent,
								isActive,
							} = info;
							return (
								<div className='py-[12px]' key={number}>
									<CourseModuleCard
										number={number}
										title={title}
										reading={reading}
										video={video}
										instructor={instructor}
										percent={percent}
										isActive={isActive}
										link='course-module'
									/>
								</div>
							);
						})}
					</div>
					<div className='w-[96%] md:w-[322px]'>
						<div className='w-full mx-auto  min-h-[321px] rounded-[24px] py-[20px] px-[16px] bg-[#323131] text-white flex flex-col'>
							<Schedular />
						</div>
						<div
							className='w-full min-h-[146px] rounded-[8px] py-[16px] pl-[10px] md:pl-[24px] pr-[6px] flex flex-col bg-white mt-[24px] text-[#828282]'
							style={{
								boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)',
							}}
						>
							<div className='flex justify-between items-center'>
								<img
									src='/images/icons/dashboard/school.png'
									alt='school'
								/>
								<div className='text-[#828282]'>
									<p className='font-space font-[400] text-[14px] leading-[17px] mb-[4px]'>
										Due Date
									</p>
									<p className='flex items-center justify-center font-[400] text-[12px] gap-x-[6.5px]'>
										{' '}
										<FiCalendar /> Due Date
									</p>
								</div>
							</div>
							<div className='mt-[16px]'>
								<p className='font-space font-[400] text-[14px] leading-[17px] mb-[5px]'>
									Assignment 04
								</p>
								<p className='font-space font-[400] text-[14px] leading-[17px] mb-[5px]'>
									Nisi, venenatis id cursus volutpat cursus
									interdum enim mauris.
								</p>
							</div>
						</div>
					</div>
				</div>
			</DashboardLayout>
			{/* </ModuleLayout> */}
		</div>
	);
};

export default Modules;
