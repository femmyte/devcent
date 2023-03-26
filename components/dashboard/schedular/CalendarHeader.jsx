import { useStateContext } from 'AuthContext';
import dayjs from 'dayjs';
import React from 'react';
import { FaArrowLeft, FaArrowRight, FaCalendar } from 'react-icons/fa';

const CalendarHeader = () => {
	const { monthIndex, setMonthIndex } = useStateContext();

	const handlePrevMonth = () => {
		setMonthIndex((prevState) => prevState - 1);
	};
	const handleNextMonth = () => {
		setMonthIndex((prevState) => prevState + 1);
	};
	const handleReset = () => {
		setMonthIndex(
			monthIndex === dayjs().month()
				? monthIndex + Math.random()
				: dayjs().month()
		);
	};
	return (
		<header className=' py-2 md:flex items-center justify-between'>
			{/* <img src="/images/" alt="" /> */}
			{/* <FaCalendar className='mr-2 w-12 h-12' /> */}
			{/* <h1 className='mr-10 text-xl text-gray-500 font-bold'>Calendar</h1> */}
			<div className='flex'>
				<button
					className='border rounded py-2 
            px-4 mr-5'
					onClick={handleReset}
				>
					Today
				</button>
				<div
					className='flex border rounded py-2 
            px-4'
				>
					<button className='' onClick={handlePrevMonth}>
						Back
					</button>
					<div className='mx-[20px]'>|</div>
					<button className='' onClick={handleNextMonth}>
						Next
					</button>
				</div>
			</div>

			{/* <button
				className='cursor-pointer text-gray-600 mx-2'
				onClick={handlePrevMonth}
			>
				<FaArrowLeft />
			</button>
			<button
				className='cursor-pointer text-gray-600 mx-2'
				onClick={handleNextMonth}
			>
				<FaArrowRight />
			</button> */}
			<h2 className='ml-4 text-xl text-white font-space text-[18px] font-[700]'>
				{dayjs(new Date(dayjs().year(), monthIndex)).format(
					'DD MMMM YYYY'
				)}
			</h2>
		</header>
	);
};

export default CalendarHeader;
