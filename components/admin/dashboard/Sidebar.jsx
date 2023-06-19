import React, { useState } from 'react';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel, MdSecurityUpdate } from 'react-icons/md';
import { FiLogOut, FiSettings } from 'react-icons/fi';
import { links } from '../../../adminlinks';
import Link from 'next/link';
import { useStateContext } from '../../../AuthContext';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { RiNotification3Line } from 'react-icons/ri';
import { FaCertificate, FaUserTie } from 'react-icons/fa';

const Sidebar = () => {
	let { activeMenu, setActiveMenu, screenSize, logout, login, user } =
		useStateContext();
	const router = useRouter();
	const [showSettings, setShowSettings] = useState(false);
	const handleLogout = async () => {
		const data = await signOut({ redirect: false, callbackUrl: '/' });
		router.push(data.url);
	};
	const handleCloseSidebar = () => {
		if (activeMenu && screenSize <= 900) {
			setActiveMenu(false);
		}
	};
	const activeLink =
		'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-[#e6098c] font-space font-[500] text-[14px] m-2';
	const normalLink =
		'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white font-[500] text-[14px] dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';
	return (
		<div className='h-screen overflow-y-auto md:overflow-x-hidden  md:hover:overflow-y-auto pb-[10px]  bg-[#101010]'>
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
						{links.map((item) => (
							<div key={item.title}>
								{/* <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p> */}

								{item.links.map((link) => {
									return (
										<Link
											href={`/admin/${link.name}`}
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
					<Link href='/user/settings/profile'>Profile</Link>
				</li>
				<li className='flex items-center w-[90%] gap-x-5 pl-8 pb-2.5 rounded-lg text-white text-md'>
					<RiNotification3Line />
					<Link href='/user/settings/notification'>Notification</Link>
				</li>
				<li className='flex items-center w-[90%] gap-x-5 pl-8 pb-2.5 rounded-lg text-white text-md'>
					<MdSecurityUpdate />
					<Link href='/user/settings/security'>Security</Link>
				</li>
				<li className='flex items-center w-[90%] gap-x-5 pl-8 pb-2.5 rounded-lg text-white text-md'>
					<FaCertificate />
					<Link href='/user/settings/certificates'>Certificates</Link>
				</li>
			</ul>
			<Link
				href='/user/logout'
				// onClick={() => {
				// 	signOut({
				// 		redirect: true,
				// 		callbackUrl: '/',
				// 	});
				// }}
				// onClick={handleLogout}
				// className='flex items-center w-[90%] gap-x-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md '
				className={!activeMenu ? normalLink : activeLink}
			>
				<FiLogOut />
				<span className='capitalize'>logout</span>
			</Link>
		</div>
	);
};

export default Sidebar;
