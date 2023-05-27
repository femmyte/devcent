// import Calendar from 'components/dashboard/Calendar'
import CourseModuleCard from 'components/dashboard/CourseModuleCard';
import OverviewComponent from 'components/dashboard/Overview';
import Schedular from 'components/dashboard/SchedularPart';
import React, { useEffect, useState } from 'react';
import { FiCalendar } from 'react-icons/fi';
// import BarChart from '../components/Barchart'
// import PieChart from '../components/PieChart'
import DashboardLayout from '../../../components/dashboard/DashboardLayout';
import courseInfo from '../../../courseInfo';
import { getSession, useSession } from 'next-auth/react';
import Link from 'next/link';

const Overview = () => {
	const [fetchedUsers, setFetchedUsers] = useState({});
	const [course, setCourse] = useState('');
	const [courseInformation, setCourseInformationo] = useState(courseInfo);
	const fetchUser = async () => {
		try {
			const response = await fetch('students');

			const data = await response.json();
			// setFetchedUsers(data);
			// console.log(data)
			setFetchedUsers(data);
			data?.map((user) => setCourse(user.course));
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		fetchUser();
	}, []);

	useEffect(() => {
		getSession().then((session) => {
			// console.log(session);
		});
	}, []);

	const session = useSession();

	// console.log(session);
	console.log(session.data?.user?.enrolledCourses);

	// fetchedUsers.map((course) => setCourse(course))
	return (
		<div>
			<DashboardLayout>
				<>
					{session.data?.user?.enrolledCourses.length <= 0 ? (
						<div className='w-full flex flex-col items-center justify-center h-screen'>
							<p className='font-space text-white font-[500] text-[20px] leading-[25px] mb-[5px]'>
								Kindly Register for a course to get full access
								to the platform{' '}
								<Link
									href='/courses'
									className=' text-primaryPurple'
								>
									Register here
								</Link>
							</p>
						</div>
					) : (
						<>
							{' '}
							<OverviewComponent />
							<div className='w-full flex flex-col md:flex-row justify-center md:justify-between pl-[15px] mt-[20px] md:mt-[31px]'>
								<div className=''>
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
											<div
												className='py-[12px]'
												key={number}
											>
												<CourseModuleCard
													number={number}
													title={title}
													reading={reading}
													video={video}
													instructor={instructor}
													percent={percent}
													isActive={isActive}
												/>
											</div>
										);
									})}
								</div>
								<div className='w-[96%] mx-auto md:w-[322px] min-h-[601px] rounded-[24px] py-[20px] px-[16px] bg-[#323131] text-white flex flex-col'>
									<Schedular />
									<div
										className='w-[96%] md:w-[290px] min-h-[146px] rounded-[8px] py-[16px] pl-[10px] md:pl-[24px] pr-[6px] flex flex-col bg-white mt-[17px] text-[#828282]'
										style={{
											boxShadow:
												'0px 2px 2px rgba(0, 0, 0, 0.25)',
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
												Nisi, venenatis id cursus
												volutpat cursus interdum enim
												mauris.
											</p>
										</div>
									</div>
									<div className='mt-[24px] text-white '>
										<p className='font-space font-[700] text-[16px] leading-[24px] mb-[5px] text-center'>
											Instructors
										</p>
										<p className='font-space font-[400] text-[13px] leading-[17px] mb-[5px] text-[#71717a] text-center'>
											Lorem ipsum dolor sit ametis.
										</p>
										<div className='flex items-center justify-center gap-x-[13px] mt-[24px]'>
											<img
												src='/images/instructor/alalade.png'
												alt='alalade'
												className='w-[36px] h-[36px]'
											/>
											<div className=''>
												<p className='font-space font-[700] text-[16px] leading-[24px] mb-[5px]'>
													Jenny Wilson
												</p>
												<p className='font-space font-[400] text-[13px] leading-[17px] mb-[5px] text-[#71717a]'>
													Lorem ipsum dolor sit
													ametis.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</>
					)}
				</>
			</DashboardLayout>
		</div>
	);
};

export default Overview;
