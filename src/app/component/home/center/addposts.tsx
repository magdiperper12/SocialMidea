import React from 'react';
import image from '../../../../assets/image6.webp';
import Image from 'next/image';
import { BsEmojiSmileFill, BsCalendar2EventFill } from 'react-icons/bs';
import { MdInsertPhoto } from 'react-icons/md';
import { FaVideo, FaPencil } from 'react-icons/fa6';

function Addposts() {
	return (
		<div className='w-auto  bg-white rounded-lg shadow-md mx-3 md:px-4 py-3 '>
			<div className='flex justify-start items-start gap-1 md:gap-3 lg-gap-5 md:px-3  overflow-scroll overflow-y-auto scroll-hidden'>
				<div className='w-[15%] md:w-[10%] lg:w-[5%] flex justify-center items-center'>
					<div className='w-10 lg:min-w-10  h-10 rounded-full border-2 border-blue-600 flex justify-center items-end overflow-hidden'>
						<Image
							src={image}
							alt=''
							className='w-20 '
						/>
					</div>
				</div>
				<div className='w-[80%] md:w-[90%] lg:w-[95%]'>
					<div className='w-full flex justify-center items-end'>
						<textarea
							name=''
							id=''
							className='w-full bg-slate-100 rounded-lg outline-none  p-1 px-2'
							placeholder='what is your mind ..?'></textarea>
						<div>
							<BsEmojiSmileFill className='text-yellow-600 text-xl mx-1 ' />
						</div>
					</div>
					<div className='w-full gap-2 md:gap-4 text-sm md:text-md  py-3 text-gray-500 cursor-pointer  flex px-2 md:px-5 justify-start items-end'>
						<div className='flex justify-center items-center hover:text-gray-700 hover:scale-90 scale-95 duration-150 gap-1'>
							<MdInsertPhoto />
							photo
						</div>
						<div className='flex justify-center items-center gap-1 hover:text-gray-700 hover:scale-90 scale-95 duration-150'>
							<FaVideo />
							video
						</div>
						<div className='flex justify-center items-center gap-1 hover:text-gray-700 hover:scale-90 scale-95 duration-150'>
							<FaPencil />
							poli
						</div>
						<div className='flex justify-center items-center gap-1 hover:text-gray-700 hover:scale-90 scale-95 duration-150'>
							<BsCalendar2EventFill />
							events
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Addposts;
