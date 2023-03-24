import { courselist } from 'courselist';
import Link from 'next/link';
import React from 'react';

const ModuleDown = () => {
	return (
		<div className='px-[20px] md:px-0 md:pl-[45px]'>
			<section className='flex items-center'>
				<ul className='flex justify-between basis-[90%]'>
					<li>
						<Link
							href='#overview'
							className='font-space font-[400] text-[15px] leading-[26px]  text-white'
						>
							Module Contents
						</Link>
					</li>
					<li>
						<Link
							href='#curriculum'
							className='font-space font-[400] text-[15px] leading-[26px]  text-[#6d7175]'
						>
							Additional Readings
						</Link>
					</li>
					<li>
						<Link
							href='#schedule'
							className='font-space font-[400] text-[15px] leading-[26px]  text-[#6d7175]'
						>
							Tasks
						</Link>
					</li>
					<li>
						<Link
							href='#portfolio'
							className='font-space font-[400] text-[15px] leading-[26px]  text-[#6d7175]'
						>
							Grades
						</Link>
					</li>
				</ul>
			</section>
			<section className='mt-[32px]'>
				{courselist.map((course) => {
					const {
						title,
						description,
						objectiveTitle,
						objective,
						otheInfo,
					} = course;
					let obj = [];
					for (let i = 0; i < objective.length; i++) {
						obj.push(objective[i]);
					}
					console.log(obj);
					return (
						<div key={title} className='text-white md:w-[791px]'>
							<p className='mb-[16px] font-[700] font-space text-[20px] '>
								{title}
							</p>
							{description && (
								<p className='mb-[11px] font-[400] text-[16px] leading-[26px] font-space'>
									{description}
								</p>
							)}
							{objectiveTitle && (
								<p className='my-[35px] font-[400] text-[16px] leading-[26px] font-space'>
									{objectiveTitle}
								</p>
							)}
							{objectiveTitle && (
								<ul className=''>
									{obj.map((newOBj) => (
										<li
											key={title}
											className='mb-[18px] font-[400] text-[16px] leading-[26px] font-space list-disc ml-[20px]'
										>
											{newOBj}
										</li>
									))}
								</ul>
							)}
						</div>
					);
				})}
			</section>
		</div>
	);
};

export default ModuleDown;
