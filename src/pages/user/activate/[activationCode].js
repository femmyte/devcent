import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Activate = () => {
	const router = useRouter();
	const { activationCode } = router.query;
	console.log(activationCode);
	const [status, setStatus] = useState('');
	const [activationStatus, setActivationStatus] = useState('');

	useEffect(() => {
		const activateUser = async () => {
			if (!activationCode) {
				setStatus('Activation failed. Invalid activation code.');
				return;
			}

			// const activationCodeRegex = /^[a-zA-Z0-9]{10}$/;
			// if (!activationCodeRegex.test(activationCode)) {
			// 	setStatus('Activation failed. Invalid activation code.');
			// 	return;
			// }

			try {
				const response = await axios.post('/api/users/activate', {
					activationToken: activationCode,
				});
				if (response.data.success === true) {
					setStatus(response.data.message);
					setShowAlert(true);
				}
				setActivationStatus('success');
			} catch (error) {
				setStatus(error.response.data.message);
				// setStatus(
				// 	'Activation failed. Please check your activation link and try again.'
				// );
				setActivationStatus('error');
			}
		};
		activateUser();
	}, [activationCode]);

	const redirectToLogin = () => {
		router.push('/signin');
	};

	return (
		<div className='fixed z-50 inset-0 overflow-y-auto'>
			<div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
				<div className='fixed inset-0 transition-opacity'>
					<div className='absolute inset-0 bg-gray-500 opacity-75'></div>
				</div>
				<span className='hidden sm:inline-block sm:align-middle sm:h-screen'></span>
				&#8203;
				<div className='inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6'>
					<div className='sm:flex sm:items-start'>
						<div className='mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10'>
							<svg
								className='h-6 w-6 text-green-600'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M5 13l4 4L19 7'
								/>
							</svg>
						</div>
						<div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
							<h3 className='text-lg leading-6 font-medium text-gray-900'>
								{status}
							</h3>
							{activationStatus === 'success' && (
								<div className='mt-2'>
									<p className='text-sm leading-5 text-gray-500'>
										Click the link below to log in to your
										account:
									</p>
									<button
										onClick={redirectToLogin}
										className='mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
									>
										Log in
									</button>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Activate;
