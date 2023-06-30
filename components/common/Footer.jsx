import React from "react";

const Footer = () => {
  return (
    <div>
      <div
        className="h-[10px] w-screen"
        style={{
          background:
            "linear-gradient(rgba(228, 0, 132, 0.33) 0%, rgba(255, 186, 14, 0.71) 100%",
        }}
      ></div>
      <div className="relative bg-[url('/images/footerbg.png')] min-h-auto bg-cover bg-center overflow-hidden pt-[50px]">
        {/* <div className="absolute top-[1px] left-0 right-0 bottom-0 min-h-[100vh] z-[1]" /> */}

        <div className="lg:flex gap-[30px] px-[25px] md:px-[50px] pt-[20px] md:pt-[100px] justify-between   text-white">
          <div className="flex flex-col justify-center items-center mb-[50px] md:flex-[30%]">
            <img src="/images/logo.png" alt="devcent logo" className="" />
            <p className="text-[#9b9b9b] font-[400] font-dmsans text-[16px] mt-[24px] text-center">
              We are a dedicated IT Training Establishment . We have excelled in
              IT Training/Education, IT Consultancy and IT Solutions
              Development.
            </p>
          </div>

          <div className="flex px-[15px] justify-between flex-wrap md:flex-[70%] text-white">
            <div className="md:w-[101px] mb-[20px] md:mb-0">
              <h3 className="font-[700] font-space text-[20px] leading-[22px]">
                Company
              </h3>
              <ul className="text-[#9b9b9b]">
                <li className="mt-[18px] hover:cursor-pointer font-dmsans font-[400] leading-[22px]">
                  Home
                </li>
                <li className="mt-[18px] hover:cursor-pointer font-dmsans font-[400] leading-[22px]">
                  Resources
                </li>
                <li className="mt-[18px] hover:cursor-pointer font-dmsans font-[400] leading-[22px]">
                  About
                </li>
                <li className="mt-[18px] hover:cursor-pointer font-dmsans font-[400] leading-[22px]">
                  Community
                </li>
                <li className="mt-[18px] hover:cursor-pointer font-dmsans font-[400] leading-[22px]">
                  Career
                </li>
              </ul>
            </div>
            <div className="w-[127px]">
              <h3 className="font-[700] font-space text-[20px] leading-[22px]">
                Information
              </h3>
              <ul className="text-[#9b9b9b]">
                <li className="mt-[18px] hover:cursor-pointer font-dmsans font-[400] leading-[22px]">
                  Career
                </li>
                <li className="mt-[18px] hover:cursor-pointer font-dmsans font-[400] leading-[22px]">
                  Accessibility
                </li>
                <li className="mt-[18px] hover:cursor-pointer font-dmsans font-[400] leading-[22px]">
                  Privacy Policy
                </li>
                <li className="mt-[18px] hover:cursor-pointer font-dmsans font-[400] leading-[22px]">
                  Sitemap
                </li>
                <li className="mt-[18px] hover:cursor-pointer font-dmsans font-[400] leading-[22px]">
                  Support
                </li>
              </ul>
            </div>
            <div className="mt-[30px] md:mt-0 md:w-[354px] text-center md:text-left">
              <h3 className="font-[700] font-space text-[20px] leading-[22px] mb-[29px]">
                Get in Touch
              </h3>
              <div className="flex justify-center md:justify-start items-center gap-x-[15px] md:gap-x-[30px] mb-[29px]">
                <img src="/images/icons/location.png" alt="" />
                <p className="text-[#9b9b9b] font-dmsans font-[400] leading-[22px] text-center">
                  By Lyceum, road 1 house 2, Seidu Ayodeji Balogun street, Gra
                  Ibara housing Estate, Abeokuta
                </p>
              </div>
              <div className="flex justify-center md:justify-start items-center gap-x-[15px] md:gap-x-[30px] mb-[15px] md:mb-[29px]">
                <img src="/images/icons/mail.png" alt="" />
                <div className="text-[#9b9b9b]">
                  <p className="font-dmsans font-[400] leading-[22px] md:mb-[16px]">
                    info@devcent.net
                  </p>
                  <p className="font-dmsans font-[400] leading-[22px]">
                    devcentng@gmail.com
                  </p>
                </div>
              </div>
              <div className="text-[#9b9b9b] flex justify-center md:justify-start items-center gap-x-[15px] md:gap-x-[30px] mb-[29px]">
                <img src="/images/icons/phone.png" alt="" />
                <div className="">
                  <p className="font-dmsans font-[400] leading-[22px] md:mb-[16px]">
                    1+234 8039-55-4311
                  </p>
                  <p className="font-dmsans font-[400] leading-[22px]">
                    +234 9041-47-7101
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[70px] md:ml-[170px] flex justify-center md:justify-start gap-x-[20px]">
          <img
            src="/images/icons/facebook.png"
            alt="facebook"
            className="w-[25px]"
          />
          <img
            src="/images/icons/instagram.png"
            alt="instagram"
            className="w-[25px]"
          />
          <img
            src="/images/icons/twitter.png"
            alt="twitters"
            className="w-[25px]"
          />
        </div>
        <p className="mb-[20px] mt-[20px] md:mt-[6px]font-space font-[700] leading-[33px] md:leading-[22px] text-center text-white">
          Copyright © {new Date().getFullYear()} Devcent Trainings
        </p>
      </div>
    </div>
  );
};

export default Footer;
