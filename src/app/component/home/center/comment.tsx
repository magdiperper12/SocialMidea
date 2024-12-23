import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { FaFaceSmile } from 'react-icons/fa6';
import { FiMoreHorizontal } from 'react-icons/fi';

// Define the props interface
interface CommentProps {
	username: string;
	comments: string;
	imagecomment: StaticImageData; // Updated type
}

function Comment({ username, comments, imagecomment }: CommentProps) {
	return (
		<div className='flex flex-col gap-2'>
			<div className='flex justify-start items-center gap-2 '>
				<div className='min-w-8 max-w-8 h-8 overflow-hidden rounded-full'>
					<Image
						src={imagecomment}
						alt=''
						className='w-12 h-12'
					/>
				</div>
				<div className='bg-gray-200 px-3 py-2 rounded-full w-full flex justify-between items-center'>
					<input
						className='text-sm bg-transparent outline-none'
						placeholder='What a comment'
					/>
					<FaFaceSmile className='text-yellow-500 text-lg cursor-pointer hover:scale-110 duration-150' />
				</div>
			</div>
			<div className='flex flex-col gap-2 '>
				<div className='flex justify-between items-start my-3'>
					<div className='flex justify-start items-start gap-2 bg-gray-50 m-3 p-2 w-full rounded-xl'>
						<div className='min-w-9 max-w-9 h-9 overflow-hidden rounded-full'>
							<Image
								src={imagecomment}
								alt=''
								className='w-12 h-12'
							/>
						</div>
						<div className='flex flex-col gap-2'>
							<span className='text-gray-700 text-md'>{username}</span>
							<div className='text-md ms-5 text-gray-600 text-sm'>
								{comments}
							</div>
						</div>
					</div>
					<div className='cursor-pointer text-gray-600 text-lg'>
						<FiMoreHorizontal />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Comment;
