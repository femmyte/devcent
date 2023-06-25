import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useStateContext } from '../../../AuthContext';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useUserStore } from 'store/useUserStore';
import style from '../../../src/styles/Sidebar.module.css';
import Image from 'next/image';
import { AiFillCaretDown } from 'react-icons/ai';
import { courses } from './courseList';
import CircularProgressBar from './CircularProgressBarold';
const SearchComponent = ({ onFilter, filterText }) => (
	<div
		className='dark:text-gray-200 md:w-[386px] dark:bg-main-dark-bg dark:hover:text-white flex  py-2 md:py-0 items-center rounded-r px-[9px] h-full gap-2 '
		style={{
			boxShadow:
				'0px 3.71382px 7.42763px -1.85691px rgba(16, 24, 40, 0.1), 0px 1.85691px 3.71382px -1.85691px rgba(16, 24, 40, 0.06)',
		}}
	>
		<FiSearch className='text-[#6D7175]' />
		<input
			type='text'
			className=' focus:outline-none focus:ring-0 border-none outline-none w-[80%] text-[14px] bg-transparent text-[#6D7175]'
			placeholder='Search for something'
			onChange={onFilter}
			name={filterText}
			value={filterText}
		/>
	</div>
);

const ModuleSidebar = () => {
	const userInfo = useUserStore((state) => state.userInfo);
	let {
		activeMenu,
		setActiveMenu,
		screenSize,
		setCourseContent,
		setCurrentItemId,
	} = useStateContext();
	const router = useRouter();
	const [showCourse, setShowCourse] = useState(false);
	const [showModule, setShowModule] = useState(false);
	const [showDetail, setShowDetail] = useState(false);
	const [activeModuleId, setActiveModuleId] = useState(null);
	const [activeCourseId, setActiveCourseId] = useState(null);
	const [activeDetailId, setActiveDetailId] = useState(null);

	const handleLogout = async () => {
		const data = await signOut({ redirect: false, callbackUrl: '/' });
		router.push(data.url);
	};

	const handleCloseSidebar = () => {
		if (activeMenu && screenSize <= 900) {
			setActiveMenu(false);
		}
	};
	const CourseBox = ({
		title,
		coursePercentage,
		introduction,
		modules,
		courseId,
	}) => {
		return (
			<div className={`${style.courseBox} `} key={courseId}>
				<div
					className={`${
						activeCourseId === courseId &&
						showCourse &&
						' bg-[#343840] p-4'
					} w-full`}
				>
					<div
						className={`${style.courseBoxTextWrap} `}
						// onClick={() => setShowCourse((prevState) => !prevState)}
						onClick={() => {
							setActiveCourseId(courseId);
							setShowCourse(!showCourse);
						}}
					>
						<p className={style.courseTitle}>{title}</p>
						{!introduction && (
							<Image
								src='/images/icons/dropdown.svg'
								height={20}
								width={20}
								alt={title}
							/>
						)}
					</div>
					<div
						className={` flex w-full justify-between items-center   gap-x-4`}
					>
						<div className='w-full relative bg-[#C7D4E0] h-[10px] rounded-[1px]'>
							<div
								className={` bg-primaryPurple h-[10px] absolute top-0 left-0 rounded-[1px]`}
								style={{ width: `${coursePercentage}%` }}
							></div>
						</div>
						<p className={style.percentText}>{coursePercentage}%</p>
					</div>
				</div>
				<ul
					className={`${
						activeCourseId === courseId && showCourse
							? 'block  '
							: 'hidden'
					}  `}
				>
					{!introduction &&
						modules.map((module) => (
							<React.Fragment key={module.id}>
								<li
									className={`flex items-center gap-[3.68rem] py-2 px-4  cursor-pointer ${
										activeModuleId === module.id &&
										showModule &&
										'bg-[#343840] p-4'
									}`}
									onClick={() => {
										setActiveModuleId(module.id);
										setShowModule(!showModule);
									}}
								>
									<div className='flex gap-x-[6px] items-center'>
										<AiFillCaretDown />
										<p className={style.courseSubTitle}>
											{module.title}
										</p>
									</div>
								</li>
								<ul
									className={`${
										activeModuleId === module.id &&
										showModule
											? 'block'
											: 'hidden'
									}`}
								>
									{module?.details?.map((detail) => {
										return (
											detail.subTitle != '' && (
												<li
													className={`flex items-center gap-[3.68rem] py-2 px-4  cursor-pointer' ${
														activeDetailId ===
															detail.id &&
														showDetail &&
														'p-2 bg-[#343840]'
													} mt-2`}
													key={detail.id}
													onClick={() => {
														setShowDetail(
															(prevState) =>
																!prevState
														);
														setActiveDetailId(
															detail.id
														);
														setCurrentItemId(
															detail.id
														);
														// setActiveMenu(
														// 	(prevState) =>
														// 		!prevState
														// );
														handleCloseSidebar;
													}}
												>
													<div className='flex gap-x-[6px] items-center'>
														<CircularProgressBar
															currentItemId={
																detail.id
															}
														/>
														<p
															className={
																style.courseSubTitle
															}
															onClick={() =>
																setCourseContent(
																	detail
																)
															}
														>
															{detail.subTitle}
														</p>
													</div>
													<p
														className={
															style.percentText
														}
													>
														{module.details.indexOf(
															detail
														) + 1}
														/{module.details.length}
													</p>
												</li>
											)
										);
									})}
								</ul>
							</React.Fragment>
						))}
				</ul>
			</div>
		);
	};

	return (
		<div className={style.layout}>
			<div className={style.topBox}>
				<div className='flex items-center gap-1 border-b-[2px] border-b-primaryPurple py-2 px-4'>
					<Image
						src='/images/icons/clipboard-text.png'
						width={24}
						height={24}
						alt='clipboard icon'
					/>
					<p className={style.topContent}>Module Contents </p>
				</div>
				<div className='flex items-center gap-1 py-2 px-4'>
					<Image
						src='/images/icons/book.svg'
						width={24}
						height={24}
						alt='book svg'
					/>
					<p className={style.topContent}>Resources </p>
				</div>
			</div>
			<div className={style.searchBox}>
				<SearchComponent />
			</div>
			{courses.map((course) => {
				return (
					<CourseBox
						key={course.id}
						title={course.title}
						coursePercentage={course.progress}
						introduction={course.id == 1}
						courseId={course.id}
						modules={course.modules}
					/>
				);
			})}
		</div>
	);
};

export default ModuleSidebar;
