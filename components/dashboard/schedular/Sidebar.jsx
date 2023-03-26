import React from 'react';
import CreateEventButton from './CreateEventButton';
import SmallCalendar from './SmallCalendar';
import Labels from './Labels';

const Sidebar = () => {
	return (
		<aside className='border p-5 w-64'>
			<CreateEventButton />
			<SmallCalendar />
			<Labels />
		</aside>
	);
};

export default Sidebar;
