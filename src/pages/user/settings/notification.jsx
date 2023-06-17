import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../../../components/dashboard/DashboardLayout';
import { MdGridOn, MdToggleOff, MdToggleOn } from 'react-icons/md';
import { IoToggle } from 'react-icons/io5';
const NotificatioCard = ({ title, description, state }) => {
	return (
		<div className='flex items-center justify-between pr-[40px] border-b border-[#252424] pb-[19px]'>
			<div className=''>
				<p className='mt-[30px] font-space font-[600] text-[20px] leading-[25.2px] text-white'>
					{title}
				</p>
				<p className='mt-[16px] font-dmsans font-[400] text-[16px] leading-[20.2px] text-[#9b9b9b]'>
					{description}
				</p>
			</div>
			{state ? (
				<MdToggleOn className='text-primaryPurple w-[80px] h-[42px]' />
			) : (
				<MdToggleOff className='text-primaryPurple w-[80px] h-[42px]' />
			)}
		</div>
	);
};
const NotificationSettings = () => {
	return (
		<>
			<DashboardLayout>
				<div className='px-[20px]'>
					<p className='font-source font-[700] text-[24px] leading-[30.2px]  mb-[40px]'>
						Notifications Settings
					</p>
					<NotificatioCard
						title='Enable Desktop Notifications'
						description='Get notified on your desktop or PC when you get a new message or your instructor drops a new task'
						state={true}
					/>
					<NotificatioCard
						title='Enable Unread Message Badge '
						description='Get a message count of your unread messages while you’re away'
						state={false}
					/>
					<NotificatioCard
						title='Enable Browser Tab Flashing '
						description='Your web tab flashes when you get a new notification'
						state={true}
					/>
					<div className=''>
						<p className='mt-[31px] mb-[20px] font-dmsans font-[600] text-[20px] leading-[20.2px] text-white'>
							Website Notifications
						</p>
						<div className='flex items-center gap-x-[24px]'>
							<input
								type='checkbox'
								id='newTask'
								checked
								className='accent-primaryPurple bg-primaryPurple border border-primaryPurple h-[24px] w-[24px] hover:accent-primaryPurple'
							/>
							<label htmlFor='newTask'>New Task Update</label>
						</div>
						<div className='flex items-center gap-x-[24px] my-[27px]'>
							<input
								type='checkbox'
								id='gradedTask'
								checked
								className='accent-primaryPurple bg-primaryPurple border border-primaryPurple h-[24px] w-[24px] hover:accent-primaryPurple'
							/>
							<label htmlFor='gradedTask'>Graded Task</label>
						</div>
						<div className='flex items-center gap-x-[24px] mb-[27px]'>
							<input
								type='checkbox'
								id='message'
								className='accent-primaryPurple bg-primaryPurple border border-primaryPurple h-[24px] w-[24px] hover:accent-primaryPurple'
							/>
							<label htmlFor='message'>New Messages</label>
						</div>
						<div className='flex items-center gap-x-[24px]'>
							<input
								type='checkbox'
								id='submit'
								checked
								className='accent-primaryPurple bg-primaryPurple border border-primaryPurple h-[24px] w-[24px] hover:accent-primaryPurple'
							/>
							<label htmlFor='submit'>
								Submission Deadline Closure
							</label>
						</div>
					</div>
				</div>
			</DashboardLayout>
		</>
	);
};

export default NotificationSettings;
