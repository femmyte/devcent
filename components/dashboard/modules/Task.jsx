import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const Task = () => {
	return (
		<section className='mt-[32px] text-white' id='tasks'>
			<p className='font-[700] font-space text-[20px]'>
				Welcome to your task for this module! We trust that as you’re
				learning, you’d love to test your knowledge and get feedback.
				Here’s your chance.{' '}
			</p>
			<p className='my-[15px] font-[700] text-[16px] leading-[26px] font-space'>
				Instructions
			</p>
			<ul className=''>
				<li className='mb-[18px] font-[400] text-[16px] leading-[26px] font-space list-disc ml-[20px]'>
					Create a google document with the title “Task one-My
					understanding of UiUx”.
				</li>
				<li className='mb-[18px] font-[400] text-[16px] leading-[26px] font-space list-disc ml-[20px]'>
					Explain what you learnt in module one form your liv virtual
					classes, your readings and personal understanding.{' '}
				</li>
				<li className='mb-[18px] font-[400] text-[16px] leading-[26px] font-space list-disc ml-[20px]'>
					Feel free to express yourself as communication is a core
					skill you need as uiux designer.
				</li>
				<li className='mb-[18px] font-[400] text-[16px] leading-[26px] font-space list-disc ml-[20px]'>
					Click on proceed to continue to your assessment.
				</li>
			</ul>
			<p className='mt-[24px] font-[700] text-[16px] leading-[26px] font-space'>
				Submission
			</p>
			<ul className='mt-[15px]'>
				<li className='mb-[18px] font-[400] text-[16px] leading-[26px] font-space list-disc ml-[20px]'>
					To submit, copy the link to your google document and make it
					accessible to everyone in the link setting
				</li>
				<li className='mb-[18px] font-[400] text-[16px] leading-[26px] font-space list-disc ml-[20px]'>
					Share the link to your document with your instructor and
					await your feed back.
				</li>
			</ul>{' '}
			<div className='flex text-[#3776d4] text-[16px] font-space font-[700] items-center gap-x-3'>
				{' '}
				<p className=''> Take test now</p>
				<IoIosArrowForward />
			</div>
		</section>
	);
};

export default Task;
