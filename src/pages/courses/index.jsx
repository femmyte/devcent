import React, { useState, useEffect } from 'react';
import Nav from 'components/common/Nav';
import Meta from 'components/common/Meta';
// import CourseCard from "components/uiux/CourseCard";
import Instructor from 'components/common/Instructor';
import Footer from 'components/common/Footer';
import { FiArrowDownRight, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';
import axios from 'axios';
import FullLoader from 'components/loaders/FullLoader';
import { useFetch } from 'services/hooks/fetch';
import FullError from 'components/error/FullError';

const CourseCard = ({
	background,
	title,
	children,
	img,
	first,
	position,
	about,
}) => {
	// ['#521C3C', '#3C2B68', '000000', '#19201D', '#433C28', '#1B2531']
	// bg.map(bg=> console.log(bg))
	// background == 1 ? '#521C3C' : 2 ? '#3C2B68' : 3 ? '000000' : 4 ? '#19201D' : 5 ? '#433C28' : '#1B2531'
	return (
		<div
			className={`${position != about ? ' md:pt-0' : ''} ${
				first && 'pt-0'
			}`}
		>
			<div
				className={`${
					position === 2
						? 'flex-col-reverse flex md:flex-row-reverse'
						: 'flex-col-reverse flex md:flex-row'
				} md:flex  md:justify-between  my-0 md:mx-0 md:w-full`}
			>
				<article
					className={` w-full md:w-[50%] bg-[$] py-[30px] md:pt-[100px] px-[20px] md:px-[50px] text-white`}
					style={{ backgroundColor: background }}
				>
					{children}
				</article>
				<img
					src={`/images/courses/${img}`}
					alt={title}
					className='w-full md:w-[50%]'
					// className={`${
					//   second ? 'md:ml-[70px]' : 'md:mr-[72px]'
					// } max-w-6/7 mx-auto md:mx-0 md:max-w-[600px]`}
				/>
			</div>
		</div>
	);
};

const Courses = () => {
	const [courses, setCourses] = useState([]);

	const { data, isInitialLoading, isSuccess, isError } = useFetch(
		`/courses/all-course`,
		'get-courses'
	);

	useEffect(() => {
		if (isSuccess) {
			setCourses(data.courses);
		}
	}, [isSuccess, data]);
	console.log(courses);
	let otherInfo = [
		{
			background: '#521C3C',
			img: 'uiux.avif',
			position: 1,
			courseId: '21197094',
		},
		{
			background: '#1B2531',
			img: 'data.avif',
			position: 2,
			courseId: '83224682',
		},
		{
			background: '#3C2B68',
			img: 'backendweb.avif',
			position: 1,
			courseId: '14246154',
		},
		{
			background: '#000000',
			img: 'fullstack.jpg',
			position: 2,
			courseId: '63748970',
		},
		{
			background: '#19201D',
			img: 'cybersecurity.avif',
			position: 1,
			courseId: '18556101',
		},
		{
			background: '#433C28',
			img: 'frontend.jpg',
			position: 2,
			courseId: '15113559',
		},
		{
			background: '#085937',
			img: 'cloudcom.avif',
			position: 1,
			courseId: '11611476',
		},
		{
			background: '#80054a',
			img: 'digital.jpg',
			position: 2,
			courseId: '83868296',
		},
	];

	const combinedObj = otherInfo.map((item) => {
		// use the objects common identifier, such as "courseId"
		const matchingObject = courses.find(
			(obj) => obj.courseId === item.courseId
		);

		if (matchingObject) {
			// Merge the properties from both arrays
			return { ...item, ...matchingObject };
		}

		return item; // Or handle the case where there is no matching object
	});

	if (isInitialLoading) {
		return <FullLoader />;
	}
	if (isError) {
		return <FullError />;
	}
	return (
		<>
			<Meta />
			<Nav />
			<div className='bg-black'>
				<section className='md:h-[95vh] py-[4rem] md:py-0 flex flex-col items-center justify-center bg-black'>
					<h1 className='font-space font-[700] text-[30px] md:text-[96px] leading-[35px] md:leading-[94.1px] text-[#ffba0e] '>
						Our Courses
					</h1>
					<p
						className='font-dmsans font-[400] text-[24px] mt-[18px] md:mt-[80px] leading-[31.25px] mx-[15px] md:w-[750px] lg:w-[842px] text-white
          '
					>
						Our range of Skill resources will help you Build your
						career with as few bumps as possible. From pitching to
						clients, showing your work, or securing your business’s
						future, we’ve got what you need.
					</p>
				</section>
				<section className='gap-y-[120px] text-white w-screen'>
					{combinedObj.map((course, i) => {
						return (
							<CourseCard
								img={course.img}
								background={course.background}
								key={course.courseId}
								position={course.position}
							>
								<h3 className='font-space font-[700] text-24px] leading-[19px]'>
									{course.name}
								</h3>
								<p className='font-[400] font-dmsans text-[15px] leading-[27px]'>
									{course.description}
								</p>
								<p className='mt-[20px] md:mt-[36px] mb-[8px] font-dmsans font-[500] text-[24px]'>
									Ready to take a career in {course.name}
								</p>
								<div className='flex items-center gap-x-[20px]'>
									<Link
										href={`/courses/${course.urlName}`}
										className='font-sora font-[600] text-[20px] text-primaryPurple leading-[20px]'
									>
										Join us now
									</Link>
									<FiArrowRight className='font-sora font-[600] text-[20px] text-primaryPurple leading-[20px]' />
								</div>
							</CourseCard>
						);
					})}
				</section>
				<section className="px-[20px] md:px-[57px] py-[62px] bg-black md:bg-[url('/images/devcentbg.png')] min-h-[110vh] w-[100vw] overflow-hidden ">
					<div className='md:flex gap-x-[50px] mb-[60px]'>
						<Instructor />
					</div>
				</section>
				<Footer />
			</div>
		</>
	);
};

export default Courses;
