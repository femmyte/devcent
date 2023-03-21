import CourseModuleCard from 'components/dashboard/CourseModuleCard'
import React, {useEffect, useState} from 'react'
// import BarChart from '../components/Barchart'
// import PieChart from '../components/PieChart'
import DashboardLayout from '../../../components/dashboard/DashboardLayout'
import courseInfo from '../../../courseInfo'

const DashboardCard = ({ icon, figure, title, middle, bg, textColor }) => (
  <div
    className={`${
      middle && 'mt-[20px] md:my-0'
    } w-[260px] md:w-[300px] h-[90px] md:h-[111px] flex flex-col justify-center text-white dark:border dark:border-gray-200 rounded-[4px] shadow z-10 mb-4 md:mb-0`}
    style={{
      background: `${bg}`,
    }}
  >
    <div className='flex gap-[18px] items-center '>
      <img src={icon} className='mx-[15px] md:mx-[29px]' />
      <div className=''>
        <p className='text-[16px] font-[400] mb-[8px] md:mb-[14px] text-[#8db0c2]'>
          {title}
        </p>
        <p
          className={`text-${textColor} font-[700] text-[18px] md:text-[26px] leading-7`}
          style={{ color: textColor }}
        >
          {figure}
        </p>
      </div>
    </div>
  </div>
)
const overview = () => {
  const [fetchedUsers, setFetchedUsers] = useState({})
  const [course, setCourse] = useState('')
  const [courseInformation, setCourseInformationo] = useState(courseInfo)
  const fetchUser = async () => {
    try {
      const response = await fetch('https://bluealgorithm-api-production.up.railway.app/v1/students')

      const data = await response.json()
      // setFetchedUsers(data);
      // console.log(data)
      setFetchedUsers(data)
      data?.map((user) => setCourse(user.course));
   
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchUser()
  }, [])

  // fetchedUsers.map((course) => setCourse(course))
  return (
    <div>
      <DashboardLayout>
        <div className='dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white pt-[50px] md:pt-0'>
          <div className=' pt-[30px] shadow pb-[30px]dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white md:ml-[20px] pb-[20px]'>
            <div className=' md:flex items-center gap-[15px] px-[25px] pt-[30px] mb-[20px]'>
              {/* <Link href="/total-votes"> */}
              <DashboardCard
                icon='/images/icon/user.png'
                // figure={fetchedUsers?.length}
                title='Registered Students'
                bg='rgba(221,252,220,1)'
                textColor='#1A8F56'
              />
              {/* </Link> */}
              {/* <Link href="/total-votes"> */}
              <DashboardCard
                icon='/images/icon/total.png'
                figure={0}
                title='Total Courses'
                bg='#F6FAFD'
                textColor='#3297EF'
              />
              {/* </Link> */}
              {/* <Link href="/total-votes"> */}
              {/* <DashboardCard
                icon='/images/icon/user.png'
                figure={0}
                title='Total Paid Out'
                bg='#FDF7F2'
                textColor='#B65800'
              /> */}
              {/* </Link> */}
            </div>
            <div className=''>
              {
                courseInformation.map(info => {
                  const {number, title, reading, video,instructor, percent, isActive} = info
                  return (
                    <div className="py-[12px]">
                      <CourseModuleCard number={number} title={title} reading={reading} video={video} instructor={instructor} percent={percent}  isActive={isActive} />
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </DashboardLayout>
    </div>
  )
}

export default overview
