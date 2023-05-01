import { useStateContext } from 'AuthContext';
import dayjs from 'dayjs';
import React, { useState, useEffect } from 'react';

const Day = ({ day, rowIdx }) => {
	const {
		setDaySelected,
		daySelected,
		savedEvents,
		setShowEventModal,
		filteredEvents,
		setSelectedEvent,
		evtday,
		setDay,
	} = useStateContext();
	// console.log(dayEvent);
	// setDay(day);
	const getCurentDayClass = () => {
		return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY')
			? 'bg-blue-600 text-white rounded-full w-7 '
			: '';
	};
	// useEffect(() => {
	// 	setDay(day);
	// });
	const [dayEvent, setDayEvent] = useState([]);

	useEffect(() => {
		const events = filteredEvents?.filter(
			(evt) =>
				dayjs(evt.day).format('DD-MM-YY') === day.format('DD-MM-YY')
		);
		setDayEvent(events);
	}, [filteredEvents, day]);
	return (
		<div className='border border-gray-200 flex flex-col cursor-pointer'>
			<header className='flex flex-col items-center'>
				{rowIdx === 0 && (
					<p className='text-sm mt-1'>
						{day.format('dddd').toUpperCase()}
					</p>
				)}
				<p
					className={`text-sm p-1 my-1 text-center ${getCurentDayClass()} `}
				>
					{day.format('DD')}
				</p>
			</header>
			<div
				className='flex-1 cursor-pointer'
				onClick={() => {
					setShowEventModal(true);
					setDaySelected(day);
				}}
			>
				{dayEvent?.map((evt, idx) => (
					<div
						key={idx}
						className={`bg-${evt.label}-200 w-full  text-center p-1 mr-3 text-white text-sm rounded`}
						style={{ backgroundColor: evt.label }}
						onClick={() => setSelectedEvent(evt)}
					>
						<p>{evt.title}</p>
						{/* <p>{evt.description}</p> */}
					</div>
				))}
			</div>
		</div>
	);
};

export default Day;
