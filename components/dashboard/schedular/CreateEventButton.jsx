import { useStateContext } from 'AuthContext';
import React from 'react';
import { FiPlus } from 'react-icons/fi';

const CreateEventButton = () => {
	const { showEventModal, setShowEventModal } = useStateContext();
	return (
		<button
			className='border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl '
			onClick={() => setShowEventModal(true)}
		>
			<FiPlus className='w-7 h-7' />
			<span className='pl-3 pr-7'>Create </span>
		</button>
	);
};

export default CreateEventButton;
