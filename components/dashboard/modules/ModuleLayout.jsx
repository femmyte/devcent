import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { useStateContext } from '../../../AuthContext';
// import RequireProfileUpdate from './RequireProfileUpdate';

function ModuleLayout({ children }) {
	const { activeMenu, darkToggle, login } = useStateContext();

	return (
		<div
			className={`${
				darkToggle && 'dark'
			} h-screen overflow-y-auto hideScrolbar`}
		>
			{/* <HashRouter> */}
			<div className='md:sticky bg-main-bg dark:bg-main-dark-bg navbar w-full'>
				<Navbar />
			</div>
			<div className='flex relative dark:bg-main-dark-bg'>
				{activeMenu ? (
					<div
						className={`w-full md:w-[393px] h-screen pb-7 overflow-y-auto overflow-x-hidden fixed sidebar dark:bg-secondary-dark-bg bg-[#202125]
						  hideScrolbar`}
					>
						<Sidebar />
					</div>
				) : (
					<div className={`w-0 hidden dark:bg-secondary-dark-bg`}>
						<Sidebar />
					</div>
				)}

				{/* <div
					className={`
              ${
					activeMenu && !login ? 'md:ml-[218px] w-[82%]' : 'flex-2'
				} dark:bg-main-bg bg-main-bg min-h-screen w-full`}
				> */}
				{/* <div
					className={`
              ${
					activeMenu ? 'w-full' : 'flex-2'
				} dark:bg-main-bg bg-main-bg min-h-screen w-full`}
				> */}
				{/* <div
						className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'
						
					>
						<Navbar />
					</div> */}
				<div className='bg-black'>
					<div className='dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white '>
						<div
							className={`z-[10000] shadow pb-[30px]dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white  pb-[20px] ${
								activeMenu && 'md:ml-[393px]'
							} `}
						>
							{children}
						</div>
					</div>
				</div>
				{/* </div> */}
			</div>
		</div>
	);
}

export default ModuleLayout;
// export default RequireProfileUpdate(ModuleLayout);
