import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DashboardLayout from "components/dashboard/DashboardLayout";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import DateInput from "components/common/DateSelector";
import { useUserStore } from "store/useUserStore";
import ButtonLoader from "components/loaders/ButtonLoader";
import { toast } from "react-toastify";
import { useProfileUpdate } from "services/hooks/commons";
import { uploadProfilePicture } from "services/userService";
import { storage } from "lib/helpers/firebase";
import { v4 as uuidv4 } from "uuid";
import withStudentAuth from "components/auth/withStudentAuth";

const Profile = () => {
  const { data } = useSession();
  const { userInfo, updateUserInfo } = useUserStore((state) => state);

  const {
    data: dataUpdate,
    isLoading: isLoadingUpdate,
    isSuccess: isSuccessUpdate,
    isError: isErrorUpdate,
    error: errorUpdate,
    mutate,
  } = useProfileUpdate();

  const [imgUrl, setImgUrl] = useState("");
  const [isLoadingUpload, setIsLoadingUpload] = useState(false);
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
      firstName: userInfo.firstName || "",
      lastName: userInfo.lastName || "",
      phoneNumber: userInfo.phoneNumber || "",
      bio: userInfo.bio || "",
      day: userInfo?.birthDay?.split("-")[0] || "",
      month: userInfo?.birthDay?.split("-")[1] || "",
      year: userInfo?.birthDay?.split("-")[2] || "",
    });
  }, [userInfo]);

  useEffect(() => {
    if (isSuccessUpdate) {
      toast(dataUpdate?.message);
      updateUserInfo(dataUpdate?.user);
    }
  }, [isSuccessUpdate, dataUpdate, updateUserInfo]);

  const handleImageChange = (e) => {
    setImgUrl(e.target.files[0]);
  };

  const handleChange = (evt) => {
    const value = evt.target.value;

    setProfile({
      ...profile,
      [evt.target.name]: value,
    });
  };

  const uploadImage = async () => {
    if (!imgUrl) {
      toast("Edit picture then click save.");
      return;
    }

    setIsLoadingUpload(true);
    const storageRef = storage.ref();
    const uniqueId = uuidv4();

    try {
      // if profile image exist
      if (userInfo.imgPath) {
        const existingImage = storageRef.child(userInfo.imgPath);
        await existingImage.delete();
      }

      const fileRef = storageRef.child(`profile-images/${uniqueId}`);

      const snapshot = await fileRef.put(imgUrl);
      const downloadURL = await snapshot.ref.getDownloadURL();
      const filePath = snapshot.ref.fullPath;
      const resData = await uploadProfilePicture(
        `/users/${data?.user._id}/profile-image/upload`,
        {
          imgUrl: downloadURL,
          imgPath: filePath,
        },
        data?.accessToken
      );
      updateUserInfo(resData.user);
      setImgUrl("");
      toast(resData.message);
    } catch (error) {
      console.log(error);
      if (error?.response?.data?.message) toast(error.response.data.message);
      else toast("Upload not successful");
    } finally {
      setIsLoadingUpload(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !profile.firstName ||
      !profile.lastName ||
      !profile.phoneNumber ||
      !profile.day ||
      !profile.month ||
      !profile.year
    ) {
      toast("Fields with * are required");
      return;
    }

    mutate({
      url: `/users/${data?.user._id}/update-profile`,
      form: {
        firstName: profile.firstName,
        lastName: profile.lastName,
        phoneNumber: profile.phoneNumber,
        bio: profile.bio,
        birthDay: `${profile.day}-${profile.month}-${profile.year}`,
      },
      accessToken: data?.accessToken,
    });
  };

  return (
    <>
      <DashboardLayout>
        <div className="px-[20px] text-white">
          <div className="flex flex-col gap-y-[20px] md:flex-row justify-between items-center">
            <div className="flex flex-col gap-y-[20px] md:flex-row gap-x-[63px] items-center">
              {imgUrl ? (
                <div className="relative w-[100px] h-[100px]">
                  <Image
                    src={URL.createObjectURL(imgUrl)}
                    className="rounded-[50%] w-full h-full"
                    alt="profile Image"
                    fill
                  />
                </div>
              ) : (
                <div className="relative w-[100px] h-[100px]">
                  <Image
                    src={
                      userInfo?.imgUrl
                        ? userInfo?.imgUrl
                        : "/images/icons/avatar-icon.jpg"
                    }
                    className="rounded-[50%] w-full h-full"
                    alt="profile Image"
                    fill
                  />
                </div>
              )}

              <button
                type="submit"
                className="text-white py-[8px] px-[16px] rounded-lg bg-primaryPurple font-dmsans font-[500] text-[24px] hover:bg-primaryYellow cursor-pointer"
              >
                <label htmlFor="imgUrl" className="cursor-pointer">
                  {" "}
                  Edit Picture
                </label>

                <input
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  id="imgUrl"
                  name="imgUrl"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </button>
              <button
                onClick={uploadImage}
                disabled={isLoadingUpload}
                className="text-white py-[8px] px-[16px] rounded-lg border border-primaryPurple hover:bg-primaryPurple font-dmsans font-[500] text-[24px]"
              >
                {isLoadingUpload ? "Uploading..." : "Save Picture"}
              </button>
            </div>
            <p className="text-white font-space font-[700] text-[18px] leading-[22.97.2px]">
              Student ID-{userInfo?.userId}
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
              ></textarea>
            </div>
            <p className="text-white mt-[30px] font-dmsans font-[700] text-[14px] leading-[17px]  mb-[24px] md:w-[599px]">
              Please note that post you make in your discussion groups would
              display your name, image and student ID. To read full extent,
              check out our{" "}
              <Link href="#" className="text-[#0A66C2]">
                Terms and conditions
              </Link>
            </p>
            {isErrorUpdate && (
              <motion.p
                whileInView={{
                  opacity: [0, 1],
                  y: [20, 0],
                }}
                transition={{
                  duration: 1,
                  type: "easeInOut",
                }}
                viewport={{ once: true }}
                className="mb-2 text-red-500"
              >
                {errorUpdate?.response?.data?.message}
              </motion.p>
            )}
            <button
              disabled={isLoadingUpdate}
              type="submit"
              className="flex items-center justify-center text-white py-[8px] w-[200px] rounded-lg bg-primaryPurple font-dmsans font-[500] text-[24px] hover:bg-primaryYellow"
            >
              {isLoadingUpdate ? (
                <span>
                  <ButtonLoader />
                </span>
              ) : (
                <span>Save Changes</span>
              )}
            </button>
          </form>
        </div>
      </DashboardLayout>
    </>
  );
};

export default withStudentAuth(Profile);
