import Image from 'next/image';
import React from 'react';
import image from '../../../../assets/image3.jpg';
import { FiMoreHorizontal } from 'react-icons/fi';
function Ads() {
	return (
		<div className=' flex flex-col gap-3   '>
			<div className='flex justify-between items-center'>
				<div className='text-lg '>Sponser Ads</div>
				<div className='cursor-pointer text-gray-600 text-lg'>
					<FiMoreHorizontal />{' '}
				</div>
			</div>
			<div className='flex flex-col items-center'>
				<div className='w-full h-36 rounded-lg overflow-hidden'>
					<Image
						src={image}
						alt=''
						className=''
					/>
				</div>
			</div>
			<div className='flex justify-between items-center px-4  rounded-lg '>
				<div className='flex gap-4 items-center'>
					<div className='w-7 h-7 rounded-full overflow-hidden '>
						<Image
							src={image}
							alt=''
							className='w-12 h-12 '
						/>
					</div>
					<h2 className='font-bold  text-blue-400'>fanni pirdage</h2>
				</div>
			</div>
			<div className='flex justify-between items-center p-4  rounded-lg '>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero amet eum
				ab esse voluptatibus , sit aliquid ex nesciunt accusamus perspiciatis
				aut quasi aliquam possimus deleniti dolor quos aspernatur?
			</div>
			<div className='flex justify-center items-center  p-2 bg-slate-200 rounded-lg '>
				Learn More
			</div>
		</div>
	);
}

export default Ads;
