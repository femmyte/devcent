import React from 'react';
import { FiPlayCircle, FiVideo, FiVideoOff } from 'react-icons/fi';

const ModuleTop = () => {
	return (
		<>
			<div className='md:pl-[45px]'>
				<h1 className='font-[700] text-white text-[20px] md:text-[24px] leading-[30.24px] '>
					Modules
				</h1>
				<p className='font-plus font-[500] text-[16px] text-[#71717a] leading-[20.16px] mb-[20px] md:mb-[32px] mt-[8px]'>
					You’re using your time wisely by learning{' '}
				</p>
				<div className='md:flex items-center gap-x-[32px] mt-[25px] md:mt-[46px] mb-[15px] md:mb-[26px]'>
					<h1 className='font-[500] font-space text-[#bbb5b5] text-[20px] md:text-[24px] leading-[30.62px] '>
						MODULE 1
					</h1>
					<h1 className='font-[700] font-space text-white text-[22px] md:text-[32px] leading-[40.24px] '>
						Introduction to UIUX
					</h1>
				</div>
				<div className='md:flex items-center gap-x-[80px] '>
					<div className='md:flex items-center gap-x-[26px] text-white'>
						<FiPlayCircle />
						<p className='text-[18px] font-space font-[700]'>
							20mins
							<span className='text-[#bbb5b5] font-[400]'>
								{' '}
								of video left
							</span>
						</p>
					</div>
					<div className='md:flex items-center gap-x-[26px] text-white'>
						<FiPlayCircle />
						<p className='text-[18px] font-space font-[700]'>
							1hour
							<span className='text-[#bbb5b5] font-[400]'>
								{' '}
								of reading left
							</span>
						</p>
					</div>
					<div className='md:flex items-center gap-x-[26px] text-white'>
						<FiPlayCircle />
						<p className='text-[18px] font-space font-[700]'>
							2 ungraded
							<span className='text-[#bbb5b5] font-[400]'>
								{' '}
								assignments left
							</span>
						</p>
					</div>
				</div>
			</div>
			<div className='w-full h-[2px] bg-[#6d7175] my-[30px] md:my-[37px]'></div>
		</>
	);
};

export default ModuleTop;
