import Grid from 'components/common/Grid';
import React, { useState } from 'react';
import { FcPlus } from 'react-icons/fc';

const Card = ({ title, btnText, icon, children }) => {
	const [show, setShow] = useState(false);

	return (
		<div className=' min-h-[77px] rounded-[8px] bg-[#c8c8c8] mt-[10px]'>
			<div className='px-[20px] p-[16px] flex justify-between items-center h-full'>
				<div className='flex gap-x-[27px] items-center'>
					{/* <FcPlus color="#E40084" /> */}
					<img src='/images/icons/plus.png' alt='' />
					<h3
						className={`${
							show
								? 'text-[24px] font-[700] leading-[30.62px]'
								: 'font-[400] text-[20px] leading-[25.52px] '
						} font-space text-primaryPurple`}
					>
						{title}
					</h3>
					{icon && <img src='/images/icons/move.png' alt={icon} />}
				</div>
				<button
					className='px-[20px] py-[10px] text-[20px] font-[700] font-space leading-[25.52px] text-[#3f3d3d] border border-[#3f3d3d]'
					onClick={() => setShow(!show)}
				>
					{btnText}
				</button>
			</div>
			{show && (
				<div className=' bg-[#F3F2F2] text-left rounded-b-[8px]'>
					<div className='py-[16px] pl-[16px] pr-[30px]'>
						{children}
					</div>
				</div>
			)}
		</div>
	);
};
const TestimonyCard = ({ image, name, title, info }) => {
	return (
		<div className='bg-[#1F1D1D] px-[12px] md:px-[12px] py-[15px] md:py-[24px] rounded-[16px] text-white mb-[20px] md:mb-[40px]'>
			<div className='flex items-center'>
				<img src={`/images/testimony/${image}.png`} alt='' />
				<div className='ml-[16px]'>
					<h3 className='font-[700] font-space text-[24px] leading-[31px] text-left'>
						{name}
					</h3>
					<p className='font-[500] font-space text-[16px] leading-[31px] mt-[2px] mb-[17px] text-left'>
						{title}
					</p>
				</div>
			</div>
			<p className='font-[400] font-space text-[16px] leading-[31px] text-left'>
				{info}
			</p>
		</div>
	);
};
const AlumniTestimony = ({ title, description, showVideo }) => {
	return (
		<div
			id='schedule'
			className='py-[30px] bg-black text-center
      '
		>
			<h3 className='font-space font-[700] text-[32px] leading-[35.2px] text-center text-primaryYellow'>
				{title}
			</h3>
			<p className='md:w-[1015px] mx-[20px] md:mx-auto text-center my-[20px] font-dmsasns font-[400] text-[20px] leading-[26px] text-[#9b9b9b]'>
				{description}
			</p>
			{showVideo && (
				<div className="relative bg-[url('/images/alumnitestimonybg.png')] h-[80vh] md:min-h-[120vh] w-full bg-cover bg-center overflow-hidden">
					{/* <img src="/images/alumnitestimonybg.png" alt="alumnitestimonybg" /> */}
					<div
						className='absolute top-[1px] left-0 right-0 bottom-0 h-[80vh] md:min-h-[120vh] w-[95vw] md:w-[70vw] mx-auto z-[1]'
						style={{
							background: 'rgba(0, 0, 0, 0.2)',
						}}
					/>
					<div className='relative flex flex-col items-center justify-center w-[95vw] md:w-[70vw] h-[80v] md:h-[120vh] mx-auto'>
						<img src='/images/icons/video.png' alt='video icon' />
						<p className='font-space font-[500] text-[18px] md:text-[24px] leading-[40px]text-center text-white mt-[30px] md:mt-[56px] mb-[30px] md:mb-[80px]'>
							“I was able to achieve my dreams and become the
							designer i’ve always dreamed to be thanks to
							Devcent”
						</p>
						<p className='font-space font-[700] leading-[40px] text-center text-[30px] md:text-[40px]'>
							- Mojoyin
						</p>
						<p className='font-space font-[500] text-[24px] leading-[40px]text-center text-white'>
							UiUx Designer
						</p>
					</div>
				</div>
			)}
			<section className='mx-[20px] md:mx-[40px] my-[20px] md:my-[40px]'>
				<Grid>
					<TestimonyCard
						image='isaac'
						name='Isaac Olorunfemi'
						title='UiUx Designer'
						info=' Devcent helped me build strong confidence in my design skills. It was a really lovely and insightful experience. I met really interesting people who are fun to talk to.'
					/>
					<TestimonyCard
						image='vivian'
						name='Vivian Anyawu'
						title='UiUx Designer'
						info="Devcent is so much more; it's a supportive community that feels like home. The instructors genuinely care about your success and go above and beyond to ensure you understand the material. The friendships I formed with fellow learners have been invaluable."
					/>
					<TestimonyCard
						image='esther'
						name='Esther Ayodele'
						title='UiUx Designer'
						info='Their commitment to quality is unmatched. The courses are meticulously designed and taught by industry professionals. The knowledge I gained from Devcent has been instrumental in my career growth, and I continue to rely on their resources and community for ongoing learning and networking opportunities.'
					/>
					<TestimonyCard
						image='leonard'
						name='Leonard Victor'
						title='UiUx Designer'
						info='The courses are well-structured, the instructors are knowledgeable, and the support from the Devcent team is outstanding. Thanks to Devcent, I gained the skills and confidence to land my dream job in the tech industry'
					/>
					<TestimonyCard
						image='sanni'
						name='Sanni Mustapha'
						title='UiUx Designer'
						info="I had limited coding experience, but Devcent's beginner-friendly approach made it easy for me to grasp complex concepts. The interactive learning environment and hands-on projects helped me apply my knowledge effectively. I highly recommend Devcent to anyone looking to kickstart their tech career."
					/>
					<TestimonyCard
						image='daniel'
						name='Daniel Ifeanyi'
						title=" Devcent's online platform provided me the flexibility to learn at my own pace, which was crucial while juggling a full-time job. Thanks to Devcent, I was able to upskill and transition into a new tech role."
					/>
					<TestimonyCard
						image='amoebi'
						name='Ameobi Jemima'
						title='UiUx Designer'
						info='The Devcent community is incredible! I connected with fellow learners from around the world, allowing me to gain diverse perspectives and collaborate on exciting projects.'
					/>
					<TestimonyCard
						image='akanni'
						name='Akanni Hassan'
						title='UiUx Designer'
						info="Devcent's data science course transformed my career. The curriculum covered all essential topics, and the hands-on exercises helped me build a strong foundation. The instructors were passionate and provided invaluable guidance throughout my learning journey."
					/>
					<TestimonyCard
						image='buhari'
						name='Buhari Raheemat'
						title='UiUx Designer'
						info="I am super grateful for the support I received from the Devcent team. Whenever I had questions or faced challenges, they were there to provide assistance and guidance. I couldn't be happier with my decision to join Devcent."
					/>
				</Grid>
			</section>
		</div>
	);
};

export default AlumniTestimony;
