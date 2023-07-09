const Card = ({ name, date, first, type }) => {
	return (
		<div
			className={`${
				first && 'bg-[#323131] '
			} flex flex-wrap md:flex-nowrap w-full gap-y-[20px] justify-between mt-[40px] py-[16px] px-[8px] items-center`}
		>
			<p className='font-space font-[700] text-[16px] leading-[20px] text-white'>
				{name}
			</p>
			<p className='font-space font-[700] text-[16px] leading-[20px] text-white'>
				{date}
			</p>
			<button className=' py-[8px] px-[16px] rounded-lg border border-primaryPurple font-dmsans font-[500] text-[24px] hover:bg-primaryPurple mx-auto md:mx-0'>
				Get {type}
			</button>
		</div>
	);
};
export default Card;
