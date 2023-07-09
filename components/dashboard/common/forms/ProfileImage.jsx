import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useUserStore } from '../../../../store/useUserStore';
import { toast } from 'react-toastify';
import { uploadProfilePicture } from 'services/userService';
import { storage } from 'lib/helpers/firebase';
import { v4 as uuidv4 } from 'uuid';
import { useSession } from 'next-auth/react';
const ProfileImage = () => {
	const { data } = useSession();
	const { userInfo, updateUserInfo } = useUserStore((state) => state);
	const [imgUrl, setImgUrl] = useState('');
	const [isLoadingUpload, setIsLoadingUpload] = useState(false);
	const handleImageChange = (e) => {
		setImgUrl(e.target.files[0]);
	};

	const uploadImage = async () => {
		if (!imgUrl) {
			toast('Edit picture then click save.');
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
			setImgUrl('');
			toast(resData.message);
		} catch (error) {
			console.log(error);
			if (error?.response?.data?.message)
				toast(error.response.data.message);
			else toast('Upload not successful');
		} finally {
			setIsLoadingUpload(false);
		}
	};
	return (
		<div className='px-[20px] text-white'>
			<div className='flex flex-col gap-y-[20px] md:flex-row justify-between items-center'>
				<div className='flex flex-col gap-y-[20px] md:flex-row gap-x-[63px] items-center'>
					{imgUrl ? (
						<div className='relative w-[100px] h-[100px]'>
							<Image
								src={URL.createObjectURL(imgUrl)}
								className='rounded-[50%] w-full h-full'
								alt='profile Image'
								fill
							/>
						</div>
					) : (
						<div className='relative w-[100px] h-[100px]'>
							<Image
								src={
									userInfo?.imgUrl
										? userInfo?.imgUrl
										: '/images/icons/avatar-icon.jpg'
								}
								className='rounded-[50%] w-full h-full'
								alt='profile Image'
								fill
							/>
						</div>
					)}

					<button
						type='submit'
						className='text-white py-[8px] px-[16px] rounded-lg bg-primaryPurple font-dmsans font-[500] text-[24px] hover:bg-primaryYellow cursor-pointer'
					>
						<label htmlFor='imgUrl' className='cursor-pointer'>
							{' '}
							Edit Picture
						</label>

						<input
							type='file'
							accept='.jpg, .jpeg, .png'
							id='imgUrl'
							name='imgUrl'
							className='hidden'
							onChange={handleImageChange}
						/>
					</button>
					<button
						onClick={uploadImage}
						disabled={isLoadingUpload}
						className='text-white py-[8px] px-[16px] rounded-lg border border-primaryPurple hover:bg-primaryPurple font-dmsans font-[500] text-[24px]'
					>
						{isLoadingUpload ? 'Uploading...' : 'Save Picture'}
					</button>
				</div>
				<p className='text-white font-space font-[700] text-[18px] leading-[22.97.2px]'>
					Student ID-{userInfo?.userId}
				</p>
			</div>
		</div>
	);
};

export default ProfileImage;
