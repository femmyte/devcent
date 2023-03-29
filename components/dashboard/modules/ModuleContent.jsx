import Link from 'next/link';
import React, { useState } from 'react';
import { FiPlayCircle } from 'react-icons/fi';
('react-icons/io');
import ModuleCont from './ModuleCont';
('react-icons/ai');

const ModuleContent = () => {
	return (
		<div id='content'>
			<ModuleCont
				title='Course Introduction'
				description='Welcome to this complete course session on UI/UX Design. This course would equip you with the necessary knowledge of what you need to know about UI and UX Design.'
				objectiveTitle='By the end of this course, you will be able to:'
				objective={[
					'Explore the various career pathways and job opportunities within the field of UI/UX design',
					'Understand the foundational concepts and principles governing UI/UX design',
					'Have an in-depth understanding of the UX design process, information architectures and conduct usability studies',
					'Explore user research methods, create effective user personas and journey maps',
					'Create wireframes and prototypes using popular design tools',
					'Participate in a hands-on project building a mobile web app',
				]}
				otheInfo='You’d be taught via live virtual classes and be required to complete dome tasks after each module pr lesson or as your instructor sees fit. Please note that you’d not be able to unlock the next course materials if you don’t complete the tasks from the previous module. We wish you all the best as you start this journey.'
				active
			/>
			<ModuleCont
				title='What is UiUx design'
				description=''
				objectiveTitle=''
				objective={[]}
				otheInfo=''
			>
				<div className=''>
					<div className='flex items-center gap-x-5 my-[19px]'>
						<FiPlayCircle />
						<p className='font-[400] text-[16px] leading-[16px] font-space'>
							Relevance of UIUx to customer’s satisfaction and
							company’s success
						</p>
					</div>
					<div className='flex gap-x-[8px] items-center'>
						<p className='font-[400] font-space text-[14px] text-[#bbb5b5]'>
							Video
						</p>
						<div className='w-[5px] h-[5px] rounded-full bg-[#bbb5b5]'></div>
						<p className='font-[400] font-space text-[14px] text-[#bbb5b5]'>
							5 minutes
						</p>
					</div>
				</div>
				<div className=''>
					<div className='flex items-center gap-x-5 my-[19px]'>
						<FiPlayCircle />
						<p className='font-[400] text-[16px] leading-[16px] font-space'>
							Relevance of UIUx to customer’s satisfaction and
							company’s success
						</p>
					</div>
					<div className='flex gap-x-[8px] items-center'>
						<p className='font-[400] font-space text-[14px] text-[#bbb5b5]'>
							Video
						</p>
						<div className='w-[5px] h-[5px] rounded-full bg-[#bbb5b5]'></div>
						<p className='font-[400] font-space text-[14px] text-[#bbb5b5]'>
							5 minutes
						</p>
					</div>
				</div>
			</ModuleCont>
			<ModuleCont
				title='Ui vs Ux design'
				description=''
				objectiveTitle=''
				objective={[]}
				otheInfo=''
			/>
			<ModuleCont
				title='Job opportunities in UiUx design'
				description=''
				objectiveTitle=''
				objective={[]}
				otheInfo=''
			/>
			<ModuleCont
				title='Identifying good and bad designs'
				description=''
				objectiveTitle=''
				objective={[]}
				otheInfo=''
			>
				<Link href='/auth/modules/moduleTest'>Task</Link>
			</ModuleCont>
		</div>
		// <section className='mt-[32px]'>
		// 	{courselist.map((course) => {
		// 		const {
		// 			title,
		// 			description,
		// 			objectiveTitle,
		// 			objective,
		// 			otheInfo,
		// 		} = course;
		// 		let obj = [];
		// 		for (let i = 0; i < objective.length; i++) {
		// 			obj.push(objective[i]);
		// 		}
		// 		return (
		// 			<div key={title} className='text-white md:w-[791px]'>
		// 				<div className='flex items-center gap-x-3 mb-[16px] '>
		// 					<p className='font-[700] font-space text-[20px] '>
		// 						{title}
		// 					</p>
		// 					<IoIosArrowDown />
		// 				</div>
		// 				{description && (
		// 					<p className='mb-[11px] font-[400] text-[16px] leading-[26px] font-space'>
		// 						{description}
		// 					</p>
		// 				)}
		// 				{!show && (
		// 					<div
		// 						className='flex text-[#3776d4] text-[16px] font-space font-[700] items-center gap-x-3 mb-[30px]'
		// 						onClick={() => setShow(!show)}
		// 					>
		// 						{' '}
		// 						<p className=''> Show more</p>
		// 						<IoIosArrowDown />
		// 					</div>
		// 				)}
		// 				{show && objectiveTitle && (
		// 					<p className='my-[35px] font-[400] text-[16px] leading-[26px] font-space'>
		// 						{objectiveTitle}
		// 					</p>
		// 				)}
		// 				{show && objectiveTitle && (
		// 					<ul className=''>
		// 						{obj.map((newOBj) => (
		// 							<li
		// 								key={title}
		// 								className='mb-[18px] font-[400] text-[16px] leading-[26px] font-space list-disc ml-[20px]'
		// 							>
		// 								{newOBj}
		// 							</li>
		// 						))}
		// 					</ul>
		// 				)}
		// 				<div
		// 					className='flex text-[#3776d4] text-[16px] font-space font-[700] items-center gap-x-3'
		// 					onClick={() => setShow(!show)}
		// 				>
		// 					<p className=''>{show && 'Show Less'}</p>
		// 					{show && <IoIosArrowUp />}
		// 				</div>
		// 			</div>
		// 		);
		// 	})}
		// </section>
	);
};

export default ModuleContent;
