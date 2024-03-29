import DateInput from 'components/common/DateSelector';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ButtonLoader from 'components/loaders/ButtonLoader';
import { useUserStore } from '../../../../store/useUserStore';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { useProfileUpdate } from '../../../../services/hooks/commons';
import { useSession } from 'next-auth/react';
const ProfileDetails = () => {
	const { data } = useSession();
	const { userInfo, updateUserInfo } = useUserStore((state) => state);

	const {
		data: dataUpdate,
		isLoading: isLoadingUpdate,
		isSuccess: isSuccessUpdate,
		isError: isErrorUpdate,
		error: errorUpdate,
		mutate,
	} = useProfileUpdate();

	const [profile, setProfile] = useState({
		firstName: '',
		lastName: '',
		phoneNumber: '',
		bio: '',
		day: '',
		month: '',
		year: '',
	});

	useEffect(() => {
		setProfile({
			firstName: userInfo.firstName || '',
			lastName: userInfo.lastName || '',
			phoneNumber: userInfo.phoneNumber || '',
			bio: userInfo.bio || '',
			day: userInfo?.birthDay?.split('-')[0] || '',
			month: userInfo?.birthDay?.split('-')[1] || '',
			year: userInfo?.birthDay?.split('-')[2] || '',
		});
	}, [userInfo]);

	useEffect(() => {
		if (isSuccessUpdate) {
			toast(dataUpdate?.message);
			updateUserInfo(dataUpdate?.user);
		}
	}, [isSuccessUpdate, dataUpdate, updateUserInfo]);

	const handleChange = (evt) => {
		const value = evt.target.value;

		setProfile({
			...profile,
			[evt.target.name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (
			!profile.firstName ||
			!profile.lastName ||
			!profile.phoneNumber ||
			!profile.day ||
			!profile.month ||
			!profile.year
		) {
			toast('Fields with * are required');
			return;
		}

		mutate({
			url: `/users/${data?.user._id}/update-profile`,
			form: {
				firstName: profile.firstName,
				lastName: profile.lastName,
				phoneNumber: profile.phoneNumber,
				bio: profile.bio,
				birthDay: `${profile.day}-${profile.month}-${profile.year}`,
			},
			accessToken: data?.accessToken,
		});
	};
	return (
		<div className='px-[20px] text-white'>
			<p className='mt-[30px] md:mt-[66px] font-source font-[700] text-[28px] md:text-[32px] leading-[40.2px]  mb-[24px]'>
				Personal Details
			</p>
			<form onSubmit={handleSubmit}>
				<div className='flex flex-col flex-1 mb-[24px]'>
					<label
						htmlFor='first-name'
						className='font-source font-[600] text-[24px] leading-[30px] text-[#9b9b9b] mb-[16px]'
					>
						First Name <span className='text-red-600'>*</span>
					</label>
					<input
						type='text'
						className='p-4 border border-[#747474] text-[#747474] font-[600] text-[16px] leading-5 bg-transparent rounded-lg'
						placeholder='John'
						id='first-name'
						name='firstName'
						onChange={handleChange}
						value={profile.firstName}
						required
					/>
				</div>
				<div className='flex flex-col flex-1 mb-[24px]'>
					<label
						htmlFor='last-name'
						className='font-source font-[600] text-[24px] leading-[30px] text-[#9b9b9b] mb-[16px]'
					>
						Last Name <span className='text-red-600'>*</span>
					</label>
					<input
						type='text'
						className='p-4 border border-[#747474] text-[#747474] font-[600] text-[16px] leading-5 bg-transparent w-[100%] rounded-lg'
						placeholder='Doe'
						id='last-name'
						name='lastName'
						onChange={handleChange}
						value={profile.lastName}
						required
					/>
				</div>
				<DateInput profile={profile} handleChange={handleChange} />
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
						placeholder='08178627581'
						id='phone'
						name='phoneNumber'
						onChange={handleChange}
						value={profile.phoneNumber}
						required
					/>
				</div>
				<div className='flex flex-col  mb-[24px]'>
					<label
						htmlFor='bio'
						className='font-source font-[600] text-[24px] leading-[30px] text-[#9b9b9b] mb-[16px]'
					>
						About Me <span className='text-red-600'>*</span>
					</label>
					<textarea
						type='text'
						className='p-4 border border-[#747474] text-[#747474] font-[600] text-[16px] leading-5 bg-transparent rounded-lg h-[200px]'
						placeholder='Tell us a bit about yourself, the things that interest you and what you hope to gain from thi course'
						id='bio'
						name='bio'
						onChange={handleChange}
						value={profile.bio}
					></textarea>
				</div>
				<p className='text-white mt-[30px] font-dmsans font-[700] text-[14px] leading-[17px]  mb-[24px] md:w-[599px]'>
					Please note that post you make in your discussion groups
					would display your name, image and student ID. To read full
					extent, check out our{' '}
					<Link href='#' className='text-[#0A66C2]'>
						Terms and conditions
					</Link>
				</p>
				{isErrorUpdate && (
					<motion.p
						whileInView={{
							opacity: [0, 1],
							y: [20, 0],
						}}
						transition={{
							duration: 1,
							type: 'easeInOut',
						}}
						viewport={{ once: true }}
						className='mb-2 text-red-500'
					>
						{errorUpdate?.response?.data?.message}
					</motion.p>
				)}
				<button
					disabled={isLoadingUpdate}
					type='submit'
					className='flex items-center justify-center text-white py-[8px] w-[200px] rounded-lg bg-primaryPurple font-dmsans font-[500] text-[24px] hover:bg-primaryYellow'
				>
					{isLoadingUpdate ? (
						<span>
							<ButtonLoader />
						</span>
					) : (
						<span>Save Changes</span>
					)}
				</button>
			</form>
		</div>
	);
};

export default ProfileDetails;
