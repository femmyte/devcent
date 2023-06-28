import React from 'react';

const InstructorCard = ({ name, img, role, description }) => {
	return (
		<div className='md:flex gap-x-[50px] mb-[60px] '>
			<div className='pl-[18px] pt-[30px] bg-[rgba(228, 0, 132, 0.06)] text-white'>
				<div
					className='py-[38px] px-[18px] z-40'
					style={{ background: 'rgba(228, 0, 132, 0.06)' }}
				>
					<img
						src={`/images/instructor/${img}.png`}
						className='rounded-[50%]'
						alt={name}
					/>
					<p className='my-[19px] font-space font-[700] text-[25px] leading-[28px]'>
						{name}
					</p>
					<p className='mb-[19px] font-space font-[700] text-[25.75px] leading-[28.33px]'>
						{role}
					</p>
					<p className='font-inter font-[700] text-[16.09px] leading-[22.53px]'>
						{description}
					</p>
				</div>
			</div>
		</div>
	);
};
const Instructor = () => {
	return (
		<section className='px-[20px] md:px-[57px]  bg-black  '>
			<h3 className='font-space font-[700] text-[32px] leading-[35.2px] text-center text-primaryYellow'>
				LEARN WITH THE BEST
			</h3>
			<p className='md:w-[1015px] mx-[20px] md:mx-auto text-center mt-[40px] font-dmsasns font-[400] text-[20px] leading-[26px] text-[#9b9b9b] mb-[20px]'>
				Our instructors are seasoned with plenty of knowledge as well as
				good cheer. With over 20+ years of combined experience, you’re
				sure to be equipped with core design skills needed to excel.
			</p>
			<div className="md:bg-[url('/images/devcentbg.png')] min-h-[100vh] bg-no-repeat overflow-hidden">
				<div className='md:flex gap-x-[50px] mb-[60px] '>
					<InstructorCard
						img='mary'
						name='Mariam Omotola'
						role='UI Designer, DevCent'
						description="Mariam has enjoyed working in UX design across a variety of domains at Google, from YouTube, to technical cloud platforms. She is particularly interested in bringing a human touch to products. She received her Master's in Human Computer Interaction from The University of Michigan."
					/>
					<InstructorCard
						img='tosin'
						name='Fakile Tosin'
						role='UI Designer, Tinacle'
						description="Tosin has enjoyed working in UX design across a variety of domains at Google, from YouTube, to technical cloud platforms. He is particularly interested in bringing a human touch to products. She received her Master's in Human Computer Interaction from The University of Michigan."
					/>
					<InstructorCard
						img='alalade'
						name='Olanrewaju Alalade'
						role='UI Designer, DevCent'
						description="Olanrewaju has enjoyed working in UX design across a variety of domains at Google, from YouTube, to technical cloud platforms. He is particularly interested in bringing a human touch to products. She received her Master's in Human Computer Interaction from The University of Michigan."
					/>
				</div>
			</div>
		</section>
	);
};
export default Instructor;
