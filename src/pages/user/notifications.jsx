import React, { useEffect, useState } from 'react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import DashboardLayout from 'components/dashboard/common/layout/Dashboard';
import { IoIosArrowForward } from 'react-icons/io';
import {
	MdOutlineMarkEmailRead,
	MdOutlineMarkEmailUnread,
} from 'react-icons/md';
import withStudentAuth from 'components/auth/withStudentAuth';

const NotificatioCard = ({ title, details, info, read }) => {
	return (
		<div className='flex flex-col md:flex-row gap-y-[10px] items-center md:items-start justify-between border border-[#a0a0a0] rounded-[20px] px-[15px] py-[10px] mb-[20px]'>
			<div className='w-[56px] h-[56px] bg-opacity-[0.1] bg-primaryPurple rounded-full relative flex items-center justify-center'>
				{read ? (
					<MdOutlineMarkEmailRead className='text-white' />
				) : (
					<MdOutlineMarkEmailUnread className='text-white' />
				)}
			</div>
			<div className='flex justify-between basis-[80%] items-center'>
				<div className=''>
					<p
						className={`${
							read ? 'text-[#a0a0a0]' : 'text-white'
						} font-space font-[700] text-[16px] leading-[20.2px]  mb-[11px] text-white`}
					>
						{title}
					</p>

					<p className=' font-dmsans font-[400] text-[16px] leading-[26.2px] text-[#a0a0a0]'>
						{details}
					</p>
				</div>
				<IoIosArrowForward className='hidden md:block text-white' />
			</div>
			<p className=' font-dmsans font-[400] text-[16px] leading-[26.2px] text-[#a0a0a0]'>
				{info}
			</p>
		</div>
	);
};
const Notifications = () => {
	const router = useRouter();
	const handleLogout = async () => {
		const data = await signOut({ redirect: false, callbackUrl: '/' });
		router.push(data.url);
	};
	return (
		<>
			<DashboardLayout>
				<div className='px-[20px]'>
					<div className='flex  justify-between items-center'>
						<p className='font-space font-[700] text-[24px] leading-[30.2px] text-white'>
							Notification
						</p>
						<div className='flex flex-col md:flex-row gap-x-[20px] gap-y-[20px]'>
							<button
								type='submit'
								className=' py-[8px] px-[16px] rounded-lg bg-primaryPurple font-dmsans font-[500] text-[24px] text-white hover:bg-primaryYellow'
							>
								All
							</button>
							<button
								type='submit'
								className=' py-[8px] px-[16px] rounded-lg bg-white hover:bg-primaryPurple font-dmsans font-[500] text-[24px] text-black'
								onClick={handleLogout}
							>
								Unread (6)
							</button>
						</div>
					</div>
					<section className='mt-[40px] md:mt-[60px]'>
						<NotificatioCard
							title='Assignment Due in 2 days'
							details='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
							info='14.36'
						/>
						<NotificatioCard
							title='Class Begins in 3 hours'
							details='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
							info='14.36'
						/>
						<NotificatioCard
							title='Payment Due in 5 days'
							details='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
							info='14.36'
						/>
						<NotificatioCard
							read
							title='Assignment Due in 2 days'
							details='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
							info='14.36'
						/>
						<NotificatioCard
							title='Assignment Due in 2 days'
							details='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
							info='14.36'
						/>
					</section>
				</div>
			</DashboardLayout>
		</>
	);
};

export default withStudentAuth(Notifications);
