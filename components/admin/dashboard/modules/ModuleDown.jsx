import Link from 'next/link';
import React, { useState } from 'react';
import Grades from './Grades';
import ModuleContent from './ModuleContent';
import Reading from './Reading';
import Task from './Task';

const ModuleDown = () => {
	const [content, setContent] = useState(true);
	const [reading, setReading] = useState(false);
	const [task, setTask] = useState(false);
	const [grade, setGrade] = useState(false);

	const handleTask = () => {
		setContent(false);
		setReading(false);
		setGrade(false);
		setTask(true);
	};
	const handleContent = () => {
		setContent(true);
		setReading(false);
		setGrade(false);
		setTask(false);
	};
	const handleGrade = () => {
		setContent(false);
		setReading(false);
		setGrade(true);
		setTask(false);
	};
	const handleReading = () => {
		setContent(false);
		setReading(true);
		setGrade(false);
		setTask(false);
	};
	return (
		<div className='px-[20px] md:px-0 md:pl-[45px]'>
			<section className='flex items-center'>
				<ul className='flex justify-between basis-[90%]'>
					<li>
						<button
							onClick={handleContent}
							className='font-space font-[400] text-[15px] leading-[26px]  text-white'
						>
							Module Contents
						</button>
					</li>
					<li>
						<button
							onClick={handleReading}
							className='font-space font-[400] text-[15px] leading-[26px]  text-[#6d7175]'
						>
							Additional Readings
						</button>
					</li>
					<li>
						<button
							onClick={handleTask}
							className='font-space font-[400] text-[15px] leading-[26px]  text-[#6d7175]'
						>
							Tasks
						</button>
					</li>
					<li>
						<button
							onClick={handleGrade}
							className='font-space font-[400] text-[15px] leading-[26px]  text-[#6d7175]'
						>
							Grades
						</button>
					</li>
				</ul>
			</section>
			{content && <ModuleContent />}
			{task && <Task />}
			{reading && <Reading />}
			{grade && <Grades />}
		</div>
	);
};

export default ModuleDown;
