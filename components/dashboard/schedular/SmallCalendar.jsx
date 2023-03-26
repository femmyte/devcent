import { getMonth } from 'appData/calendarUtils';
import { useStateContext } from 'AuthContext';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const SmallCalendar = () => {
	const [currentMonthId, setCurrentMonthId] = useState(dayjs().month());
	const [currentMonth, setCurrentMonth] = useState(getMonth());
	useEffect(() => {
		setCurrentMonth(getMonth(currentMonthId));
	}, [currentMonthId]);
	const { monthIndex, setSmallCalendarMonth, daySelected, setDaySelected } =
		useStateContext();

	useEffect(() => {
		setCurrentMonthId(monthIndex);
	}, [monthIndex]);

	const handlePrevMonth = () => {
		setCurrentMonthId((prevState) => prevState - 1);
	};
	const handleNextMonth = () => {
		setCurrentMonthId((prevState) => prevState + 1);
	};
	const getDayClass = (day) => {
		const format = 'DD-MM-YY';
		const nowDay = dayjs().format(format);
		const currDay = day.format(format);
		const sltDay = daySelected && daySelected.format(format);
		if (nowDay === currDay) {
			return 'bg-blue-500 rounded-full text-white';
		} else if (currDay === sltDay) {
			return 'bg-blue-100 rounded-full text-blue-600 font-bold';
		} else {
			return '';
		}
	};
	return (
		<div className='mt-9'>
			<header className='flex justify-between'>
				<p className='text-gray-500 font-bold'>
					{dayjs(new Date(dayjs().year(), currentMonthId)).format(
						'MMMM YYYY'
					)}
				</p>
				<div className=''>
					<button
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
					</button>
				</div>
			</header>
			<div className='grid grid-cols-7 grid-rows-6'>
				{currentMonth[0].map((day, i) => (
					<span key={i} className='text-sm py-1 text-center'>
						{day.format('dd').charAt(0)}
					</span>
				))}
				{currentMonth.map((row, i) => (
					<React.Fragment key={i}>
						{row.map((day, idx) => (
							<button
								key={idx}
								className={`py-1 w-full ${getDayClass(day)}`}
								onClick={() => {
									setSmallCalendarMonth(currentMonthId);
									setDaySelected(day);
								}}
							>
								<span className='text-sm'>
									{day.format('D')}
								</span>
							</button>
						))}
					</React.Fragment>
				))}
			</div>
		</div>
	);
};

export default SmallCalendar;
