import React from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';
import { FaLocationDot } from 'react-icons/fa6';
import { FaGoogleScholar } from 'react-icons/fa6';
import { MdWork } from 'react-icons/md';
import { FaBirthdayCake } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa';

function Information() {
	return (
		<div className=' flex flex-col gap-4 '>
			<div className='flex justify-between items-center'>
				<div className='text-lg '>User information</div>
				<div className='cursor-pointer text-gray-600 text-lg'>
					<FiMoreHorizontal />{' '}
				</div>
			</div>
			<div className='flex justify-between items-center  rounded-lg '>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero amet eum
				ab esse voluptatibus a minima 🤗
			</div>

			<div className='flex gap-2 items-center justify-start '>
				<FaLocationDot className='text-lg text-teal-600' />
				<span>
					Living in <span className='text-blue-700'> {'Denver'}</span>
				</span>
			</div>
			<div className='flex gap-2 items-center justify-start '>
				<FaGoogleScholar className='text-lg text-teal-600' />
				<span>
					Went to <span className='text-blue-700'> {'Edger Hight School'}</span>
				</span>
			</div>
			<div className='flex gap-2 items-center justify-start '>
				<MdWork className='text-lg text-teal-600' />
				<span>
					Working at <span className='text-blue-700'> {'Google designer'}</span>
				</span>
			</div>
			<div className='flex justify-between items-center '>
				<a
					href='https://magdi-portfolio.surge.sh/'
					className='text-blue-500 underline flex gap-1 items-center justify-center'
					target='_blank'>
					<FaLink />
					portfolio
				</a>
				<div className='flex gap-1 items-center'>
					<FaBirthdayCake className='text-lg ' />
					12/2/2001
				</div>
			</div>
			<div className='flex justify-center items-center  p-2 bg-blue-600 cursor-pointer text-white rounded-lg '>
				Following
			</div>
			<div className='flex justify-center items-center w-32 m-auto  p-1 border-blue-600 text-blue-600 border-2 border-dashed  rounded-lg  hover:bg-blue-600 duration-150 cursor-pointer hover:text-white'>
				Block User
			</div>
		</div>
	);
}

export default Information;
