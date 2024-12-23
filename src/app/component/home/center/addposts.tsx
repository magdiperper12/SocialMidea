'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import image from '../../../../assets/image6.webp';
import Image from 'next/image';
import { BsEmojiSmileFill, BsCalendar2EventFill } from 'react-icons/bs';
import { MdInsertPhoto } from 'react-icons/md';
import { FaVideo, FaPencil } from 'react-icons/fa6';
import { EmojiClickData } from 'emoji-picker-react';

const EmojiPicker = dynamic(() => import('emoji-picker-react'), { ssr: false });

function Addposts() {
	const [show, setShow] = useState(false);
	const [text, setText] = useState(''); // State for textarea value
	const [video, setVideo] = useState<string | null>(null); // State for storing selected video
	const [photo, setPhoto] = useState<string | null>(null); // State for storing selected photo

	const handleShow = () => {
		setShow(!show);
	};

	const handleEmojiClick = (emojiObject: EmojiClickData) => {
		setText((prevText) => prevText + emojiObject.emoji); // Append emoji to textarea value
	};

	const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file && file.type.startsWith('video/')) {
			setVideo(URL.createObjectURL(file)); // Preview the video
		} else {
			alert('Please select a valid video file');
		}
	};

	const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file && file.type.startsWith('image/')) {
			setPhoto(URL.createObjectURL(file)); // Preview the photo
		} else {
			alert('Please select a valid image file');
		}
	};

	return (
		<div className='w-auto bg-white rounded-lg shadow-md mx-3 md:px-4 py-3'>
			<div className='flex justify-start items-start gap-1 md:gap-3 lg-gap-5 md:px-3 relative'>
				<div className='w-[15%] md:w-[10%] lg:w-[5%] flex justify-center items-center'>
					<div className='w-10 lg:min-w-10 h-10 rounded-full border-2 border-blue-600 flex justify-center items-end overflow-hidden'>
						<Image
							src={image}
							alt=''
							className='w-20'
						/>
					</div>
				</div>
				<div className='w-[80%] md:w-[90%] lg:w-[95%]'>
					<div className='w-full flex justify-center items-end relative'>
						<textarea
							value={text}
							onChange={(e) => setText(e.target.value)} // Update state on input
							className='w-full bg-slate-100 rounded-lg outline-none p-1 px-2'
							placeholder='What is on your mind..?'></textarea>
						<div>
							{show && (
								<div className='z-30 absolute top-16 right-6'>
									<EmojiPicker onEmojiClick={handleEmojiClick} />
								</div>
							)}
							<BsEmojiSmileFill
								className='text-yellow-50 shadow-md shadow-yellow-500 rounded-full bg-yellow-600 text-2xl md:text-4xl mx-1 cursor-pointer'
								onClick={handleShow}
							/>
						</div>
					</div>

					{/* File Uploads */}
					<div className='w-full gap-2 md:gap-4 text-sm md:text-md py-3 text-gray-500 cursor-pointer flex px-2 md:px-5 justify-start items-end'>
						{/* Video Upload */}
						<div
							className='flex justify-center items-center hover:text-gray-700 hover:scale-90 scale-95 duration-150 gap-1'
							onClick={() => document.getElementById('video-input')?.click()}>
							<FaVideo />
							Video
							<input
								type='file'
								id='video-input'
								accept='video/*'
								onChange={handleVideoChange}
								style={{ display: 'none' }}
							/>
						</div>

						{/* Photo Upload */}
						<div
							className='flex justify-center items-center hover:text-gray-700 hover:scale-90 scale-95 duration-150 gap-1'
							onClick={() => document.getElementById('photo-input')?.click()}>
							<MdInsertPhoto />
							Photo
							<input
								type='file'
								id='photo-input'
								accept='image/*'
								onChange={handlePhotoChange}
								style={{ display: 'none' }}
							/>
						</div>
						<div className='flex justify-center items-center gap-1 hover:text-gray-700 hover:scale-90 scale-95 duration-150'>
							<FaPencil />
							Poll
						</div>
						<div className='flex justify-center items-center gap-1 hover:text-gray-700 hover:scale-90 scale-95 duration-150'>
							<BsCalendar2EventFill />
							Events
						</div>
					</div>

					{/* Preview Selected Video and Photo */}
					{video && (
						<div className='mt-3'>
							<video
								width='320'
								height='240'
								controls>
								<source
									src={video}
									type='video/mp4'
								/>
								Your browser does not support the video tag.
							</video>
						</div>
					)}
					{photo && (
						<div className='mt-3'>
							<Image
								src={photo}
								alt='Uploaded'
								className='w-full h-auto'
								width={100}
								height={100}
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Addposts;
