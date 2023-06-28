import React from 'react';
import ToolsCard from './ToolsCard';
const Tools = () => {
	return (
		<section
			id='tools'
			className='pt-[10px] px-[20px] md:px-[180px] pb-[35px] bg-black text-center
      '
		>
			<h3 className='font-space font-[700] text-[32px] leading-[35.2px] text-center text-primaryYellow'>
				MASTER DESIGN AND COLLABORATIVE TOOLS
			</h3>
			<p className='mx-auto text-center mt-[20px] mb-[25px] md:mb-[130px] font-dmsasns font-[400] text-[20px] leading-[26px] text-[#9b9b9b]'>
				Learn and master design and collaborative tools to empower you
				on your UiUx design career journey
			</p>
			<div className='md:grid grid-cols-3 gap-x-[100px] mb-[20px]'>
				<ToolsCard
					title='Figma'
					img='figma'
					details='Figma is a design and prototyping tool used for user interface (UI) and user experience (UX) design. It allows designers to create, collaborate, and share designs with team members in real-time.'
				/>
				<ToolsCard
					title='Google Forms'
					img='form'
					details='Google Forms is a free online survey and questionnaire creation tool that allows designers to quickly and easily create custom forms to collect qualitative and quantitative data from users.'
				/>
				<ToolsCard
					title='Notion'
					img='notion'
					details='Notion is an all-in-one workspace and productivity tool that allows you to manage and organize your  tasks. it  has features such as note-taking , project management software, and databases.'
				/>
				<ToolsCard
					title='Google Meet'
					img='figma'
					details='Google Meet is a video conferencing and collaboration tool. It allows you to conduct virtual meetings, interviews, and presentations with individuals or groups no matter where you are.'
				/>
				<ToolsCard
					title='Miro'
					img='mirro'
					details='Miro  is a collaborative online whiteboard platform designed to help teams collaborate and communicate in real-time. It allows teams to brainstorm, design, plan projects, and more.'
				/>
			</div>
		</section>
	);
};

export default Tools;
