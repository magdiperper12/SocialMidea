import React from 'react';
import image from '../../../assets/image1.webp';
import image2 from '../../../assets/image2.webp';
import Image from 'next/image';

function Follower() {
	return (
		<div className='w-full  bg-white rounded-lg shadow-md mx-3  p-3   flex flex-col justify-center items-center'>
			<div className='flex flex-col items-center'>
				<div className='w-full h-24 rounded-lg overflow-hidden'>
					<Image
						src={image2}
						alt=''
						className=''
					/>
				</div>
				<div className='w-14 h-14 border-white border-4 rounded-full overflow-hidden -mt-7 '>
					<Image
						src={image}
						alt=''
						className='w-full   rounded-lg object-cover'
					/>
				</div>
			</div>
			<div className='text-lg font-bold text-gray-600'>magdi perper</div>
			<div className='text-xs font-bold text-gray-500'>
				500 <span className='text-blue-500 text-sm'>followers</span>
			</div>
			<button className='bg-blue-600 text-white px-10 py-2 rounded-lg mt-2 text-sm hover:bg-blue-800 duration-150 hover:scale-95'>
				My Profile
			</button>
		</div>
	);
}

export default Follower;
