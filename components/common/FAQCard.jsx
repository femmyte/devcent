import { useState } from 'react';
import { FiArrowDown } from 'react-icons/fi';
const FAQCard = ({ title, content }) => {
	const [show, setShow] = useState(false);

	return (
		<div className=' md:min-h-[77px] rounded-[8px] mt-[10px]'>
			<div
				className='px-[2px] md:px-[20px] p-[16px] flex justify-between items-center h-full'
				onClick={() => setShow(!show)}
			>
				<h3
					className={`font-[400] text-[20px] md:text-[32px] leading-[25.52px] font-space text-white text-left`}
				>
					{title}
				</h3>
				<button className='text-white ' onClick={() => setShow(!show)}>
					<FiArrowDown />
				</button>
			</div>

			{show && (
				<div className='text-white text-left rounded-b-[8px]'>
					<div className='py-[16px] pl-[16px] pr-[30px]'>
						{' '}
						<p className='font-[400] text-[16px] md:text-[20px] leading-[25.52px] font-space text-[#9b9b9b] text-left'>
							{content}
						</p>
					</div>
				</div>
			)}
			<div className='w-full h-[1px] bg-[#9b9b9b] mt-[20px] md:mt-[30px] mb-[20px] md:mb-[30px]'></div>
		</div>
	);
};
export default FAQCard;
