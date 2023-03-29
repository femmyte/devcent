import Nav from 'components/Nav';
import Link from 'next/link';
import React, { useState } from 'react';
import ReactCountryFlag from 'react-country-flag';
import FlutterPayment from '../../components/FlutterPayment';
const Payment = () => {
	return (
		<div className='bg-black min-h-screen '>
			<Nav />
			<div className='py-[35px] px-[20px] md:px-[60px] text-white'>
				<p className='font-source font-[700] text-[30px] md:text-[40px] leading-[50.2px] '>
					Checkout
				</p>
				<div className='md:flex gap-x-2'>
					<form className='flex-1'>
						<p className='mt-[20px] md:mt-[66px] font-source font-[700] text-[28px] md:text-[32px] leading-[40.2px]'>
							Payment Plan
						</p>
						<p className='my-[18px] md:my-[24px] font-source font-[700] text-[24px] leading-[30.2px] text-[#9b9b9b]'>
							Select a payment plan
						</p>
						<div className='mb-[20px]'>
							<input
								className='bg-transparent'
								type='checkbox'
								name='stayLogin'
								id='outright'
							/>
							<label
								htmlFor='outright'
								className='font-[600] font-source text-[16px] leading-[20px] text-white ml-[12px]  '
							>
								Outright Payment (100%)
							</label>
						</div>
						<div className='mb-[20px]'>
							<input
								className='bg-transparent'
								type='checkbox'
								name='stayLogin'
								id='part2'
							/>
							<label
								htmlFor='part2'
								className='font-[600] font-source text-[16px] leading-[20px] text-white ml-[12px]  '
							>
								Part Payment (75%)
							</label>
						</div>
						<div className='mb-[20px]'>
							<input
								className='bg-transparent'
								type='checkbox'
								name='stayLogin'
								id='part1'
							/>
							<label
								htmlFor='part1'
								className='font-[600] font-source text-[16px] leading-[20px] text-white ml-[12px]  '
							>
								Part Payment (50%)
							</label>
						</div>
						<p className='mt-[30px] md:mt-[66px] font-source font-[700] text-[28px] md:text-[32px] leading-[40.2px]  mb-[24px]'>
							Personal Details
						</p>
						<div className='md:flex gap-x-8 justify-between  mb-[24px]'>
							<div className='flex flex-col flex-1 mb-[24px] md:mb-0'>
								<label
									htmlFor='fname'
									className='font-source font-[600] text-[24px] leading-[30px] text-[#9b9b9b] mb-[16px]'
								>
									First Name
								</label>
								<input
									type='text'
									className='p-4 border border-[#747474] text-[#747474] font-[600] text-[16px] leading-5 bg-transparent rounded-lg'
									placeholder='John'
									id='fname'
								/>
							</div>
							<div className='flex flex-col flex-1'>
								<label
									htmlFor='lname'
									className='font-source font-[600] text-[24px] leading-[30px] text-[#9b9b9b] mb-[16px]'
								>
									Last Name
								</label>
								<input
									type='text'
									className='p-4 border border-[#747474] text-[#747474] font-[600] text-[16px] leading-5 bg-transparent w-[100%] rounded-lg'
									placeholder='Doe'
									id='lname'
								/>
							</div>
						</div>
						{/* multiple */}
						<div className='flex flex-col  mb-[24px]'>
							<label
								htmlFor='email'
								className='font-source font-[600] text-[24px] leading-[30px] text-[#9b9b9b] mb-[16px]'
							>
								Email Address
							</label>
							<input
								type='email'
								className='p-4 border border-[#747474] text-[#747474] font-[600] text-[16px] leading-5 bg-transparent rounded-lg'
								placeholder='johndoe@mail.com'
								id='email'
							/>
						</div>
						<div className='flex flex-col  mb-[24px]'>
							<label
								htmlFor='country'
								className='font-source font-[600] text-[24px] leading-[30px] text-[#9b9b9b] mb-[16px]'
							>
								Country /Region
							</label>
							<input
								type='text'
								className='p-4 border border-[#747474] text-[#747474] font-[600] text-[16px] leading-5 bg-transparent rounded-lg'
								placeholder='Nigeria'
								id='country'
							/>
						</div>
						<div className='md:flex gap-x-8 justify-between  mb-[24px]'>
							<div className='flex flex-col flex-1 mb-[24px] md:mb-0'>
								<label
									htmlFor='street'
									className='font-source font-[600] text-[24px] leading-[30px] text-[#9b9b9b] mb-[16px]'
								>
									Street Name
								</label>
								<input
									type='text'
									className='p-4 border border-[#747474] text-[#747474] font-[600] text-[16px] leading-5 bg-transparent rounded-lg'
									placeholder='John'
									id='street'
								/>
							</div>
							<div className='flex flex-col flex-1'>
								<label
									htmlFor='houseNum'
									className='font-source font-[600] text-[24px] leading-[30px] text-[#9b9b9b] mb-[16px]'
								>
									House Number
								</label>
								<input
									type='text'
									className='p-4 border border-[#747474] text-[#747474] font-[600] text-[16px] leading-5 bg-transparent w-[100%] rounded-lg'
									placeholder='Doe'
									id='houseNum'
								/>
							</div>
						</div>
						{/* multiple */}
						<div className='md:flex gap-x-8 justify-between  mb-[24px]'>
							<div className='flex flex-col flex-1 mb-[24px] md:mb-0'>
								<label
									htmlFor='town'
									className='font-source font-[600] text-[24px] leading-[30px] text-[#9b9b9b] mb-[16px]'
								>
									Town/City
								</label>
								<input
									type='text'
									className='p-4 border border-[#747474] text-[#747474] font-[600] text-[16px] leading-5 bg-transparent rounded-lg'
									placeholder='John'
									id='town'
								/>
							</div>
							<div className='flex flex-col flex-1'>
								<label
									htmlFor='state'
									className='font-source font-[600] text-[24px] leading-[30px] text-[#9b9b9b] mb-[16px]'
								>
									County/State
								</label>
								<input
									type='text'
									className='p-4 border border-[#747474] text-[#747474] font-[600] text-[16px] leading-5 bg-transparent w-[100%] rounded-lg'
									placeholder='Doe'
									id='state'
								/>
							</div>
						</div>
						{/* multiple */}
						<div className='flex flex-col  mb-[24px]'>
							<label
								htmlFor='postal'
								className='font-source font-[600] text-[24px] leading-[30px] text-[#9b9b9b] mb-[16px]'
							>
								Postal code
							</label>
							<input
								type='number'
								className='p-4 border border-[#747474] text-[#747474] font-[600] text-[16px] leading-5 bg-transparent rounded-lg'
								min={6}
								max={6}
								placeholder='123456'
								id='postal'
							/>
						</div>
						<div className='flex flex-col  mb-[24px]'>
							<label
								htmlFor='phone'
								className='font-source font-[600] text-[24px] leading-[30px] text-[#9b9b9b] mb-[16px]'
							>
								Phone Number
							</label>
							<input
								type='tel'
								className='p-4 border border-[#747474] text-[#747474] font-[600] text-[16px] leading-5 bg-transparent rounded-lg'
								placeholder='8178627581'
								id='phone'
							/>
						</div>
						<p className='font-source font-[700] text-[28px] md:text-[32px] leading-[40.2px]  mb-[24px]'>
							Additional Information
						</p>
						<textarea
							name='info'
							id='info'
							rows='10'
							className='p-4 border border-[#747474] text-[#747474] font-[600] text-[16px] leading-5 bg-transparent rounded-lg w-full'
						></textarea>
					</form>
					<div className='flex-1'>
						<p className='mt-[30px] md:mt-[66px] font-source font-[700] text-[28px] md:text-[32px] leading-[40.2px]'>
							Your Order
						</p>
						<div className='dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white flex w-4/5 md:w-[240px]  px-4 items-center border border-[#747474] text-[14px] bg-transparent rounded-lg mt-[20px] md:mt-[100px] mb-[20px] md:mb-[50px]'>
							<ReactCountryFlag
								countryCode='NG'
								svg
								style={{
									width: '2em',
									height: '2em',
								}}
								title='US'
							/>
							<input
								type='text'
								className='p-4 bg-transparent focus:outline-none focus:ring-0 border-none outline-none w-[90%] text-[14px]'
								placeholder='Nigerian Naira (NGN)'
							/>
						</div>
						<div className='bg-[#1f1d1d] w-full pb-[13px] pt-[24px] px-[24px]'>
							<div className='flex justify-between'>
								<p className='font-source font-[600] text-[24px] leading-[30px] text-white mb-[16px]'>
									Product
								</p>
								<p className='font-source font-[600] text-[24px] leading-[30px] text-white mb-[16px]'>
									Amount
								</p>
							</div>
							<div className='flex justify-between'>
								<div className='flex justify-between w-[70%]'>
									<p className='font-source font-[600] text-[16px] text-white leading-[20px] mb-[28px]'>
										User Interface and User Experience
										Design
									</p>
									<span className='ml-[16px] text-left'>
										1X
									</span>
								</div>
								<p className='font-source font-[600] text-[16px] text-white leading-[20px] mb-[28px]'>
									N100,000
								</p>
							</div>
							<div className='flex justify-between '>
								<div className='flex justify-between w-[70%]'>
									<p className='font-source font-[600] text-[16px] text-white leading-[20px] mb-[28px]'>
										Part Payment
									</p>
									<span className='ml-[16px] text-left'>
										50%
									</span>
								</div>
								<p className='font-source font-[600] text-[16px] text-white leading-[20px] mb-[28px]'>
									N50,00
								</p>
							</div>
							<div className='flex justify-between'>
								<p className='font-source font-[600] text-[16px] text-white leading-[20px] mb-[28px]'>
									Sub Total
								</p>
								<p className='font-source font-[600] text-[16px] text-white leading-[20px] mb-[28px]'>
									N50,00
								</p>
							</div>
							<div className='flex justify-between'>
								<p className='font-source font-[600] text-[16px] text-white leading-[20px]'>
									Total
								</p>
								<p className='font-source font-[600] text-[16px] text-white leading-[20px] mb-[28px]'>
									N50,00
								</p>
							</div>
						</div>
						<div className='w-full md:w-2/3 flex flex-col justify-center items-center mx-auto'>
							<div className='flex items-center gap-x-[30px] my-[20px] md:my-[32px]'>
								<p className='font-source font-[600] text-[16px] leading-5'>
									Powered by Flutterwave
								</p>
								<div className='flex items-center gap-x-[3px]'>
									<img
										src='/images/icons/flutterwave.png'
										alt='flutterwave icon'
									/>{' '}
									<span className='text-[10px]'>
										Flutterwave
									</span>
								</div>
							</div>
							<div className='flex items-center justify-evenly'>
								<img src='/images/icons/visa.png' alt='card' />
								<img src='/images/icons/visa.png' alt='card' />
								<img src='/images/icons/visa.png' alt='card' />
								<img src='/images/icons/visa.png' alt='card' />
							</div>
							<p className='mt-[30px] font-source font-[400] text-white text-[14px] '>
								The information you provided will be used to
								improve your experience throughout the course
								and the general navigation of our website in
								accordance with our{' '}
								<span className='text-[#3776d4]'>
									privacy policy
								</span>
							</p>
							<div className='mb-[20px] md:mb-[60px] mt-[8px]'>
								<input
									type='checkbox'
									name='stayLogin'
									id='terms'
									className='bg-transparent'
								/>
								<label
									htmlFor='terms'
									className='font-[400] font-source text-[14px] leading-[17px] text-white ml-[12px]  '
								>
									I have read and agreed to Devcent’s{' '}
									<span className='text-[#3776d4]'>
										Terms and Conditions
									</span>
								</label>
							</div>
							<div className=' w-2/3 mx-auto'></div>
							{/* <FlutterPayment /> */}
							<Link
								href='/orderPayment'
								className=' py-[10px] md:py-[16px] px-[20px] md:px-[32px] rounded-lg bg-primaryPurple text-[16px] font-dmsans font-[700] md:text-[24px]'
							>
								Proceed to payment
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Payment;
