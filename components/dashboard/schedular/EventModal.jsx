import { useStateContext } from 'AuthContext';
import React, { useState } from 'react';
import { FaAngleDown, FaTimes } from 'react-icons/fa';
import { FcElectricalSensor } from 'react-icons/fc';
import { IoAlarm } from 'react-icons/io5';
import {
	MdBookmarkBorder,
	MdCheck,
	MdDelete,
	MdDescription,
} from 'react-icons/md';

const labelsClasses = ['indigo', 'gray', 'green', 'blue', 'red', 'purple'];

const EventModal = () => {
	const {
		daySelected,
		setShowEventModal,
		dispatchCalEvent,
		selectedEvent,
		setSelectedEvent,
	} = useStateContext();
	const [title, setTitle] = useState(
		selectedEvent ? selectedEvent.title : ''
	);
	const [description, setDescription] = useState(
		selectedEvent ? selectedEvent.description : ''
	);
	const [selectedLabel, setSelectedLabel] = useState(
		selectedEvent
			? labelsClasses.find((label) => label === selectedEvent.label)
			: labelsClasses[0]
	);
	const [showDescription, setShowDescription] = useState(FcElectricalSensor);

	const handleSubmit = (e) => {
		e.preventDefault();
		const calendarEvent = {
			title,
			description,
			label: selectedLabel,
			day: daySelected.valueOf(),
			id: selectedEvent ? selectedEvent.id : Date.now(),
		};
		if (selectedEvent) {
			dispatchCalEvent({ type: 'update', payload: calendarEvent });
		} else {
			dispatchCalEvent({ type: 'push', payload: calendarEvent });
		}
		setDescription('');
		setTitle('');
		setShowEventModal(false);
	};
	const handleShowDescription = () => {};
	return (
		<div className='h-screen w-full fixed left-0 top-0 flex justify-center items-center '>
			<form
				className='bg-white rounded-lg shadow-2xl w-1/4'
				onSubmit={handleSubmit}
			>
				<header className='bg-gray-100 px-4 py-2 flex justify-between items-center'>
					<span className='text-gray-400'>
						<FaAngleDown />
					</span>
					<div className='flex gap-x-2'>
						{selectedEvent && (
							<span
								onClick={() => {
									dispatchCalEvent({
										type: 'delete',
										payload: selectedEvent,
									});
									setShowEventModal(false);
								}}
								className='cursor-pointer text-red-400'
							>
								<MdDelete />
							</span>
						)}
						<button
							onClick={() =>
								setShowEventModal((prevState) => !prevState)
							}
						>
							<span className='text-gray-400'>
								<FaTimes />
							</span>
						</button>
					</div>
				</header>
				<div className='p-3'>
					<div className='grid grid-cols-1/5 items-end gap-y-7'>
						<div className=''></div>
						<input
							type='text'
							name='title'
							placeholder='Add title'
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							className='pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500'
						/>
						<span className='text-gray-400'>
							<IoAlarm />
						</span>
						<p>{daySelected.format('dddd, MMMM DD')}</p>
						<span
							className='text-gray-400'
							onMouseEnter={() => setShowDescription(true)}
							onClick={() => setShowDescription(false)}
							// onMouseUp={() => setShowDescription(true)}
						>
							<MdDescription />
						</span>
						<input
							type='text'
							name='description'
							placeholder='Add description'
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							className='pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500'
						/>

						<span className='text-gray-400'>
							<MdBookmarkBorder />
						</span>
						<div className='flex gap-x-2'>
							{labelsClasses.map((labelColor, i) => (
								<span
									key={i}
									onClick={() => setSelectedLabel(labelColor)}
									className={`bg-${labelColor}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
									style={{ backgroundColor: labelColor }}
								>
									{selectedLabel === labelColor && (
										<span className='text-white text-sm'>
											<MdCheck />
										</span>
									)}
								</span>
							))}
						</div>
					</div>
				</div>
				<footer className='  border-t p-3 mt-5'>
					{showDescription && (
						<p className='w-[90%] mx-auto text-justify text-[13px]'>
							{description}{' '}
						</p>
					)}
					<div className='flex justify-end'>
						<button
							type='submit'
							onClick={handleSubmit}
							className='bg-blue-500 hover
                    :bg-blue-600 px-6 py-2 rounded text-white'
						>
							Save
						</button>
					</div>
				</footer>
			</form>
		</div>
	);
};

export default EventModal;
