import React, { useEffect, useState } from 'react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import DashboardLayout from '../../../components/dashboard/DashboardLayout';
import DragAndDrop from 'components/dashboard/DragandDrop';
import axios from 'axios';

const Support = () => {
	// const handleFileUpload = (files) => {
	// 	// Handle the uploaded files
	// 	console.log(files);
	// };
	const handleFileUpload = async (files) => {
		try {
			const formData = new FormData();
			formData.append('file', files[0]);

			const response = await axios.post('/api/upload', formData, {
				headers: { 'Content-Type': 'multipart/form-data' },
			});

			console.log(response.data); // Success message from the server
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<>
			<DashboardLayout>
				<div className='w-full h-[90vh] flex items-center justify-center'>
					<div className='bg-white w-[90%] md:w-[900px] rounded-[4px] shadow px-[20px] md:px-[70px] py-[20px]'>
						<div className='flex flex-col  mb-[24px]'>
							<label
								htmlFor='subject'
								className='font-source font-[600] text-[24px] leading-[30px] text-[#9b9b9b] mb-[16px]'
							>
								Subject <span className='text-red-600'>*</span>
							</label>
							<select
								className='p-3 border border-[#747474] text-[#747474] font-[600] text-[16px] leading-5 bg-transparent rounded-lg'
								id='subject'
								name='subject'
								// onChange={handleChange}
								// value={state.phoneNumber}
								required
							>
								<option value=''>-- Select Option --</option>
							</select>
						</div>
						<div className='flex flex-col  mb-[24px]'>
							<label
								htmlFor='phone'
								className='font-source font-[600] text-[24px] leading-[30px] text-[#9b9b9b] mb-[16px]'
							>
								Tell us about your issue{' '}
							</label>
							<textarea
								type='text'
								className='p-4 border border-[#747474] text-[#747474] font-[600] text-[16px] leading-5 bg-transparent rounded-lg h-[200px]'
								placeholder='Description'
								id='phone'
								// onChange={handleChange}
								// value={state.about}
								required
							></textarea>
						</div>
						<div className='md:flex justify-between items-center'>
							<DragAndDrop onFileUpload={handleFileUpload} />
							<button
								type='submit'
								className=' py-[8px] px-[16px] rounded-lg border border-primaryPurple hover:bg-primaryPurple font-dmsans font-[500] text-[24px] text-primaryPurple hover:text-white'
							>
								Submit
							</button>
						</div>
					</div>
				</div>
			</DashboardLayout>
		</>
	);
};

export default Support;
