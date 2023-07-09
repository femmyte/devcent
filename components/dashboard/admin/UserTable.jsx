import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { AiOutlineMenu, AiTwotoneDelete } from 'react-icons/ai';
import {
	DataGrid,
	GridColDef,
	GridToolbar,
	GridValueGetterParams,
} from '@mui/x-data-grid';
// import dateFormat, { masks } from 'dateformat';
import { useStateContext } from '../../../AuthContext';
import { data } from './data';
const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
	<button
		type='button'
		onClick={customFunc}
		style={{ color }}
		className='relative text-xl rounded-full p-3 hover:bg-light-gray'
	>
		<span
			style={{ backgroundColor: dotColor }}
			className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'
		/>
		{icon}
	</button>
);
function UserTable({ path }) {
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const { darkToggle, user } = useStateContext();
	// const [info, setInfo] = useState([]);
	const [userInfo, setUserInfo] = useState(null);
	const [btnText, setBtnText] = useState(false);
	const [show, setShow] = useState(false);
	const [open, setOpen] = useState(false);
	const [userId, setUserId] = useState(null);

	// const handleView = (e, row) => {
	// 	fetchPersonalInfo(row._id);
	// };

	// let columns: GridColDef[] = [
	const columns = [
		// { field: 'regId', headerName: 'Registration Id', width: 150 },

		{
			field: 'name',
			selector: (row) => row.name,
			headerName: 'Name',
			width: 150,
			editable: true,
		},
		{
			field: 'status',
			selector: (row) => row.status,
			headerName: 'Status',
			width: 100,
		},
		{
			field: 'course',
			selector: (row) => row.course,
			headerName: 'Course',
			width: 150,
			editable: true,
		},
		{
			field: 'emailAddress',
			selector: (row) => row.emailAddress,
			headerName: 'Email address',
			width: 200,
			editable: true,
		},
		{
			field: 'duration',
			selector: (row) => row.courseDuration,
			headerName: 'Course duration',
			width: 80,
			editable: true,
		},
	];

	return (
		<>
			<div className='block md:flex gap-5 dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white'>
				<Box className='h-[700px] w-[95%] mx-auto mt-[15px] bg-black rounded ml-3 dark:bg-main-dark-bg dark:border-none'>
					<div className='w-full bg-white flex justify-between items-center pl-[22px] pr-[15px] h-[62px] rounded-t '>
						<p className='text-[#101828] font-[500] text-[16px]'>
							Students
							<span className='text-[11px] text-[#6941c6] ml-[15px]'>
								{data.length} users
							</span>
						</p>
						{/* <p className='text-[#101828] font-[500] text-[16px]'></p> */}
					</div>
					<DataGrid
						rows={data}
						columns={columns}
						getRowId={(data) => data?._id}
						pagination
						pageSize={10}
						rowsPerPageOptions={[10]}
						checkboxSelection
						// onRowClick={fetchPersonalInfo}
						sx={{
							borderColor: `${darkToggle && 'grey.500'}`,
							color: `${darkToggle && 'white'}`,
							marginTop: '-3px',
						}}
						// components={{ Toolbar: GridToolbar }}
					/>
				</Box>
			</div>
		</>
	);
}
export default UserTable;
