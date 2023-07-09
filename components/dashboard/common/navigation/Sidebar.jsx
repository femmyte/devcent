import React, { useState } from 'react';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel, MdSecurityUpdate } from 'react-icons/md';
import { FiLogOut, FiSettings } from 'react-icons/fi';
import { studentLinks, adminLinks } from '../../../../lib/data/links';
import Link from 'next/link';
import { useStateContext } from '../../../../AuthContext';
import { useRouter } from 'next/router';
import { RiNotification3Line } from 'react-icons/ri';
import { FaCertificate, FaUserTie } from 'react-icons/fa';
import { useUserStore } from '../../../../store/useUserStore';
import LogoutModal from '../LogoutModal';

const Sidebar = () => {
	const userInfo = useUserStore((state) => state.userInfo);
	let links;
	let nav;
	if (userInfo.role === 'student') {
		links = studentLinks;
		nav = 'user';
	} else if (userInfo.role === 'admin') {
		links = adminLinks;
		nav = 'admin';
	}
	let {
		activeMenu,
		setActiveMenu,
		screenSize,
		openLogoutModal,
		setOpenLogoutModal,
	} = useStateContext();
	const router = useRouter();
	const [showSettings, setShowSettings] = useState(false);

	const handleCloseSidebar = () => {
		if (activeMenu && screenSize <= 900) {
			setActiveMenu(false);
		}
	};

	const handleShowModal = () => {
		console.log('clicked =>', openLogoutModal);
		setOpenLogoutModal(true);
	};
	const activeLink =
		'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-[#e6098c] font-space font-[500] text-[14px] m-2';
	const normalLink =
		'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white font-[500] text-[14px] dark:text-gray-200 dark:hover:text-primaryPurple hover:bg-light-gray m-2';
	return (
		<div className='h-screen overflow-y-auto md:overflow-x-hidden  md:hover:overflow-y-auto pb-[10px]  bg-[#101010]'>
			<LogoutModal />
			{activeMenu && (
				<>
					<div className='flex justify-between items-center'>
						<Link
							href='/'
							onClick={handleCloseSidebar}
							className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900'
						>
							<img
								src='/images/logo.png'
								alt='Devcent Logo'
								className='max-w-[200px]'
							/>
						</Link>
						<button
							type='button'
							onClick={() =>
								setActiveMenu((prevState) => !prevState)
							}
							className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden'
						>
							<MdOutlineCancel />
						</button>
					</div>
					<div className='mt-5 w-[225px]'>
						{userInfo?.enrolledCourses?.length >= 1 &&
							links.map((item) => (
								<div key={item.title}>
									{/* <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p> */}

									{item.links.map((link) => {
										return (
											<Link
												href={`/${nav}/${link.name}`}
												key={link.name}
												onClick={handleCloseSidebar}
												className={
													activeMenu
														? normalLink
														: activeLink
												}
											>
												{link.icon}
												<span className='capitalize font-space font-[500] text-[14px] '>
													{/* {link.name == '/' ? 'overview' : link.name} */}
													{link.name}
												</span>
											</Link>
										);
									})}
								</div>
							))}
					</div>
				</>
			)}
			<button
				// className='flex items-center w-[90%] gap-x-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md  mt-[40px]'
				className={activeMenu ? normalLink : activeLink}
				onClick={() => setShowSettings((prevState) => !prevState)}
			>
				<FiSettings />
				<span className='capitalize'>Settings</span>
			</button>
			<ul
				className={`${
					showSettings ? 'opacity-100 pb-6 z-10' : 'hidden'
				} dropdown`}
			>
				<li className='flex items-center w-[90%] gap-x-5 pl-8 pb-2.5 rounded-lg text-white text-md'>
					<FaUserTie />
					<Link href={`/${nav}/settings/profile`}>Profile</Link>
				</li>
				<li className='flex items-center w-[90%] gap-x-5 pl-8 pb-2.5 rounded-lg text-white text-md'>
					<RiNotification3Line />
					<Link href={`/${nav}/settings/notification`}>
						Notification
					</Link>
				</li>
				<li className='flex items-center w-[90%] gap-x-5 pl-8 pb-2.5 rounded-lg text-white text-md'>
					<MdSecurityUpdate />
					<Link href={`/${nav}/settings/security`}>Security</Link>
				</li>
				{userInfo.role === 'student' && (
					<li className='flex items-center w-[90%] gap-x-5 pl-8 pb-2.5 rounded-lg text-white text-md'>
						<FaCertificate />
						<Link href={`/${nav}/settings/certificates`}>
							Certificates
						</Link>
					</li>
				)}
			</ul>
			<button
				onClick={() => {
					handleShowModal();
					handleCloseSidebar();
				}}
				className={!activeMenu ? normalLink : activeLink}
			>
				<FiLogOut />
				<span className='capitalize'>logout</span>
			</button>
		</div>
	);
};

export default Sidebar;
