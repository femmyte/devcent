import React from 'react';
import Grid from '../Grid';
import ToolsCard from './ToolsCard';

const WhyDevcent = () => {
	return (
		<div className='pt-[10px] md:pt-[35px] px-[20px] md:px-[80px]  pb-[35px] bg-black text-center'>
			<h3 className='font-space font-[700] text-[32px] leading-[35.2px] text-center text-primaryYellow'>
				WHY SHOULD YOU CHOOSE DEVECNT
			</h3>
			<p className='mx-auto text-center mt-[40px] mb-[25px] md:mb-[130px] font-dmsasns font-[400] text-[20px] leading-[26px] text-[#9b9b9b] md:px-[100px]'>
				"At Devcent, we take pride in our ability to produce world-class
				designers through our course. The course is instructed by
				industry leaders and employs a project-based learning model,
				guaranteeing students gain practical experience in crafting
				digital products."
			</p>
			<Grid>
				<ToolsCard
					img='rectangle'
					title='Flexible Classes'
					details='Learn at your own pace as our classes are flexible, giving you the opportunity to pick between physical or online classes.'
				/>
				<ToolsCard
					img='rectangle'
					title='Excellent Tutors'
					details='Our instructors are world class designers with years of experience teaching and doing designs for various industries.'
				/>
				<ToolsCard
					img='rectangle'
					title='Certification'
					details='You’d get  certified at the end of the course with industry standardized skills and globally recognized certificate.'
				/>
				<ToolsCard
					img='rectangle'
					title='Personal Mentorship'
					details='We’ll provide you with all the help  you need every step of the way in order to complete your course with our one-on-one mentorship.'
				/>
				<ToolsCard
					img='rectangle'
					title='Vibrant Community'
					details='Interact and learn with other learners like you, get feedback from other learners and expand your network as you progress in the course.'
				/>
				<ToolsCard
					img='rectangle'
					title='Career Guidance'
					details='While at your course, you’d get the opportunity to get advice from our team of professionals to help you kick start your design career.'
				/>
				<ToolsCard
					img='rectangle'
					title='Case Studies'
					details='During the course, you’d set up your portfolio in accordance with industry standard. Not to worry, we’d be with you all the way.'
				/>
				<ToolsCard
					img='rectangle'
					title='Portfolio'
					details='During the course, you’d set up your portfolio in accordance with industry standard. Not to worry, we’d be with you all the way.'
				/>
				<ToolsCard
					img='rectangle'
					title='Job Application'
					details='During the course, you’d set up your portfolio in accordance with industry standard. Not to worry, we’d be with you all the way.'
				/>
			</Grid>
		</div>
	);
};

export default WhyDevcent;
