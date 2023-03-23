import Link from 'next/link';
import React from 'react';

const ModuleDown = () => {
	return (
		<div className='md:pl-[45px]'>
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
		</div>
	);
};

export default ModuleDown;
