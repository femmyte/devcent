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
export default LearnArea;
