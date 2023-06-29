import React from 'react';

const Grid = ({ colNum, children }) => {
	return (
		<div
			className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${
				colNum ? colNum : '3'
			} gap-x-[100px] mb-[20px]`}
		>
			{children}
		</div>
	);
};

export default Grid;
