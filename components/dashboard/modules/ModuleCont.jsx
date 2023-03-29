import React, { useState } from 'react';
import { courselist } from 'courselist';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
const ModuleCont = ({
	title,
	description,
	objectiveTitle,
	objective,
	otheInfo,
	active,
	children,
}) => {
	const [show, setShow] = useState(false);
	const [showAll, setShowAll] = useState(false);
	let obj = [];
	for (let i = 0; i < objective.length; i++) {
		obj.push(objective[i]);
	}
	return (
		<section className='mt-[32px]'>
			<div key={title} className='text-white md:w-[791px]'>
				<div
					className='flex items-center gap-x-3 mb-[16px] font-[700] font-space text-[20px]'
					onClick={() => setShowAll(!showAll)}
				>
					<p className=' '>{title}</p>
					{showAll ? <IoIosArrowUp /> : <IoIosArrowDown />}
				</div>
				<div className={`${showAll || active ? 'block' : 'hidden'}`}>
					{description && (
						<p className='mb-[11px] font-[400] text-[16px] leading-[26px] font-space'>
							{description}
						</p>
					)}
					{!show && active && (
						<div
							className='flex text-[#3776d4] text-[16px] font-space font-[700] items-center gap-x-3'
							onClick={() => setShow(!show)}
						>
							{' '}
							<p className=''> Show more</p>
							<IoIosArrowDown />
						</div>
					)}
					{show && objectiveTitle && (
						<p className='my-[35px] font-[400] text-[16px] leading-[26px] font-space'>
							{objectiveTitle}
						</p>
					)}
					{show && objectiveTitle && (
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
					<div className=''>{children}</div>
					<div
						className='flex text-[#3776d4] text-[16px] font-space font-[700] items-center gap-x-3'
						onClick={() => setShow(!show)}
					>
						<p className=''>{show && 'Show Less'}</p>
						{show && <IoIosArrowUp />}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ModuleCont;
