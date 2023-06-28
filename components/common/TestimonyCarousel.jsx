import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';

export default function TestimonyCarousel(props) {
	var items = [
		{
			name: 'Buhari Raheemat',
			description:
				"I am super grateful for the support I received from the Devcent team. Whenever I had questions or faced challenges, they were there to provide assistance and guidance. I couldn't be happier with my decision to join Devcent.",
			img: 'buhari',
			stack: 'UI/UX',
		},
		{
			name: 'Isaac Olorunfemi',
			description:
				'Devcent helped me build strong confidence in my design skills. It was a really lovely and insightful experience. I met really interesting people who are fun to talk to.',
			img: 'isaac',
			stack: 'Product Designer',
		},
		{
			name: 'Vivian Anyawu',
			description:
				"Devcent is so much more; it's a supportive community that feels like home. The instructors genuinely care about your success and go above and beyond to ensure you understand the material. The friendships I formed with fellow learners have been invaluable.",
			img: 'vivian',
			stack: 'Data Scientist',
		},
		{
			name: 'Esther Ayodele',
			description:
				'Their commitment to quality is unmatched. The courses are meticulously designed and taught by industry professionals. The knowledge I gained from Devcent has been instrumental in my career growth, and I continue to rely on their resources and community for ongoing learning and networking opportunities.',
			img: 'esther',
			stack: 'Full Stack',
		},
		{
			name: 'Leonard Victor',
			description:
				'The courses are well-structured, the instructors are knowledgeable, and the support from the Devcent team is outstanding. Thanks to Devcent, I gained the skills and confidence to land my dream job in the tech industry',
			img: 'leonard',
			stack: 'Full Stack',
		},

		{
			name: 'Sanni Mustapha',
			description:
				"I had limited coding experience, but Devcent's beginner-friendly approach made it easy for me to grasp complex concepts. The interactive learning environment and hands-on projects helped me apply my knowledge effectively. I highly recommend Devcent to anyone looking to kickstart their tech career.",
			img: 'sanni',
			stack: 'Full Stack',
		},
	];

	return (
		<Carousel className='w-full h-full' animation='slide'>
			{items.map((item, i) => (
				<Item key={i} item={item} />
			))}
		</Carousel>
	);
}

function Item(props) {
	return (
		<div className='w-full my-5 flex flex-col items-center justify-center h-full'>
			<p className='mt-[30px] md:mt-[100px] mb-[30px] md:mb-[74px] font-dmsans font-[400] text-[18px] md:text-[27px] leading-[30px] md:leading-[45px] text-center mx-[15px] md:w-[748px]'>
				{props.item.description}
			</p>
			<img src={`/images/testimony/${props.item.img}.png`} alt='' />
			<p className='mt-[13px] mb-[8px] text-[18.95px] font-[700] font-space'>
				{props.item.name}
			</p>
			<p className='font-dmsans font-[400] text-[18.95px] leading-[24.6px] mb-[20px]'>
				{props.item.stack}
			</p>

			{/* <Button className='CheckButton'>Check it out!</Button> */}
		</div>
	);
}
