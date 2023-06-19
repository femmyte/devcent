import OverviewComponent from 'components/admin/dashboard/Overview';
import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../../components/admin/dashboard/DashboardLayout';
import UserTable from '../../../components/admin/dashboard/UserTable';
import courseInfo from '../../../courseInfo';
import { getSession, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useStateContext } from 'AuthContext';
import Table from 'components/admin/dashboard/Table';

const Overview = () => {
	const { user } = useStateContext();
	const [fetchedUsers, setFetchedUsers] = useState({});
	const [course, setCourse] = useState('');
	const [courseInformation, setCourseInformationo] = useState(courseInfo);
	// const fetchUser = async () => {
	// 	try {
	// 		const response = await fetch('students');

	// 		const data = await response.json();
	// 		// setFetchedUsers(data);
	// 		// console.log(data)
	// 		setFetchedUsers(data);
	// 		data?.map((user) => setCourse(user.course));
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };
	// useEffect(() => {
	// 	fetchUser();
	// }, []);

	useEffect(() => {
		getSession().then((session) => {
			// console.log(session);
		});
	}, []);

	// const session = useSession();
	return (
		<div>
			<DashboardLayout>
				<div className='px-[20px] '>
					<div className='mb-[25px] md:mb-[40px]'>
						<p className='font-space font-[700] text-[20px] leading-[25.5px]'>
							Student List
						</p>
						<p className='font-space font-[400] text-[14px] leading-[18px] mt-[8px]'>
							View all your students here
						</p>
					</div>
					<Table />
				</div>
			</DashboardLayout>
		</div>
	);
};

export default Overview;
