import React, { useState } from 'react';
import DashboardLayout from 'components/dashboard/DashboardLayout';
import { FcGoogle } from 'react-icons/fc';
const SecuritySettings = () => {
	const [state, setState] = useState({
		primaryEmail: '',
		altEmail: '',
		currentPassword: '',
		newPassword: '',
		confrimPassword: '',
	});
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
	return (
		<>
			<DashboardLayout>
				<div className='px-[20px]'>
					<p className='font-source font-[700] text-[28px] md:text-[32px] leading-[40.2px]  mb-[24px]'>
						Account Settings
					</p>
					<form>
						<div className='flex flex-col flex-1 mb-[24px]'>
							<label
								htmlFor='email'
								className='font-source font-[600] text-[24px] leading-[30px] text-[#9b9b9b] mb-[16px]'
							>
								Primary Email{' '}
								<span className='text-red-600'>*</span>
							</label>
							<input
								type='email'
								className='p-4 border border-[#747474] text-[#747474] font-[600] text-[16px] leading-5 bg-transparent rounded-lg'
								placeholder='John@mail.com'
								id='email'
								name='primaryEmail'
								onChange={handleChange}
								value={state.primaryEmail}
								required
							/>
						</div>
						<div className='flex flex-col flex-1 mb-[24px]'>
							<label
								htmlFor='altemail'
								className='font-source font-[600] text-[24px] leading-[30px] text-[#9b9b9b] mb-[16px]'
							>
								Alternative Email{' '}
								<span className='text-red-600'>*</span>
							</label>
							<input
								type='email'
								className='p-4 border border-[#747474] text-[#747474] font-[600] text-[16px] leading-5 bg-transparent rounded-lg'
								placeholder='email'
								id='altemail'
								name='altEmail'
								onChange={handleChange}
								value={state.altEmail}
								required
							/>
						</div>
						<div className='md:flex gap-x-[100px] justify-between  mb-[24px]'>
							<div className='flex flex-col flex-1 mb-[24px]'>
								<label
									htmlFor='password'
									className='font-source font-[600] text-[24px] leading-[30px] text-[#9b9b9b] mb-[16px]'
								>
									Current Password{' '}
									<span className='text-red-600'>*</span>
								</label>
								<input
									type='password'
									className='p-4 border border-[#747474] text-[#747474] font-[600] text-[16px] leading-5 bg-transparent rounded-lg'
									placeholder='John'
									id='password'
									name='currentPassword'
									onChange={handleChange}
									value={state.currentPassword}
									required
								/>
							</div>
							<div className='flex flex-col flex-1 mb-[24px]'>
								<label
									htmlFor='newPassword'
									className='font-source font-[600] text-[24px] leading-[30px] text-[#9b9b9b] mb-[16px]'
								>
									New Password{' '}
									<span className='text-red-600'>*</span>
								</label>
								<input
									type='password'
									className='p-4 border border-[#747474] text-[#747474] font-[600] text-[16px] leading-5 bg-transparent rounded-lg'
									placeholder='*****'
									id='newPassword'
									name='newPassword'
									onChange={handleChange}
									value={state.newPassword}
									required
								/>
							</div>
							<div className='flex flex-col flex-1 mb-[24px]'>
								<label
									htmlFor='confrimPassword'
									className='font-source font-[600] text-[24px] leading-[30px] text-[#9b9b9b] mb-[16px]'
								>
									Confirm Password{' '}
									<span className='text-red-600'>*</span>
								</label>
								<input
									type='password'
									className='p-4 border border-[#747474] text-[#747474] font-[600] text-[16px] leading-5 bg-transparent rounded-lg'
									placeholder='********'
									id='confrimPassword'
									name='confrimPassword'
									onChange={handleChange}
									value={state.confrimPassword}
									required
								/>
							</div>
						</div>
						<button
							type='submit'
							className=' py-[8px] px-[30px] rounded-lg border border-primaryPurple hover:bg-primaryPurple font-dmsans font-[500] text-[24px] text-primaryPurple'
						>
							Save
						</button>
					</form>
					<p className='mt-[30px] md:mt-[40px] font-source font-[700] text-[24px] leading-[30.2px]  mb-[24px]'>
						Linked Account
					</p>
					<div className='flex items-center space-x-[9px] text-[16px] '>
						<FcGoogle /> <span>Google</span>
					</div>
					<p className='mt-[18px] font-source font-[600] text-[20px] leading-[30.2px]  mb-[24px]'>
						Your Devcent account is linked to your google account
					</p>
					<button
						type='submit'
						className=' py-[8px] px-[30px] rounded-lg border border-primaryPurple hover:bg-primaryPurple font-dmsans font-[500] text-[24px] text-primaryPurple'
					>
						Unlink my Google Account
					</button>
					<p className='mt-[30px] md:mt-[40px] font-source font-[700] text-[24px] leading-[30.2px]  mb-[24px]'>
						Delete Account
					</p>
					<p className='mt-[18px] font-source font-[600] text-[20px] leading-[30.2px]  mb-[24px]'>
						Deleting your account means that you’ll loose all your
						course progress and every thing you’ve done so far.
						Please be sure you really want to delete your account.
					</p>
					<button
						type='submit'
						className=' py-[8px] px-[30px] rounded-lg border border-primaryPurple hover:bg-primaryPurple font-dmsans font-[500] text-[24px] text-primaryPurple'
					>
						Delete my Devcent Account
					</button>
				</div>
			</DashboardLayout>
		</>
	);
};

export default SecuritySettings;
