import React from 'react';
const Tools = ({ children }) => {
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
				{children}
			</div>
		</section>
	);
};

export default Tools;
