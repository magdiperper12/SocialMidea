import React from 'react';
import { FaBirthdayCake, FaUser, FaUsers } from 'react-icons/fa';
import { MdPhotoLibrary } from 'react-icons/md';
import { MdEvent } from 'react-icons/md';
import { MdWork } from 'react-icons/md';

function Information() {
	return (
		<div className='-mt-14 grid grid-cols-3 text-gray-700 '>
			<div className='col-span-1 flex flex-col text-lg text-blue-950 justify-center items-center gap-y-2'>
				<FaUser className='text-5xl text-blue-500' />
				1360 friends
			</div>
			<div className='col-span-1 flex flex-col  text-lg text-blue-950 justify-center items-center gap-y-2'>
				<FaUsers className='text-5xl text-blue-500' /> 200 followers
			</div>
			<div className='col-span-1 flex flex-col justify text-lg text-blue-950 justify-center items-center gap-y-2'>
				<MdPhotoLibrary className='text-5xl text-blue-500' /> 12 post
			</div>
		</div>
	);
}

export default Information;
