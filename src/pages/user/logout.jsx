import React, { useEffect, useState } from 'react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import DashboardLayout from '../../../components/dashboard/DashboardLayout';

const Logout = () => {
	const router = useRouter();
	const handleLogout = async () => {
		const data = await signOut({ redirect: false, callbackUrl: '/' });
		router.push(data.url);
	};
	return (
		<>
			<DashboardLayout>
				<div className='px-[20px]'>
					<p className='font-space font-[700] text-[24px] leading-[30.2px]  mb-[40px] text-white'>
						Logout Account
					</p>

					<p className='mt-[25px] font-dmsans font-[600] text-[20px] leading-[20.2px] text-white'>
						Are you sure you want to logout your account?
					</p>
					<div className='flex flex-col md:flex-row gap-y-[20px] gap-x-[60px] mt-[50px]'>
						<button
							type='submit'
							className=' py-[8px] px-[16px] rounded-lg bg-primaryPurple font-dmsans font-[500] text-[24px] text-white hover:bg-primaryYellow'
						>
							Don't logout
						</button>
						<button
							type='submit'
							className=' py-[8px] px-[16px] rounded-lg border border-primaryPurple hover:bg-primaryPurple font-dmsans font-[500] text-[24px] text-primaryPurple hover:text-white'
							onClick={handleLogout}
						>
							Logout my account
						</button>
					</div>
				</div>
			</DashboardLayout>
		</>
	);
};

export default Logout;
