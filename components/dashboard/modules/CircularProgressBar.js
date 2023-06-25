import React, { useEffect, useRef, useState } from 'react';
import { useStateContext } from '../../../AuthContext';

const CircularProgressBar = ({ contentItemId }) => {
	const { scrollContainerRef } = useStateContext();
	const [progress, setProgress] = useState(0);
	const progressBarRef = useRef(null);
	const itemRef = useRef(null);

	useEffect(() => {
		const scrollContainer = scrollContainerRef.current;

		const handleScroll = () => {
			const scrollHeight =
				scrollContainer.scrollHeight - scrollContainer.clientHeight;
			const scrollTop = scrollContainer.scrollTop;
			const currentProgress = (scrollTop / scrollHeight) * 100;

			const { top, bottom } = itemRef.current.getBoundingClientRect();
			const isInView = top <= 0 && bottom >= 0;

			if (isInView && currentItemId) {
				setProgress(Math.max(progress, currentProgress));
			}
		};

		const observer = new IntersectionObserver(handleScroll);
		observer.observe(progressBarRef.current);

		return () => {
			observer.disconnect();
		};
	}, [scrollContainerRef, progress, currentItemId]);

	return (
		<div className='progress-bar' ref={progressBarRef}>
			<div
				className='progress-bar-circle'
				style={{
					transform: `rotate(${progress * 3.6}deg)`,
					background: `conic-gradient(#3b82f6 ${progress}%, #e5e7eb 0)`,
				}}
				ref={itemRef}
			></div>
		</div>
	);
};
export default CircularProgressBar;
