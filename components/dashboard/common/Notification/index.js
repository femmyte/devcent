import React from 'react';
import NotificationCard from './NotificationCard';

const index = () => {
	return (
		<div className='px-[20px]'>
			<p className='font-source font-[700] text-[24px] leading-[30.2px]  mb-[40px]'>
				Notifications Settings
			</p>
			<NotificationCard
				title='Enable Desktop Notifications'
				description='Get notified on your desktop or PC when you get a new message or your instructor drops a new task'
				state={true}
			/>
			<NotificationCard
				title='Enable Unread Message Badge '
				description='Get a message count of your unread messages while you’re away'
				state={false}
			/>
			<NotificationCard
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
					<label htmlFor='submit'>Submission Deadline Closure</label>
				</div>
			</div>
		</div>
	);
};

export default index;
