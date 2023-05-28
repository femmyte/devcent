import React, { useState, useEffect } from 'react';
import { AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaToggleOn, FaToggleOff } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
// import { data } from "./Notification";

import { useStateContext } from '../../AuthContext';

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
	const {
		activeMenu,
		setActiveMenu,
		logout,
		login,
		screenSize,
		setScreenSize,
		darkToggle,
		setDarkToggle,
	} = useStateContext();

	const { data: session } = useSession();
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
				color='blue'
				icon={<AiOutlineMenu />}
			/>

			<div className='flex gap-x-[50px]'>
				<NavButton
					title='Mode'
					customFunc={() => setDarkToggle((prevState) => !prevState)}
					color='white'
					icon={<AiOutlineMail />}
					dotColor='red'
					num={4}
				/>
				{/* <NavButton title='Chat' dotColor='#03c9D7' customFunc={() => handleClick('chat')} color='blue' icon={<BsChatLeft />} /> */}

				<div
					className={`${
						notificationdropDown
							? 'mt-[10px] md:mt-0'
							: 'my-3 md:my-0'
					} md:m-[30px]  relative flex items-center gap-2 hover:bg-light-gray rounded-lg  `}
					// onMouseEnter={handleNotificationDropDown}
					// onClick={() => setNotificationdropDown(!notificationdropDown)}
					// onMouseLeave={() => setNotificationdropDown(false)}
				>
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
					<ul
						className={`${
							notificationdropDown
								? 'top-[45px] right-[2px] opacity-100 z-20 '
								: 'hidden'
						} absolute  bg-white  font-normal text-xl w-[98vw] md:w-[384px] shadow-lg border rounded-lg overflow-y-auto dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white`}
						style={{
							zIndex: 20,
							boxShadow:
								'0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)',
						}}
					>
						<div className='flex w-full h-[40px] justify-center items-center bg-[#F9FAFB] rounded-lg dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white'>
							<p className='font-[500] text-[16px] leading-6 text-[#111928] dark:text-gray-200'>
								Notifications
							</p>
						</div>
						{/* {data.map((notification) => (
              <li className="mb-3 flex items-center border-b border-b-[#F9FAFB] pb-[15px] py-4  px-4">
                <img
                  src={notification.image}
                  alt=""
                  className="w-[44px] h-[44px] rounded-full"
                />
                <div className=" ml-[12px]">
                  <p className="font-[400] text-[14px] leading-6 text-[#6B7280] mb-[6px]">
                    {notification.message}
                  </p>
                  <p className="font-[400] text-[12px] leading-6 text-[#1C64F2]">
                    {notification.time}
                  </p>
                </div>
              </li>
            ))} */}
						<div className='flex w-full h-[40px] justify-center items-center bg-[#F9FAFB] rounded-lg'>
							<IoEyeSharp color='#6B7280' />
							<p className='font-[500] text-[16px] leading-6 text-[#111928] ml-[8px]'>
								View All
							</p>
						</div>
					</ul>
				</div>
				<div
					className={`${
						dropDown ? 'mt-[10px] md:mt-0' : 'my-3 md:my-0'
					} md:mr-[30px]  relative flex items-center gap-2 cursor-pointer hover:bg-light-gray rounded-lg `}
					onMouseEnter={handleDropDown}
					onClick={() => setDropDown(!dropDown)}
					onMouseLeave={() => setDropDown(false)}
					// onClick={() => handleClick("userProfile")}
				>
					<p className='text-gray-400 text-[10px] md:text-14 font-bold ml-1'>
						Tosin
					</p>
					<img
						src='/images/instructor/alalade.png'
						alt='avatar'
						className='rounded-full w-8 h-8 ml-4'
					/>
					{/* <MdKeyboardArrowDown className='text-gray-400 text-14 mr-3' />
          <ul
            className={`${
              dropDown ? 'top-[40px] opacity-100 pb-6 z-20 ' : 'hidden'
            } absolute  bg-white py-4  px-4 font-normal text-xl w-[149px]`}
            style={{
              zIndex: 2,
              boxShadow:
                '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)',
            }}
          >
            <li className='mb-2'>
              <button
                onClick={()=> signOut() }
                className='text-[#F05252] hover:text-primary_blue-200 duration-500 font-[400] text-[14px] leading-6'
              >
                Sign Out
              </button>
            </li>
          </ul> */}
				</div>
				{/* { isClicked.cart && <Cart /> }
        { isClicked.chat && <Chat /> }
        { isClicked.notification && <Notification /> }
        { isClicked.userProfile && <UserProfile /> } */}
			</div>
		</div>
	);
};

export default Navbar;
