'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import image from '../../../../assets/image1.webp';
import image2 from '../../../../assets/image2.webp';
import image3 from '../../../../assets/image3.jpg';
import image4 from '../../../../assets/image4.jpg';
import image5 from '../../../../assets/image5.webp';
import image6 from '../../../../assets/image6.webp';
import Link from 'next/link';

function Stories() {
	const story = [
		{ name: 'ahmed', image: image },
		{ name: 'magdi', image: image2 },
		{ name: 'abdelsallam el nabulsi', image: image3 },
		{ name: 'sayed ', image: image4 },
		{ name: 'mazen elsory', image: image5 },
		{ name: 'fam morsi', image: image6 },
		{ name: 'ahmed', image: image },
		{ name: 'magdi', image: image2 },
		{ name: 'abdelsallam el nabulsi', image: image3 },
		{ name: 'sayed ', image: image4 },
		{ name: 'mazen elsory', image: image5 },
		{ name: 'fam morsi', image: image6 },
		{ name: 'ahmed', image: image },
		{ name: 'magdi', image: image2 },
		{ name: 'abdelsallam el nabulsi', image: image3 },
		{ name: 'sayed ', image: image4 },
		{ name: 'mazen elsory', image: image5 },
		{ name: 'fam morsi', image: image6 },
	];

	const [show, setShow] = useState(false);
	const [photo, setPhoto] = useState(null);

	const handellShow = (imageselect) => {
		setShow(true);
		setPhoto(imageselect);

		// اغلاق تلقائي بعد 12 ثانية
		setTimeout(() => {
			setShow(false);
		}, 12000);
	};

	const close = () => {
		setShow(false);
	};

	return (
		<>
			{show && (
				<div
					onClick={() => close()}
					className='flex z-30 justify-center items-center bg-black absolute w-full h-screen top-0 left-0'>
					<div className='w-72 h-[480px] relative bg-black overflow-hidden  flex justify-center items-center'>
						<div className='absolute bottom-0 left-0 h-1  bg-blue-600 animate-timer'></div>
						<div className='gap-2 p-1 flex justify-center absolute top-0 left-0 items-center'>
							<div className='w-10 h-10 bg-black overflow-hidden rounded-full border-blue-400 border-2 gap-2 flex justify-center items-center'>
								<Image
									src={photo}
									alt=''
									className='object-cover w-44'
								/>
							</div>
							<span className='text-blue-200 '>magdi perper</span>
						</div>
						<Image
							src={photo}
							alt=''
							className='object-contain '
						/>
					</div>
				</div>
			)}
			<div className='w-auto bg-white rounded-lg shadow-md mx-3 px-4 py-3'>
				<div className='flex justify-start items-center gap-8 overflow-scroll overflow-y-auto scroll-hidden'>
					{story.map((item, index) => (
						<Link
							href={'/'}
							className='flex flex-col justify-center items-center gap-2'
							key={index}
							onClick={() => handellShow(item.image)}>
							<div className='w-20 h-20 bg-black overflow-hidden rounded-full border-blue-600 border-2 flex justify-center items-center'>
								<Image
									src={item.image}
									alt=''
									className='object-cover w-44'
								/>
							</div>
							<div className='text-sm line-clamp-1 text-gray-600'>
								{item.name}
							</div>
						</Link>
					))}
				</div>
			</div>
		</>
	);
}

export default Stories;
