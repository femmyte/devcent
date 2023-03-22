import React, {useState} from 'react'
import GoogleButton from '../../components/GoogleButton'
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
    // Retrieve the session and router so that we can navigate
  // the user back home if they are already authenticated
  const { status } = useSession();
  const router = useRouter();

  // If the user is authenticated, redirect them to the home
  // page
  if (status === "authenticated") {
    router.replace("/");
  }
  return (
    <div className='bg-[#1d171a] min-h-[100vh] py-[30px] md:py-[70px]'>
      <div className='flex flex-col items-center justify-center '>
        <img src="/images/logo.png" alt="devcent logo" className='mb-[18px]' />
          <div className="bg-white w-[90%] px-[12px] md:w-[448px] rounded-lg flex flex-col items-center justify-between">
              <p className='text-[24px] text-primaryPurple font-[700] font-dmsans leading-[31.25px] mt-[24px]'>Signup</p>

           <GoogleButton />
        <div className="flex items-center justify-center mb-[27px]">
          <img src="/images/line.png" alt="" className='hidden md:block' />
          <p className='mx-[24px] font-[400] font-dmsans text-[12px]'>Or sign up with</p>
          <img src="/images/line.png" alt="" className='hidden md:block' />
        </div>
        <div className="mb-[13px]">
          <label htmlFor="email">Email</label>
          <div className="dark:text-gray-200  dark:hover:text-white flex w-full md:w-[379px] h-[45px] pl-[16px] items-center border border-[#cfcfcf] bg-white rounded-lg mt-[3px]">
            <img src='/images/icons/email.png' alt='email' />
    <input
      type="text"
      className="p-2 bg-white outline-none w-[100%] text-[16px] rounded-r-lg"
          onChange={(e)=>setEmail(e.target.value)}
      name={email}
      value={email}
    />
  </div>
        </div>
        <div className="mb-[13px]">
          <label htmlFor="password">Password</label>
          <div className="dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white flex w-full md:w-[379px] h-[45px] pl-[16px] items-center border border-[#cfcfcf] bg-transparent rounded-lg mt-[3px]">
            <img src='/images/icons/password.png' alt='ps' />
    <input
      type="password"
              className="p-2 bg-transparent outline-none active:bg-transparent placeholder:bg-transparent fill-transparent w-[100%] text-[16px] rounded-r-lg "
              id='password'
          onChange={(e)=>setPassword(e.target.value)}
      name={password}
      value={password}
    />
  </div>
        </div>
        <p className='my-[30px] font-[400] font-dmsans text-[14px] leading-[18px] text-black md:w-[393px]   '>By signing up, you confirm that you've read and accepted our <Link href='' className='text-primaryPurple'>Terms of Service</Link> and  <Link href='' className='text-primaryPurple'>Privacy Policy.</Link> We will also subscribe you to our Level Up newsletter. You can unsubscribe at anytime.</p>
         <button className="mb-[35px] text-white bg-[#E40084] w-[160px] h-[47px] font-[700] font-source text-[18px] rounded-lg  hover:bg-primaryYellow hover:animate-pulse ease-out duration-300 ">
             Sign up
        </button>
        <p className='mb-[30px] font-[400] font-dmsans text-[14px] leading-[18px] text-black text-center '>Already registered? <Link href='/signin' className='text-primaryPurple'>Login</Link></p>
        </div>
        </div>
    </div>
  )
}

export default Signup