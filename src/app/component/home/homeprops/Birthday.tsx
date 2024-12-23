import Image from 'next/image';
import React from 'react';
import image from '../../../../assets/image3.jpg';
import { FaBirthdayCake } from 'react-icons/fa';

function Birthday() {
	return (
		<div className='flex flex-col gap-3'>
			<div className='flex justify-between items-center'>
				<div className='text-lg '>Friend request</div>
			</div>

			<div className='flex justify-between items-center gap-2 md:px-1 lg:px-2'>
				<div className='flex gap-2 items-center'>
					<div className='min-w-7 max-w-7 h-7 rounded-full overflow-hidden '>
						<Image
							src={image}
							alt=''
							className='w-12 h-12 '
						/>
					</div>
					<h2 className='font-bold md:text-nowrap lg:text-wrap'>
						fanni pirdage
					</h2>
				</div>
				<button className='bg-blue-600 text-white md:px-1 lg:px-4  py-1 rounded-lg mt-2 text-sm hover:bg-blue-800 duration-150 hover:scale-95'>
					Celebrate
				</button>
			</div>
			<div className='flex justify-between items-center p-4 bg-slate-100 rounded-lg '>
				<FaBirthdayCake className='text-2xl m-2 text-blue-500' />
				<div>
					<h1 className='font-bold'> sit amet consectetur</h1>
					<h3>Lorem ipsum sit amet consectetur.</h3>
				</div>
			</div>
		</div>
	);
}

export default Birthday;
