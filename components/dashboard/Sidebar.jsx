import React from 'react'
import { SiShopware } from 'react-icons/si'
import { MdOutlineCancel } from 'react-icons/md'
import { FiLogOut, FiSettings } from 'react-icons/fi'
import { links } from '../../links'
import Link from 'next/link'
import { useStateContext } from '../../AuthContext'
import { signOut } from 'next-auth/react'

const Sidebar = () => {
  let { activeMenu, setActiveMenu, screenSize, logout, login } =
    useStateContext()

  const handleCloseSidebar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false)
    }
  }
  // private $servername = "ftp.alfaahizuunschools.com";
  const activeLink =
    'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg bg-blue-500 text-white text-md m-2'
  const normalLink =
    'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-[#8C8D8E] font-[400] text-[16px] dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'
  return (
    <div className='h-screen overflow-y-auto md:overflow-x-hidden  md:hover:overflow-y-auto pb-[10px] w-[218px] bg-[#101010]'>
      {activeMenu && (
        <>
          <div className='flex justify-between items-center'>
            <Link
              href='/overview'
              onClick={handleCloseSidebar}
              className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900'
            >
              <img
                src='/images/logo.png'
                alt='Devcent Logo'
                className='max-w-[200px]'
              />
              {/* <span>Prompay</span> */}
            </Link>
            <button
              type='button'
              onClick={() => setActiveMenu((prevState) => !prevState)}
              className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden'
            >
              <MdOutlineCancel />
            </button>
          </div>
          <div className='mt-5 w-[225px]'>
            {links.map((item) => (
              <div key={item.title}>
                {/* <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p> */}

                {item.links.map((link) => {
                  return (
                    <Link
                      href={`/auth/${link.name}`}
                      key={link.name}
                      onClick={handleCloseSidebar}
                      className={activeMenu ? normalLink : activeLink}
                    >
                      {link.icon}
                      <span className='capitalize font-space font-[500] text-[14px] '>
                        {/* {link.name == '/' ? 'overview' : link.name} */}
                        {link.name}
                      </span>
                    </Link>
                  )
                })}
              </div>
            ))}
          </div>
        </>
      )}
      <button
        onClick={()=>signOut()}
        className="flex items-center w-[90%] gap-x-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md  mt-[40px]"
      >
        <FiSettings />
        <span className="capitalize">Settings</span>
      </button>
      <button
        onClick={()=>signOut()}
        className="flex items-center w-[90%] gap-x-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md "
      >
        <FiLogOut />
        <span className="capitalize">logout</span>
      </button>
    </div>
  )
}

export default Sidebar
