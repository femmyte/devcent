import React, { useState, useEffect } from 'react';
import { AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { RiNotification3Line } from 'react-icons/ri';
import Link from 'next/link';
import { useStateContext } from '../../../../AuthContext';
import { useUserStore } from '../../../../store/useUserStore';
import { FaCertificate, FaUserTie } from 'react-icons/fa';
import { MdSecurityUpdate } from 'react-icons/md';

const NavButton = ({ title, customFunc, icon, color, dotColor, num }) => (
	<div className='relative'>
		<button
			type='button'
			onClick={customFunc}
			style={{ color }}
			className='relative text-xl rounded-full p-3 hover:bg-light-gray'
		>
			{icon}
		</button>
		<div
			style={{ backgroundColor: dotColor }}
			className='absolute rounded-full h-[15px] w-[15px] right-[7px] top-[4px] text-[10px] text-white flex items-center justify-center'
		>
			{num}
		</div>
	</div>
);

const Navbar = () => {
	const { userInfo } = useUserStore((state) => state);
	const { setActiveMenu, screenSize, setScreenSize, setDarkToggle } =
		useStateContext();
	let nav;
	if (userInfo.role === 'student') {
		nav = 'user';
	} else if (userInfo.role === 'admin') {
		nav = 'admin';
	}
	const [dropDown, setDropDown] = useState(false);
	const [notificationdropDown, setNotificationdropDown] = useState(false);
	// const user = getUser()

	const handleLogout = () => {
		// removeUserSession();
		// logout();
		// navigate("/login");
		// handleCloseSidebar();
		// setActiveMenu(false);
		console.log('loggingout');
	};

	const handleDropDown = () => {
		if (dropDown) {
			setDropDown(false);
			setNotificationdropDown(false);
		} else {
			setDropDown(true);
		}
	};
	const handleNotificationDropDown = () => {
		setNotificationdropDown(true);
		if (notificationdropDown) {
			setDropDown(false);
			setNotificationdropDown(false);
		} else {
			setNotificationdropDown(true);
		}
	};

	useEffect(() => {
		const handleResize = () => setScreenSize(window.innerWidth);

		window.addEventListener('resize', handleResize);

		handleResize();
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		if (screenSize <= 900) {
			setActiveMenu(false);
		} else {
			setActiveMenu(true);
		}
	}, [screenSize]);

	return (
		<div
			className='flex justify-between p-2 relative bg-black text-white dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white'
			//   style={{ borderBottom: "0.6px solid #878787" }}
		>
			<NavButton
				title='Menu'
				customFunc={() => setActiveMenu((prevState) => !prevState)}
				color='white'
				icon={<AiOutlineMenu />}
			/>

			<div className='flex gap-x-[50px]'>
				{/* <NavButton
					title='Mode'
					customFunc={() => setDarkToggle((prevState) => !prevState)}
					color='white'
					icon={<AiOutlineMail />}
					dotColor='red'
					num={4}
				/> */}
				{/* <NavButton title='Chat' dotColor='#03c9D7' customFunc={() => handleClick('chat')} color='blue' icon={<BsChatLeft />} /> */}
				<Link href='/user/notifications'>
					<NavButton
						title='Notifications'
						dotColor='red'
						customFunc={() =>
							setNotificationdropDown(!notificationdropDown)
						}
						color='white'
						num={2}
						icon={<RiNotification3Line />}
					/>
				</Link>
				<div
					className='md:mr-[40px]  relative cursor-pointer hover:bg-light-gray rounded-lg '
					onClick={() => setDropDown(!dropDown)}
				>
					<div
						className={`flex items-center gap-x-2 `}
						// onMouseEnter={handleDropDown}
						// onMouseLeave={() => setDropDown(false)}
						// onClick={() => handleClick("userProfile")}
					>
						<p className='text-gray-400 font-bold ml-1'>
							{userInfo.firstName}
						</p>
						<img
							src={
								userInfo.imgUrl
									? userInfo.imgUrl
									: '/images/icons/avatar-icon.jpg'
							}
							alt='avatar'
							className='rounded-full w-8 h-8 ml-4'
						/>
					</div>

					<ul
						className={`${
							dropDown ? 'opacity-100 mt-2 py-3 z-10' : 'hidden'
						} dropdown`}
					>
						<li className='flex items-center gap-x-5 px-3 pb-2.5 rounded-lg text-white text-md'>
							<FaUserTie />
							<Link href={`/${nav}/settings/profile`}>
								Profile
							</Link>
						</li>
						<li className='flex items-center gap-x-5 px-3 pb-2.5 rounded-lg text-white text-md'>
							<RiNotification3Line />
							<Link href={`/${nav}/settings/notification`}>
								Notification
							</Link>
						</li>
						<li className='flex items-center gap-x-5 px-3 pb-2.5 rounded-lg text-white text-md'>
							<MdSecurityUpdate />
							<Link href={`/${nav}/settings/security`}>
								Security
							</Link>
						</li>
						{userInfo.role === 'student' && (
							<li className='flex items-center gap-x-5 px-3 pb-2.5 rounded-lg text-white text-md'>
								<FaCertificate />
								<Link href={`/${nav}/settings/certificates`}>
									Certificates
								</Link>
							</li>
						)}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
