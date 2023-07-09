import { HiOutlineUserGroup } from 'react-icons/hi';
import { AiFillHome } from 'react-icons/ai';
export const studentLinks = [
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
				name: 'task',
				icon: <HiOutlineUserGroup />,
			},
			{
				name: 'instructors',
				icon: <HiOutlineUserGroup />,
			},
			{
				name: 'modules',
				icon: <HiOutlineUserGroup />,
			},
			{
				name: 'schedule',
				icon: <HiOutlineUserGroup />,
			},
			{
				name: 'payments',
				icon: <HiOutlineUserGroup />,
			},
			{
				name: 'technical-support',
				icon: <HiOutlineUserGroup />,
			},
			{
				name: 'fAQs-and-tutorials',
				icon: <HiOutlineUserGroup />,
			},
		],
	},
];

export const adminLinks = [
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
				name: 'payments',
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
