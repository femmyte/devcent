import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { BsArrowUpCircleFill } from 'react-icons/bs';
import { RiArrowUpCircleFill } from 'react-icons/ri';

const DragAndDrop = ({ onFileUpload }) => {
	const [uploadedFiles, setUploadedFiles] = useState([]);

	const onDrop = useCallback(
		(acceptedFiles) => {
			setUploadedFiles(acceptedFiles);
			onFileUpload(acceptedFiles);
		},
		[onFileUpload]
	);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
	});

	return (
		<div
			{...getRootProps()}
			className='border border-dashed border-gray-400 p-4 rounded-md text-center'
		>
			<input {...getInputProps()} />
			<div className='w-[56px] h-[56px] bg-opacity-[0.1] bg-primaryPurple rounded-full relative flex items-center justify-center mx-auto'>
				<RiArrowUpCircleFill className='text-black' size={30} />
			</div>
			{isDragActive ? (
				<p className='text-gray-600'>Drop the files here...</p>
			) : (
				<p className='text-gray-600'>
					Drag 'n' drop files here, or click to select files
				</p>
			)}
			<p className='text-gray-600 mt-[20px]'>
				Each of your file(s) can be up to 20MB in size.
			</p>
			{uploadedFiles.length > 0 && (
				<div>
					<h4 className='text-lg font-medium mb-2'>
						Uploaded Files:
					</h4>
					<ul>
						{uploadedFiles.map((file, index) => (
							<li key={index} className='text-gray-600'>
								{file.name}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default DragAndDrop;
