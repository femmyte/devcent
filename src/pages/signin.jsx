import React, { useEffect, useState } from 'react';
import GoogleButton from '../../components/GoogleButton';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import Alert from '../../components/dashboard/Alert';
import Image from 'next/image';
const Signin = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);
	const [isOpen, setIsOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (isLoading) {
			return; // Prevent duplicate requests while one is already in progress
		}

		setIsLoading(true);
		try {
			const result = await signIn('credentials', {
				email: email,
				password: password,
				redirect: false,
			});
			if (result.ok === false) {
				if (result.error === 'activate') {
					setError(
						'You need to Activate your account before you can login, An Activation Link has been sent to your email Address'
					);
					setIsOpen(true);
				} else {
					setError(result.error);
					setIsOpen(true);
				}
			}
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};
	// Retrieve the session and router so that we can navigate
	// the user back home if they are already authenticated
	const { status } = useSession();
	const router = useRouter();

	// If the user is authenticated, redirect them to the home
	// page
	if (status === 'authenticated') {
		router.replace('/auth/overview');
	}
	useEffect(() => {
		setTimeout(() => {
			setIsOpen(false);
		}, 5000);
	}, [isOpen]);
	return (
		<div className='bg-[#1d171a] py-[20px] min-h-[100vh]'>
			<div className='flex flex-col items-center justify-center '>
				<img
					src='/images/logo.png'
					alt='devcent logo'
					className='mb-[18px]'
				/>
				<div className='bg-white w-[90%] md:w-[448px] rounded-lg '>
					{isOpen && (
						<Alert
							type='error'
							title={error}
							isOpen={isOpen}
							setIsOpen={setIsOpen}
							// message='Check your email address for your verification code'
						/>
					)}
					<div className='px-[12px] flex flex-col items-center justify-between'>
						<p className='text-[24px] text-primaryPurple font-[700] font-dmsans leading-[31.25px] mt-[24px]'>
							Login
						</p>
						<GoogleButton />
						<div className='flex items-center justify-center mb-[15px] md:mb-[27px]'>
							<img
								src='/images/line.png'
								alt=''
								className='hidden md:block'
							/>
							<p className='mx-[24px] font-[400] font-dmsans text-[12px]'>
								Or login with
							</p>
							<img
								src='/images/line.png'
								alt=''
								className='hidden md:block'
							/>
						</div>
						<div className='mb-[13px]'>
							<label htmlFor='email'>Email</label>
							<div className='dark:text-gray-200  dark:hover:text-white flex w-full md:w-[379px] h-[45px] pl-[16px] items-center border border-[#cfcfcf] bg-white rounded-lg mt-[3px]'>
								<img
									src='/images/icons/email.png'
									alt='email'
								/>
								<input
									type='text'
									className='p-2 bg-white outline-none w-[100%] text-[16px] rounded-r-lg border-none'
									onChange={(e) => setEmail(e.target.value)}
									name={email}
									value={email}
								/>
							</div>
						</div>
						<div className='mb-[13px]'>
							<label htmlFor='password'>Password</label>
							<div className='dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white flex w-full md:w-[379px] h-[45px] pl-[16px] items-center border border-[#cfcfcf] bg-transparent rounded-lg mt-[3px]'>
								<img
									src='/images/icons/password.png'
									alt='password'
								/>
								<input
									type='password'
									className='p-2 bg-transparent outline-none active:bg-transparent placeholder:bg-transparent fill-transparent w-[100%] text-[16px] rounded-r-lg border-none'
									id='password'
									onChange={(e) =>
										setPassword(e.target.value)
									}
									name={password}
									value={password}
								/>
							</div>
						</div>
						<div className='w-full md:w-[379px] md:flex items-center justify-between mt-[11px] mb-[41px]'>
							<div className=''>
								<input
									type='checkbox'
									name='stayLogin'
									id='login'
								/>
								<label
									htmlFor='login'
									className='font-[400] font-dmsans text-[14px] leading-[18px] text-black md:w-[393px] ml-[12px]  '
								>
									Stay logged in
								</label>
							</div>
							<Link href='' className='text-primaryPurple'>
								Forgot your password?
							</Link>
						</div>
						<button
							className='mb-[35px] text-white bg-[#E40084] w-[160px] h-[47px] font-[700] font-source text-[18px] rounded-lg  hover:bg-primaryYellow hover:animate-pulse ease-out duration-300 '
							onClick={handleSubmit}
							disabled={isLoading}
						>
							{isLoading ? 'Loading...' : 'Login'}
						</button>
						<p className='mb-[30px] font-[400] font-dmsans text-[14px] leading-[18px] text-black text-center '>
							Don’t have an account?{' '}
							<Link href='/signup' className='text-primaryPurple'>
								Sign Up
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signin;
