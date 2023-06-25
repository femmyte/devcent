import React, { useEffect, useState } from 'react';
import { useStateContext } from '../../../AuthContext';
const CircularProgressBar = () => {
	const [progress, setProgress] = useState(0);
	const [prevScrollTop, setPrevScrollTop] = useState(0);
	const { scrollContainerRef } = useStateContext();
	// console.log(scrollContainerRef.current.scrollHeight);
	useEffect(() => {
		const handleScroll = () => {
			const scrollContainer = scrollContainerRef.current;
			const scrollHeight =
				scrollContainer.scrollHeight - scrollContainer.clientHeight;
			const scrollTop = scrollContainer.scrollTop;
			const currentProgress = (scrollTop / scrollHeight) * 100;

			// Update progress only if scrolling down or if it's the first scroll
			if (currentProgress > progress || currentProgress === 0) {
				setProgress(Math.max(progress, currentProgress));
			}
		};

		const scrollContainer = scrollContainerRef?.current;
		scrollContainer?.addEventListener('scroll', handleScroll);
		return () => {
			scrollContainer?.removeEventListener('scroll', handleScroll);
		};
	}, [scrollContainerRef, progress]);

	return (
		<div className='progress-bar'>
			<div
				className='progress-bar-circle'
				style={{
					transform: `rotate(${progress * 3.6}deg)`,
					background: `conic-gradient(#3b82f6 ${progress}%, #e5e7eb 0)`,
				}}
			></div>
		</div>
	);
};

export default CircularProgressBar;
