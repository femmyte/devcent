import React from 'react'
import { FaUser } from 'react-icons/fa'

const CourseModuleCard = ({number, title, reading, video, instructor, percent, isActive}) => {
  return (
      <div className={`bw-[80%] md:w-[720px] md:h-[80px] flex justify-center items-center rounded-[8px] gap-x-[56px] px-[24px]`} style={{backgroundColor: isActive ? 'white' : '#e0e0e0'}}>
          <div className="w-[64px] h-[64px] rounded-[8px] flex items-center justify-center bg-slate-600">
              <p className='font-space font-[700] text-[32px] leading-[41px]'>{ number}</p>
          </div>
          <div className="w-[188px] flex flex-col items-center justify-center">
              <p className='font-space font-[400] text-[16px] leading-[20px]'>{title}</p>
              <p className='font-space font-[400] text-[14px] leading-[18px]'>{video} videos | {reading} Readings</p>
          </div>
          <div className="w-[188px] flex items-center justify-center gap-x-[7px]">
              <FaUser />
              <p className='font-space font-[400] text-[12px] leading-[15px]'>{instructor}</p>
          </div>
          <div className="w-[188px] flex flex-col items-start justify-center">
              <p className='font-space font-[400] text-[16px] leading-[20px]'>{percent}%  done</p>
              <div className="w-full relative mt-[4px]">
              <div className="w-full bg-[#C7D4E0] h-[10px] rounded-[6px]"></div>
              <div className={` bg-primaryPurple h-[10px] absolute top-0 left-0 rounded-[6px]`} style={{width:`${percent}%`}}></div>
              </div>
          </div>
          <div className="flex items-center justify-center">
              {isActive ? 
                <p className='font-space font-[400] text-[30px] leading-[20px]'>...</p> :
                  <img src="/images/icons/lock.png" alt="" /> 
              }
          </div>
    </div>
  )
}

export default CourseModuleCard