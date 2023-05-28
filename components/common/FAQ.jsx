import React, {useState} from 'react'
import { FiArrowDown } from 'react-icons/fi';
const Card = ({ title, content }) => {
  const [show, setShow] = useState(false);

  return (
    <div className=" md:min-h-[77px] rounded-[8px] mt-[10px]">
      <div className="px-[2px] md:px-[20px] p-[16px] flex justify-between items-center h-full">
          <h3
            className={`font-[400] text-[20px] md:text-[32px] leading-[25.52px] font-space text-white text-left`}
          >
            {title}
          </h3>
        <button
          className="text-white "
          onClick={() => setShow(!show)}
        >
          <FiArrowDown />
              </button>
          </div>
          
      {show && (
        <div className="text-white text-left rounded-b-[8px]">
          <div className="py-[16px] pl-[16px] pr-[30px]"> <p className='font-[400] text-[16px] md:text-[20px] leading-[25.52px] font-space text-white text-left'>{content}</p></div>
        </div>
          )}
    <div className="w-full h-[1px] bg-[#9b9b9b] mt-[20px] md:mt-[30px] mb-[20px] md:mb-[30px]"></div>
          
    </div>
  );
};
const FAQ = () => {
  return (
    <section
        id="portfolio"
        className="pt-[59px] px-[20px] md:pl-[64px] pb-[30px] md:pb-[150px] bg-[#0a0909] text-center
      "
      >
        <h3 className="font-space font-[700] text-[32px] leading-[35.2px] text-center text-primaryYellow">
          JOIN US TODAY, LETS MAKE IMPACT TOGETHER
        </h3>
        <p className="md:w-[1015px] mx-auto text-center mt-[20px] md:mt-[40px] mb-[30px] md:mb-[72px] font-dmsasns font-[400] text-[20px] leading-[26px] text-[#9b9b9b]">
          Start your tech journey, transition in to design, build world class products and live the life of your dreams. All of this is possible, join us today!
          </p>
          <div className="md:mx-[100px]">
              <Card title='Do i need to have previous knowledge of graphics design' content='mytext' />
               <Card title='Will the live virtual classes be recorded?' content='' />
               <Card title='Do i have to complete my course to get certified?' content='' />
               <Card title='What is the maximum number of people per cohort' content='' />
               <Card title='Where will i interect with my classmates?' content='' />
               <Card title='Will i be employable at the end of the course' content='' />
               <Card title='How many case studies will be on my portfolio' content='' />
          </div>
          <div className="mt-[30px] md:mt-[80px] px-[20px] md:px-[70px] md:flex gap-x-[80px] items-center">
              <div className="">
                  <p className='font-space font-[400] text-[18px] md:text-[24px] text-white leading-[31px] text-left'>Do you still have questions that weren’t covered in this FAQs? Feel free to send  us a message</p>
                  <textarea name="" id="" className='w-full md:w-[554px] h-[80px] md:h-[200px] bg-[#1F1D1D] text-[#ADADAD] p-[20px] md:mt-[62px] md:mb-[40px] rounded-[20px] md:rounded-[40px]' placeholder='Type in your question'></textarea>
                   <div className="flex flex-row items-center justify-center gap-x-[60px]">
          <button
            className="text-white  bg-primaryPurple py-[10px] md:py-[16px] px-[20px] md:px-[32px] font-space font-bold text-[18px] md:text-[24px] hover:animate-pulse ease-out duration-300 rounded-[5px] my-[20px] md:my-0"
          >
            Send Message
          </button>
          </div>
              </div>
              <div className="">
                  <img src="/images/faq.png" alt="faq" />
              </div>
          </div>
          </section>
  )
}

export default FAQ