import React from 'react';
import Card from './CertificateCard';
const Index = () => {
	return (
		<div className='px-[20px] md:pl-[70px] md:w-[789px]'>
			<p className='font-space font-[700] text-[24px] leading-[30.2px]  mb-[5px]'>
				Certificate of Completion
			</p>

			<p className='mt-[25px] font-dmsans font-[400] text-[16px] leading-[26px] text-white'>
				A certificate of completion is awarded to all students who
				satisfactorily complete the UiUx course by taking all classes
				and completing all tasks and module tests.
			</p>
			<div className='mt-[40px]'>
				<div className='flex md:gap-x-[180px] border-b border-[#252424] pb-[2px]'>
					<p className='font-space font-[700] text-[16px] leading-[20px] text-white'>
						Course Name
					</p>
					<p className='font-space font-[700] text-[16px] leading-[20px] text-white'>
						Completion Date
					</p>
				</div>
				<Card
					name='UiUx Design'
					date='2nd March,2023'
					first
					type='certificate'
				/>
				<Card
					name='UiUx Design'
					date='2nd March,2023'
					type='certificate'
				/>
			</div>

			<div className='mt-[40px]'>
				<p className='font-space font-[700] text-[24px] leading-[30.2px]  mb-[5px]'>
					Letter of Merit
				</p>

				<p className='mt-[25px] font-dmsans font-[400] text-[16px] leading-[26px] text-white'>
					A letter of merit is a letter signed by the CEO of DevCent
					Fakile Oluwatosin that is awarded to every student that
					scores 80% and above in their final course assessment.
				</p>
				<div className='flex md:gap-x-[180px] border-b border-[#252424] pb-[2px] mt-[40px]'>
					<p className='font-space font-[700] text-[16px] leading-[20px] text-white'>
						Course Name
					</p>
					<p className='font-space font-[700] text-[16px] leading-[20px] text-white'>
						Completion Date
					</p>
				</div>
				<Card
					name='UiUx Design'
					date='2nd March,2023'
					first
					type='letter'
				/>
				<Card name='UiUx Design' date='2nd March,2023' type='letter' />
			</div>
		</div>
	);
};

export default Index;
