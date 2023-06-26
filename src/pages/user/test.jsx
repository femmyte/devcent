import withStudentAuth from "components/auth/withStudentAuth";
import DashboardLayout from "components/dashboard/DashboardLayout";
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const options = [
  {
    a: "Useful",
    b: "Amusing",
    c: "Enjoyeable",
    d: "Pleasing",
    e: "Equitable",
  },
];
const Option = ({ option }) => {
  // const [first, setfirst] = useState(second)
  // options.map((option, index) => {
  // 	const { a, b, c, d, e } = option;
  return (
    <div className="border-b border-[#322f32]  px-[24px] py-[14px]">
      <input type="checkbox" name="answer" id="answer" />
      <label
        htmlFor="answer"
        className="ml-[12px] md:ml-[32px] font-[500] font-space text-[18px]"
      >
        {option}
      </label>
    </div>
  );
  // });
};
const Test = () => {
  return (
    <div>
      <DashboardLayout>
        <div className="min-h-screen flex flex-col text-white w-full px-2 pl-[15px] mt-[20px] md:mt-[31px]">
          <div className="w-[96%] mx-auto rounded-[12px] pt-[40px] pb-[7px] px-[24px] bg-[#101010] text-white flex flex-col">
            <p className="font-[700] font-space text-[18px]  mb-[4px]">
              What are the qualities of good user experience
            </p>
            <p className="font-[400] font-space text-[12px]">
              (Select all that apply)
            </p>
          </div>
          <div className="w-[96%] mx-auto rounded-[12px] pt-[20px] pb-[7px] bg-[#101010] text-white flex flex-col mt-[24px]">
            {/* {options.map((option, index) => {
							const { a, b, c, d, e } = option;
                            return <Option key={index} option={a} />
                                <Option key={index}>{a}</Option>
                            ;
						})} */}
            <Option option="Useful" />
            <Option option="Amusing" />
            <Option option="Enjoyeable" />
            <Option option="Pleasing" />
            <Option option="Equitable" />
          </div>
          <div className="flex items-center justify-between mt-[42px] ">
            <div className="flex text-[#3776d4] text-[16px] font-space font-[700] items-center gap-x-3">
              {" "}
              <p className=""> Previous Question</p>
              <IoIosArrowBack />
            </div>
            <div className="flex items-center">
              <p className="w-[38px] h-[38px] bg-white p-[10px] text-[#121212] text-center font-[700] font-dmsans text-[14px] leading-[18px] border border-black">
                1
              </p>
              <p className="w-[38px] h-[38px] bg-white p-[10px] text-[#121212] text-center font-[700] font-dmsans text-[14px] leading-[18px] border border-black">
                1
              </p>
              <p className="w-[38px] h-[38px] bg-white p-[10px] text-[#121212] text-center font-[700] font-dmsans text-[14px] leading-[18px] border border-black">
                1
              </p>
            </div>
            <div className="flex text-[#3776d4] text-[16px] font-space font-[700] items-center gap-x-3">
              {" "}
              <p className=""> Next Question</p>
              <IoIosArrowForward />
            </div>
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default withStudentAuth(Test);
