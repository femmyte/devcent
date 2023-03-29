import { getMonth } from 'appData/calendarUtils';
import { useStateContext } from 'AuthContext';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const SmallCalendar = () => {
	const [currentMonthId, setCurrentMonthId] = useState(dayjs().month());
	const [currentMonth, setCurrentMonth] = useState(getMonth());
	// const [dayEvent, setDayEvent] = useState([]);
	useEffect(() => {
		setCurrentMonth(getMonth(currentMonthId));
	}, [currentMonthId]);
	const {
		monthIndex,
		setSmallCalendarMonth,
		daySelected,
		setDaySelected,
		setSelectedEvent,
		filteredEvents,
		dayEvent,
		setDayEvent,
		evtday,
	} = useStateContext();

	console.log(evtday);
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

	// useEffect(() => {
	// 	const events = filteredEvents?.filter(
	// 		(evt) =>
	// 			dayjs(evt.day).format('DD-MM-YY') === day.format('DD-MM-YY')
	// 	);
	// 	setDayEvent(events);
	// }, [filteredEvents, day]);

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
						{row.map((day, idx) => {
							return (
								<button
									key={idx}
									className={`py-1 w-full ${getDayClass(
										day
									)}`}
									onClick={() => {
										setSmallCalendarMonth(currentMonthId);
										setDaySelected(day);
									}}
								>
									<span className='text-sm'>
										{day.format('D')}
									</span>
									{/* <div className='w-2 h-2 bg-red-400 mx-auto'></div> */}
									{dayEvent?.map((evt, idx) => (
										<div
											key={idx}
											className={`bg-${evt.label}-200 w-2 h-2  mx-auto`}
											style={{
												backgroundColor: evt.label,
											}}
											onClick={() =>
												setSelectedEvent(evt)
											}
										>
											{/* <p>{evt.title}</p> */}
											{/* <p>{evt.description}</p> */}
										</div>
									))}
								</button>
							);
						})}
					</React.Fragment>
				))}
			</div>
		</div>
	);
};

export default SmallCalendar;
