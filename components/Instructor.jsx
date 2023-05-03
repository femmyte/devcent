import React from 'react';

const Instructor = ({ name, img, role, description }) => {
	return (
		<div className='md:flex gap-x-[50px] mb-[60px] '>
			<div className='pl-[18px] pt-[30px] bg-[rgba(228, 0, 132, 0.06)] text-white'>
				<div
					className='py-[38px] px-[18px] z-40'
					style={{ background: 'rgba(228, 0, 132, 0.06)' }}
				>
					<img src={`/images/instructor/${img}.png`} alt={name} />
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

export default Instructor;
