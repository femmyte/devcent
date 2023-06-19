import { AiFillHome } from 'react-icons/ai';
import { ImUsers } from 'react-icons/im';
import { MdCategory } from 'react-icons/md';
import { HiOutlineUserGroup } from 'react-icons/hi';

export const links = [
	{
		title: 'Dashboard',
		links: [
			{
				name: 'overview',
				icon: <AiFillHome />,
			},
		],
	},

	{
		title: 'Pages',
		links: [
			{
				name: 'manage-students',
				icon: <HiOutlineUserGroup />,
			},
			{
				name: 'instructors',
				icon: <HiOutlineUserGroup />,
			},
			{
				name: 'courses',
				icon: <HiOutlineUserGroup />,
			},
			{
				name: 'hR',
				icon: <HiOutlineUserGroup />,
			},
			{
				name: 'tickets',
				icon: <HiOutlineUserGroup />,
			},
		],
	},
];
