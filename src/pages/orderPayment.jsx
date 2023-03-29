import Nav from 'components/Nav';
import React, { useState } from 'react';
import FlutterPayment from '../../components/FlutterPayment';
import ReactCountryFlag from 'react-country-flag';

const OrderPayment = () => {
	return (
		<div className='bg-black min-h-screen '>
			<Nav />
			<div className='pt-[35px] px-[20px] md:px-[60px] text-white pb-[20px] md:pb-[60px]'>
				<p className='font-source font-[700] text-[30px] md:text-[40px] leading-[50.2px] '>
					Order Payment
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

				<div className=''>
					<div className='md:flex items-center gap-x-[32px]'>
						<div className=''>
							<p className='font-source font-[600] text-[16px] text-[#747474]'>
								Order Number
							</p>
							<p className='font-source font-[600] text-[24px] text-white'>
								12345
							</p>
						</div>
						<div className='w-[1px] h-[50px] hidden md:block bg-[#747474]'></div>
						<div className=''>
							<p className='font-source font-[600] text-[16px] text-[#747474]'>
								Date
							</p>
							<p className='font-source font-[600] text-[24px] text-white'>
								22, Aug 2021
							</p>
						</div>
						<div className='w-[1px] h-[50px] hidden md:block bg-[#747474]'></div>
						<div className=''>
							<p className='font-source font-[600] text-[16px] text-[#747474]'>
								Amount
							</p>
							<p className='font-source font-[600] text-[24px] text-white'>
								N50,000
							</p>
						</div>
						<div className='w-[1px] h-[50px] hidden md:block bg-[#747474]'></div>
						<div className=''>
							<p className='font-source font-[600] text-[16px] text-[#747474]'>
								Payment Platform
							</p>
							<p className='font-source font-[600] text-[24px] text-white'>
								Flutterwave
							</p>
						</div>
					</div>
					<p className='mt-[30px] font-source font-[400] text-white text-[14px] md:w-[848px] mb-[20px] md:mb-[60px] '>
						Your order has successfully been placed, kindly click
						the Make Payment button to proceed to payment. You will
						be redirected to a secure page where you’d be asked to
						input your card details or any other detail needed for
						any payment option you choose. Please, do not close your
						browser or this page at any point in the process.
					</p>

					<div className='flex flex-col md:flex-row items-center gap-x-[80px]'>
						{/* <button className=' py-[10px] md:py-[16px] px-[20px] md:px-[32px] rounded-lg bg-primaryPurple text-[18px] md:text-[24px] font-dmsans font-[700]'>
							Make Payment
						</button> */}
						<FlutterPayment />
						<button className='mt-[20px] md:mt-0 py-[10px] md:py-[16px] px-[20px] md:px-[32px] rounded-lg border border-primaryPurple text-[18px] md:text-[24px] font-dmsans font-[700]'>
							Cancel Order
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OrderPayment;
