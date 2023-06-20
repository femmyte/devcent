import React, { useState } from "react";

const DateInput = ({ profile, handleChange }) => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const handleDayChange = (event) => {
    setDay(event.target.value);
  };

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  return (
    <>
      <label
        htmlFor="address"
        className="font-source font-[600] text-[24px] leading-[30px] text-[#9b9b9b] mb-[26px]"
      >
        Birthday <span className="text-red-600">*</span>
      </label>
      <div className="md:flex gap-x-8 justify-between  mb-[24px]">
        <div className="flex flex-col flex-1 mb-[24px] md:mb-0 ">
          <select
            value={profile.day}
            onChange={handleChange}
            name="day"
            className="p-4 border border-[#747474] text-[#747474] font-[600] text-[16px] leading-5 bg-transparent rounded-lg"
          >
            <option value="">Day</option>
            {/* Populate day options */}
            {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col flex-1 mb-[24px] md:mb-0">
          <select
            value={profile.month}
            onChange={handleChange}
            name="month"
            className="p-4 border border-[#747474] text-[#747474] font-[600] text-[16px] leading-5 bg-transparent rounded-lg"
          >
            <option value="">Month</option>
            {/* Populate month options */}
            {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col flex-1 mb-[24px] md:mb-0">
          <select
            value={profile.year}
            onChange={handleChange}
            name="year"
            className="p-4 border border-[#747474] text-[#747474] font-[600] text-[16px] leading-5 bg-transparent rounded-lg"
          >
            <option value="">Year</option>
            {/* Populate year options */}
            {Array.from({ length: 100 }, (_, i) => 2023 - i).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default DateInput;
