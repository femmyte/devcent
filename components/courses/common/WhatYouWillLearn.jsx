import React from 'react';

const LearnArea = ({ number, title, info }) => {
	return (
		<>
			<div className='md:flex justify-between items-center'>
				<div className='flex'>
					<h2 className='font-[700] font-space text-[25px] md:text-[40px] leading-[35px] mr-[15px] md:mr-[30px] text-primaryYellow'>
						{number}
					</h2>
					<p className='font-[700] font-space text-[20px] md:text-[30px] leading-[25px] text-white text-left'>
						{title}
					</p>
				</div>
				<p className='md:w-[580px] font-dmsans font-[400] text-[18px] leading-[35px] text-white text-left'>
					{info}
				</p>
			</div>
			<div className='w-full h-[1px] bg-[#9b9b9b] mt-[20px] md:mt-[30px] mb-[20px] md:mb-[30px]'></div>
		</>
	);
};
const WhatYouWillLearn = ({ description }) => {
	return (
		<section className='px-[20px] md:pl-[50px] pb-[35px] md:py-[35px] bg-black text-center'>
			<h3 className='font-space font-[700] text-[32px] leading-[35.2px] text-center text-primaryYellow mt-[30px] md:mt-[140px]'>
				What you'll learn
			</h3>
			<p className='md:w-[1015px] mx-auto text-center mt-[24px] mb-[20px] font-dmsasns font-[400] text-[20px] leading-[26px] text-[#9b9b9b]'>
				{description}
			</p>
			<div className='py-[30px] md:py-[50px]'>
				<LearnArea
					number='01'
					title='Introduction to UIUX'
					info='Designing tools, identifying good and bad design, design critique, understanding design briefs'
				/>
				<LearnArea
					number='02'
					title='Design-thinking Research'
					info='Designing tools, identifying good and bad design, design critique, understanding design briefs'
				/>
				<LearnArea
					number='03'
					title='Fundamentals of UX Design'
					info='User research.  User flow.  User Stories. User testing. Usability. Information architecture.'
				/>
				<LearnArea
					number='04'
					title=' Elements of  (UI) Design'
					info='Typography. Color. Grids and layout. Atomic design. Design systems. Responsive design. Accessibility.'
				/>
				<LearnArea
					number='05'
					title='High-fidelity Prototypes'
					info='User flows. Low to high fidelity design. Creating interactive prototypes.'
				/>
				<LearnArea
					number='06'
					title='Handoff and documentation'
					info='Documenting design. Handoff workflow. Working with developer. Measuring product success with analytics.'
				/>
				<LearnArea
					number='07'
					title='Projects and career support'
					info='Personal project. Inter-track project. Client Project. Career profile review.'
				/>
			</div>
		</section>
	);
};

export default WhatYouWillLearn;
