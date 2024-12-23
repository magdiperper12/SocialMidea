import React from 'react';
import image from '../../../../assets/image6.webp';
import Image from 'next/image';
import { IoCheckmarkCircleSharp } from 'react-icons/io5';
import { IoCloseCircleOutline } from 'react-icons/io5';
function Request() {
	const friend = [
		{
			image: image,
			name: 'magdi perper',
			icon1: <IoCheckmarkCircleSharp />,
			icon2: <IoCloseCircleOutline />,
		},
		{
			image: image,
			name: 'magdi perper',
			icon1: <IoCheckmarkCircleSharp />,
			icon2: <IoCloseCircleOutline />,
		},
		{
			image: image,
			name: 'magdi perper',
			icon1: <IoCheckmarkCircleSharp />,
			icon2: <IoCloseCircleOutline />,
		},
		{
			image: image,
			name: 'magdi perper',
			icon1: <IoCheckmarkCircleSharp />,
			icon2: <IoCloseCircleOutline />,
		},
	];
	return (
		<div className='flex flex-col gap-3'>
			<div className='flex justify-between items-center'>
				<div className='text-lg '>Friend request</div>
				<div className='text-blue-600 '>See All</div>
			</div>
			{friend.map((items, index) => (
				<div
					key={index}
					className='flex justify-between items-center px-2'>
					<div className='flex gap-2 items-center'>
						<div className='w-7 h-7 rounded-full overflow-hidden '>
							<Image
								src={items.image}
								alt=''
								className='w-12 h-12 '
							/>
						</div>
						<h2 className='font-bold'>{items.name}</h2>
					</div>
					<div className='flex gap-2 items-center text-blue-600 text-xl'>
						<div>{items.icon1}</div>
						<div>{items.icon2}</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default Request;
