import { MdGridOn, MdToggleOff, MdToggleOn } from 'react-icons/md';
import { IoToggle } from 'react-icons/io5';
const NotificationCard = ({ title, description, state }) => {
	return (
		<div className='flex items-center justify-between pr-[40px] border-b border-[#252424] pb-[19px]'>
			<div className=''>
				<p className='mt-[30px] font-space font-[600] text-[20px] leading-[25.2px] text-white'>
					{title}
				</p>
				<p className='mt-[16px] font-dmsans font-[400] text-[16px] leading-[20.2px] text-[#9b9b9b]'>
					{description}
				</p>
			</div>
			{state ? (
				<MdToggleOn className='text-primaryPurple w-[80px] h-[42px]' />
			) : (
				<MdToggleOff className='text-primaryPurple w-[80px] h-[42px]' />
			)}
		</div>
	);
};
export default NotificationCard;
