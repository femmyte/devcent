import React from 'react';
import { MdOutlineDescription } from 'react-icons/md';
import { CiCalendarDate } from 'react-icons/ci';
import { GiCircle } from 'react-icons/gi';
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5';

const Grades = () => {
	return (
		<section className='mt-[32px] text-white pr-[20px]' id='tasks'>
			<p className='font-[700] font-space text-[20px] my-[30px]'>
				Keep track of all your grades across tasks and test here
			</p>
			<table className='min-w-full text-left text-sm font-light'>
				<thead className='border-b border-[#6d7175] bg-transparent font-medium dark:border-neutral-500 dark:bg-neutral-600'>
					<tr className='font-space font-[500] text-[16px] leading-[24px] '>
						<th scope='col' class='py-2 px-6 '>
							<MdOutlineDescription className='inline-block mr-[19px]' />
							<span>Assessment Type</span>
						</th>
						<th scope='col' class='py-2 px-6'>
							<CiCalendarDate className='inline-block mr-[19px]' />
							<span>Due Date</span>
						</th>
						<th scope='col' class='py-2 px-6'>
							<GiCircle className='inline-block mr-[19px]' />
							<span>Status</span>
						</th>
						<th scope='col' class='py-2 px-6'>
							<IoCheckmarkDoneCircleOutline className='inline-block mr-[19px]' />
							<span>Status</span>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr className='border-b border-[#6d7175] bg-transparent dark:border-neutral-500 dark:bg-neutral-700'>
						<td className='whitespace-nowrap px-6 py-4 font-medium'>
							<ul>
								<li>Module 1 - Introduction to UIUX</li>
								<li className='mt-[8px]'>Module Task 1</li>
							</ul>
						</td>
						<td class='whitespace-nowrap px-6 py-4'>
							<ul>
								<li>Jan 23,2023</li>
								{/* <li className='mt-[8px]'></li> */}
							</ul>
						</td>
						<td class='whitespace-nowrap px-6 py-4'>
							<ul>
								<li className='text-[#27ae60]'>Completed</li>
								{/* <li className='mt-[8px]'></li> */}
							</ul>
						</td>
						<td class='whitespace-nowrap px-6 py-4'>
							<ul>
								<li>90 of 100</li>
								{/* <li className='mt-[8px]'></li> */}
							</ul>
						</td>
					</tr>
					<tr className='border-b border-[#6d7175] bg-transparent dark:border-neutral-500 dark:bg-neutral-700'>
						<td className='whitespace-nowrap px-6 py-4 font-medium'>
							<ul>
								<li>Module 1 - Introduction to UIUX</li>
								<li className='mt-[8px]'>Module Task 2</li>
							</ul>
						</td>
						<td class='whitespace-nowrap px-6 py-4'>
							<ul>
								<li>Jan 23,2023</li>
								{/* <li className='mt-[8px]'></li> */}
							</ul>
						</td>
						<td class='whitespace-nowrap px-6 py-4'>
							<ul>
								<li className='text-primaryYellow'>
									In progress{' '}
								</li>
								{/* <li className='mt-[8px]'></li> */}
							</ul>
						</td>
						<td class='whitespace-nowrap px-6 py-4'>
							<ul>
								<li>90 of 100</li>
								{/* <li className='mt-[8px]'></li> */}
							</ul>
						</td>
					</tr>
					<tr className='border-b border-[#6d7175] bg-transparent dark:border-neutral-500 dark:bg-neutral-700'>
						<td className='whitespace-nowrap px-6 py-4 font-medium'>
							<ul>
								<li>Module 1 - Introduction to UIUX</li>
								<li className='mt-[8px]'>
									Module Knowledge Test
								</li>
							</ul>
						</td>
						<td class='whitespace-nowrap px-6 py-4'>
							<ul>
								<li>Jan 23,2023</li>
								{/* <li className='mt-[8px]'></li> */}
							</ul>
						</td>
						<td class='whitespace-nowrap px-6 py-4'>
							<ul>
								<li className='text-[#eb5757]'>Not Started</li>
								{/* <li className='mt-[8px]'></li> */}
							</ul>
						</td>
						<td class='whitespace-nowrap px-6 py-4'>
							<ul>
								<li>90 of 100</li>
								{/* <li className='mt-[8px]'></li> */}
							</ul>
						</td>
					</tr>
				</tbody>
			</table>
		</section>
	);
};

export default Grades;
