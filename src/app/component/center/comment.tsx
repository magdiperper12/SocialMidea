import Image from 'next/image';
import React from 'react';
import image from '../../../assets/image1.webp';
import image2 from '../../../assets/image2.webp';
import { FaFaceSmile } from 'react-icons/fa6';
import { FiMoreHorizontal } from 'react-icons/fi';
function Comment() {
	return (
		<div className='flex flex-col gap-2'>
			<div className='flex justify-start items-center gap-2 '>
				<div className='min-w-8 max-w-8 h-8 overflow-hidden rounded-full'>
					<Image
						src={image}
						alt=''
						className='w-12 h-12'
					/>
				</div>
				<div className='bg-gray-200 px-3 py-2 rounded-full w-full flex justify-between items-center'>
					<input
						className=' text-sm bg-transparent outline-none '
						placeholder='what a comment'
					/>
					<FaFaceSmile className='text-yellow-500 text-lg cursor-pointer hover:scale-110 duration-150 ' />
				</div>
			</div>
			<div className='flex flex-col gap-2 '>
				<div className='flex justify-between items-start my-3'>
					<div className='flex justify-center items-start gap-2 '>
						<div className='min-w-9 max-w-9 h-9 overflow-hidden rounded-full '>
							<Image
								src={image}
								alt=''
								className='w-12 h-12'
							/>
						</div>
						<div className='flex flex-col gap-2'>
							<span className='text-gray-600 text-md'>userName</span>
							<div className='text-md text-gray-600  text-sm'>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex,
								voluptas, accusantium provident harum quod veniam ipsam ab sequi
								reiciendis sit tempora totam, adipisci quaerat similique esse
								omnis placeat nam sed?
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
