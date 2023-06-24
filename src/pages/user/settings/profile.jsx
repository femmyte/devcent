import React, { useEffect, useState } from "react";
import DashboardLayout from "../../../../components/dashboard/DashboardLayout";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import DateInput from "components/common/DateSelector";
import { useUserStore } from "store/useUserStore";

const Studentprofile = () => {
  const { data } = useSession();
  const { userInfo, isLoadingUpdate, errorUpdate, updateUserProfile } =
    useUserStore((state) => state);

  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    bio: "",
    day: "",
    month: "",
    year: "",
  });

  useEffect(() => {
    setProfile({
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      phoneNumber: userInfo.phoneNumber || "",
      bio: userInfo.bio || "",
      day: userInfo?.birthDay?.split("-")[0] || "",
      month: userInfo?.birthDay?.split("-")[1] || "",
      year: userInfo?.birthDay?.split("-")[2] || "",
    });
  }, [userInfo]);

  const handleChange = (evt) => {
    const value = evt.target.value;

    setProfile({
      ...profile,
      [evt.target.name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !profile.firstName ||
      !profile.lastName ||
      !profile.phoneNumber ||
      !profile.bio ||
      !profile.day ||
      !profile.month ||
      !profile.year
    ) {
      setErrorEnrol("Fields with * are required");
      return;
    }

    updateUserProfile(data?.user._id, data?.accessToken, {
      firstName: profile.firstName,
      lastName: profile.lastName,
      phoneNumber: profile.phoneNumber,
      bio: profile.bio,
      birthDay: `${profile.day}-${profile.month}-${profile.year}`,
    });

    console.log("done");
  };

  return (
    <>
      <DashboardLayout>
        <div className="px-[20px]">
          <div className="flex flex-col gap-y-[20px] md:flex-row justify-between items-center">
            <div className="flex flex-col gap-y-[20px] md:flex-row gap-x-[63px] items-center">
              <Image
                src="/images/profileImg.png"
                height={100}
                width={100}
                alt="profile Image"
              />
              <button
                type="submit"
                className=" py-[8px] px-[16px] rounded-lg bg-primaryPurple font-dmsans font-[500] text-[24px] hover:bg-primaryYellow"
              >
                Upload New
              </button>
              <button
                type="submit"
                className=" py-[8px] px-[16px] rounded-lg border border-primaryPurple hover:bg-primaryPurple font-dmsans font-[500] text-[24px]"
              >
                Delete Photo
              </button>
            </div>
            <p className="font-space font-[700] text-[18px] leading-[22.97.2px]">
              Student ID-123456
            </p>
          </div>
          <p className="mt-[30px] md:mt-[66px] font-source font-[700] text-[28px] md:text-[32px] leading-[40.2px]  mb-[24px]">
            Personal Details
          </p>
          {/* <div className='md:flex gap-x-8 justify-between  mb-[24px]'> */}
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col flex-1 mb-[24px]">
              <label
                htmlFor="first-name"
                className="font-source font-[600] text-[24px] leading-[30px] text-[#9b9b9b] mb-[16px]"
              >
                First Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                className="p-4 border border-[#747474] text-[#747474] font-[600] text-[16px] leading-5 bg-transparent rounded-lg"
                placeholder="John"
                id="first-name"
                name="firstName"
                onChange={handleChange}
                value={profile.firstName}
                required
              />
            </div>
            <div className="flex flex-col flex-1 mb-[24px]">
              <label
                htmlFor="last-name"
                className="font-source font-[600] text-[24px] leading-[30px] text-[#9b9b9b] mb-[16px]"
              >
                Last Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                className="p-4 border border-[#747474] text-[#747474] font-[600] text-[16px] leading-5 bg-transparent w-[100%] rounded-lg"
                placeholder="Doe"
                id="last-name"
                name="lastName"
                onChange={handleChange}
                value={profile.lastName}
                required
              />
            </div>
            <DateInput profile={profile} handleChange={handleChange} />
            <div className="flex flex-col  mb-[24px]">
              <label
                htmlFor="phone"
                className="font-source font-[600] text-[24px] leading-[30px] text-[#9b9b9b] mb-[16px]"
              >
                Phone Number <span className="text-red-600">*</span>
              </label>
              <input
                type="tel"
                className="p-4 border border-[#747474] text-[#747474] font-[600] text-[16px] leading-5 bg-transparent rounded-lg"
                placeholder="08178627581"
                id="phone"
                name="phoneNumber"
                onChange={handleChange}
                value={profile.phoneNumber}
                required
              />
            </div>
            <div className="flex flex-col  mb-[24px]">
              <label
                htmlFor="bio"
                className="font-source font-[600] text-[24px] leading-[30px] text-[#9b9b9b] mb-[16px]"
              >
                About Me <span className="text-red-600">*</span>
              </label>
              <textarea
                type="text"
                className="p-4 border border-[#747474] text-[#747474] font-[600] text-[16px] leading-5 bg-transparent rounded-lg h-[200px]"
                placeholder="Tell us a bit about yourself, the things that interest you and what you hope to gain from thi course"
                id="bio"
                name="bio"
                onChange={handleChange}
                value={profile.bio}
                required
              ></textarea>
            </div>
            <p className="mt-[30px] font-dmsans font-[700] text-[14px] leading-[17px]  mb-[24px] md:w-[599px]">
              Please note that post you make in your discussion groups would
              display your name, image and student ID. To read full extent,
              check our our{" "}
              <Link href="#" className="text-[#0A66C2]">
                Terms and conditions
              </Link>
            </p>
            <button
              type="submit"
              className=" py-[8px] px-[16px] rounded-lg bg-primaryPurple font-dmsans font-[500] text-[24px] hover:bg-primaryYellow"
            >
              Save Changes
            </button>
          </form>
        </div>
      </DashboardLayout>
    </>
  );
};

export default Studentprofile;
