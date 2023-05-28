import React from 'react';

const Footer = () => {
	return (
		<div>
			<div
				className='h-[10px] w-screen'
				style={{
					background:
						'linear-gradient(rgba(228, 0, 132, 0.33) 0%, rgba(255, 186, 14, 0.71) 100%',
				}}
			></div>
			<div className="relative bg-[url('/images/footerbg.png')] min-h-auto md:h-[100vh] bg-cover bg-center overflow-hidden">
				{/* <div className="absolute top-[1px] left-0 right-0 bottom-0 min-h-[100vh] z-[1]" /> */}

				<div className='md:flex px-[15px] md:pl-[79px] pt-[20px] md:pt-[100px] justify-between   text-white'>
					<div className='flex flex-col justify-center items-center w-full md:w-[440px]'>
						<img
							src='/images/logo.png'
							alt='devcent logo'
							className=''
						/>
						<p className='font-[400] font-dmsans text-[20px] mt-[24px] text-center'>
							We are dedicated IT Training Establishment . We have
							excelled in IT Training/Education, IT Consultancy
							and IT Solutions Development.
						</p>
					</div>
					<div className='md:w-[101px] mb-[20px] md:mb-0'>
						<h3 className='font-[700] font-space text-[22px] leading-[22px] text-center'>
							Company
						</h3>
						<ul>
							<li className='mt-[18px] hover:cursor-pointer text-[20px] font-dmsans font-[400] leading-[22px]'>
								Home
							</li>
							<li className='mt-[18px] hover:cursor-pointer text-[20px] font-dmsans font-[400] leading-[22px]'>
								Resources
							</li>
							<li className='mt-[18px] hover:cursor-pointer text-[20px] font-dmsans font-[400] leading-[22px]'>
								About
							</li>
							<li className='mt-[18px] hover:cursor-pointer text-[20px] font-dmsans font-[400] leading-[22px]'>
								Community
							</li>
							<li className='mt-[18px] hover:cursor-pointer text-[20px] font-dmsans font-[400] leading-[22px]'>
								Career
							</li>
						</ul>
					</div>
					<div className='w-[127px]'>
						<h3 className='font-[700] font-space text-[22px] leading-[22px] text-center'>
							Information
						</h3>
						<ul>
							<li className='mt-[18px] hover:cursor-pointer text-[20px] font-dmsans font-[400] leading-[22px]'>
								Career
							</li>
							<li className='mt-[18px] hover:cursor-pointer text-[20px] font-dmsans font-[400] leading-[22px]'>
								Accessibility
							</li>
							<li className='mt-[18px] hover:cursor-pointer text-[20px] font-dmsans font-[400] leading-[22px]'>
								Privacy Policy
							</li>
							<li className='mt-[18px] hover:cursor-pointer text-[20px] font-dmsans font-[400] leading-[22px]'>
								Sitemap
							</li>
							<li className='mt-[18px] hover:cursor-pointer text-[20px] font-dmsans font-[400] leading-[22px]'>
								Support
							</li>
						</ul>
					</div>
					<div className='mt-[30px] md:mt-0 md:w-[354px]'>
						<h3 className='font-[700] font-space text-[22px] leading-[22px] mb-[29px]'>
							Get in Touch
						</h3>
						<div className='flex items-center gap-x-[15px] md:gap-x-[30px] mb-[29px]'>
							<img src='/images/icons/location.png' alt='' />
							<p className='font-dmsans font-[400] text-[20px] leading-[22px] text-center'>
								18, 3rd floor, kay plaza, Lalubu <br /> Street,
								Oke Ilewo Abeokuta
							</p>
						</div>
						<div className='flex items-center gap-x-[15px] md:gap-x-[30px] mb-[29px]'>
							<img src='/images/icons/mail.png' alt='' />
							<div className=''>
								<p className='font-dmsans font-[400] text-[20px] leading-[22px] mb-[16px]'>
									info@devcent.net
								</p>
								<p className='font-dmsans font-[400] text-[20px] leading-[22px]'>
									devcentng@gmail.com
								</p>
							</div>
						</div>
						<div className='flex items-center gap-x-[15px] md:gap-x-[30px] mb-[29px]'>
							<img src='/images/icons/phone.png' alt='' />
							<div className=''>
								<p className='font-dmsans font-[400] text-[20px] leading-[22px] mb-[16px]'>
									1+234 8039-55-4311
								</p>
								<p className='font-dmsans font-[400] text-[20px] leading-[22px]'>
									+234 9041-47-7101
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='mt-[70px] md:ml-[170px] flex justify-center md:justify-start gap-x-[20px]'>
					<img src='/images/icons/facebook.png' alt='facebook' />
					<img src='/images/icons/instagram.png' alt='instagram' />
					<img src='/images/icons/twitter.png' alt='twitters' />
				</div>
				<p className='mt-[20px] md:mt-[6px]font-space font-[700] text-[18px] leading-[33px] md:leading-[22px] text-center text-white'>
					Copyright © 2022 [Devcent Trainings] | Powered by [Tinacle]
				</p>
			</div>
		</div>
	);
};

export default Footer;
