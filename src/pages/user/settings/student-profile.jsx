import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../../../components/dashboard/DashboardLayout';
import courseInfo from '../../../../courseInfo';
import { getSession, useSession } from 'next-auth/react';
import { useStateContext } from 'AuthContext';
import { useRouter } from 'next/router';
import { useFetch } from 'services/hooks/fetch';
import FullLoader from 'components/loaders/FullLoader';
import FullError from 'components/error/FullError';
import { enrolInCourse } from 'services/paymentService';
import Link from 'next/link';
import ButtonLoader from 'components/loaders/ButtonLoader';
import Image from 'next/image';
import DateInput from 'components/common/DateSelector';
const Studentprofile = () => {
	const { user } = useStateContext();
	const [courseInformation, setCourseInformationo] = useState(courseInfo);
	// const fetchUser = async () => {
	// 	try {
	// 		const response = await fetch('students');
	// 		const data = await response.json();
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

	const router = useRouter();

	// const {
	// 	data,
	// 	isInitialLoading,
	// 	isSuccess,
	// 	isError: isErrorFetching,
	// 	refetch,
	// } = useFetch(`/courses/${courseName}/course`, 'get-course');

	// useEffect(() => {
	// 	if (isSuccess) {
	// 		setCourse(data.course);
	// 	}

	// 	refetch();
	// }, [courseName, isSuccess, data, refetch]);

	const [state, setState] = useState({
		paymentPlan: '',
		firstName: '',
		lastName: '',
		email: '',
		country: '',
		address: '',
		province: '',
		city: '',
		postalCode: '',
		phoneNumber: '',
		agreement: false,
	});
	const [errorEnrol, setErrorEnrol] = useState('');
	const [isLoadingEnrol, setIsLoadingEnrol] = useState(false);

	const handleChange = (evt) => {
		const value =
			evt.target.type === 'checkbox'
				? evt.target.checked
				: evt.target.value;
		setState({
			...state,
			[evt.target.name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setErrorEnrol('');

		if (
			!state.paymentPlan ||
			!state.firstName ||
			!state.lastName ||
			!state.email ||
			!state.country ||
			!state.address ||
			!state.province ||
			!state.city ||
			!state.postalCode ||
			!state.phoneNumber ||
			!state.agreement
		) {
			setErrorEnrol('Fields with * are required');
			return;
		}
		// setIsLoadingEnrol(true);

		// try {
		// 	const { data } = await enrolInCourse(
		// 		`/courses/${courseName}/enrol`,
		// 		{
		// 			courseId: course.courseId,
		// 			paymentPlan: state.paymentPlan,
		// 			firstName: state.firstName,
		// 			lastName: state.lastName,
		// 			email: state.email,
		// 			country: state.country,
		// 			city: state.city,
		// 			address: state.address,
		// 			province: state.province,
		// 			postalCode: state.postalCode,
		// 			phoneNumber: state.phoneNumber,
		// 		},
		// 		session?.data?.accessToken
		// 	);

		// 	router.push(data.paymentPage);
		// } catch (err) {
		// 	if (err?.response?.data) {
		// 		setErrorEnrol(err.response.data.message);
		// 	}
		// } finally {
		// 	setIsLoadingEnrol(false);
		// }
	};

	// if (isInitialLoading) {
	// 	return <FullLoader />;
	// }
	// if (isErrorFetching) {
	// 	return <FullError />;
	// }
	return (
		<>
			<DashboardLayout>
				<div className='px-[20px]'>
					<div className='flex flex-col gap-y-[20px] md:flex-row justify-between items-center'>
						<div className='flex flex-col gap-y-[20px] md:flex-row gap-x-[63px] items-center'>
							<Image
								src='/images/profileImg.png'
								height={100}
								width={100}
								alt='profile Image'
							/>
							<button
								type='submit'
								className=' py-[8px] px-[16px] rounded-lg bg-primaryPurple font-dmsans font-[500] text-[24px] hover:bg-primaryYellow'
							>
								Upload New
							</button>
							<button
								type='submit'
								className=' py-[8px] px-[16px] rounded-lg border border-primaryPurple hover:bg-primaryPurple font-dmsans font-[500] text-[24px]'
							>
								Delete Photo
							</button>
						</div>
						<p className='font-space font-[700] text-[18px] leading-[22.97.2px]'>
							Student ID-123456
						</p>
					</div>
					<p className='mt-[30px] md:mt-[66px] font-source font-[700] text-[28px] md:text-[32px] leading-[40.2px]  mb-[24px]'>
						Personal Details
					</p>
					{/* <div className='md:flex gap-x-8 justify-between  mb-[24px]'> */}
					<div className='flex flex-col flex-1 mb-[24px]'>
						<label
							htmlFor='fname'
							className='font-source font-[600] text-[24px] leading-[30px] text-[#9b9b9b] mb-[16px]'
						>
							First Name <span className='text-red-600'>*</span>
						</label>
						<input
							type='text'
							className='p-4 border border-[#747474] text-[#747474] font-[600] text-[16px] leading-5 bg-transparent rounded-lg'
							placeholder='John'
							id='fname'
							name='firstName'
							onChange={handleChange}
							value={state.firstName}
							required
						/>
					</div>
					<div className='flex flex-col flex-1 mb-[24px]'>
						<label
							htmlFor='lname'
							className='font-source font-[600] text-[24px] leading-[30px] text-[#9b9b9b] mb-[16px]'
						>
							Last Name <span className='text-red-600'>*</span>
						</label>
						<input
							type='text'
							className='p-4 border border-[#747474] text-[#747474] font-[600] text-[16px] leading-5 bg-transparent w-[100%] rounded-lg'
							placeholder='Doe'
							id='lname'
							name='lastName'
							onChange={handleChange}
							value={state.lastName}
							required
						/>
					</div>
					<DateInput />
					<div className='flex flex-col  mb-[24px]'>
						<label
							htmlFor='phone'
							className='font-source font-[600] text-[24px] leading-[30px] text-[#9b9b9b] mb-[16px]'
						>
							Phone Number <span className='text-red-600'>*</span>
						</label>
						<input
							type='tel'
							className='p-4 border border-[#747474] text-[#747474] font-[600] text-[16px] leading-5 bg-transparent rounded-lg'
							placeholder='8178627581'
							id='phone'
							name='phoneNumber'
							onChange={handleChange}
							value={state.phoneNumber}
							required
						/>
					</div>
					<div className='flex flex-col  mb-[24px]'>
						<label
							htmlFor='phone'
							className='font-source font-[600] text-[24px] leading-[30px] text-[#9b9b9b] mb-[16px]'
						>
							About Me <span className='text-red-600'>*</span>
						</label>
						<textarea
							type='text'
							className='p-4 border border-[#747474] text-[#747474] font-[600] text-[16px] leading-5 bg-transparent rounded-lg h-[200px]'
							placeholder='Tell us a bit about yourself, the things that interest you and what you hope to gain from thi course'
							id='phone'
							name='phoneNumber'
							onChange={handleChange}
							// value={state.about}
							required
						></textarea>
					</div>
					<p className='mt-[30px] font-dmsans font-[700] text-[14px] leading-[17px]  mb-[24px] md:w-[599px]'>
						Please note that post you make in your discussion groups
						would display your name, image and student ID. To read
						full extent, check our our{' '}
						<Link href='#' className='text-[#0A66C2]'>
							Terms and conditions
						</Link>
					</p>
					<button
						type='submit'
						className=' py-[8px] px-[16px] rounded-lg bg-primaryPurple font-dmsans font-[500] text-[24px] hover:bg-primaryYellow'
					>
						Save Changes
					</button>
					<div className='flex flex-col gap-y-[20px] md:flex-row mt-[60px] gap-x-[28px] justify-center'>
						<Link
							href='/user/settings/notification-settings'
							className=' py-[8px] px-[16px] rounded-lg bg-primaryPurple font-dmsans font-[500] text-[24px] hover:bg-primaryYellow'
						>
							Notifications Settings
						</Link>
						<Link
							href='/user/settings/security-settings'
							className=' py-[8px] px-[16px] rounded-lg border border-primaryPurple font-dmsans font-[500] text-[24px] hover:bg-primaryPurple'
						>
							Security Settings
						</Link>
						<Link
							href='/user/settings/certificates'
							className=' py-[8px] px-[16px] rounded-lg bg-primaryPurple font-dmsans font-[500] text-[24px] hover:bg-primaryYellow'
						>
							Certificates and Letters
						</Link>
					</div>
				</div>
			</DashboardLayout>
		</>
	);
};

export default Studentprofile;
