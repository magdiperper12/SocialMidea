import Image from 'next/image';
import React from 'react';
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
		{ name: 'ahmed', image: image },
		{ name: 'magdi', image: image2 },
		{ name: 'abdelsallam el nabulsi', image: image3 },
		{ name: 'sayed ', image: image4 },
		{ name: 'mazen elsory', image: image5 },
		{ name: 'fam morsi', image: image6 },
	];

	return (
		<div className='w-auto  bg-white rounded-lg shadow-md mx-3 px-4 py-3 '>
			<div className='flex justify-start items-center gap-8 overflow-scroll overflow-y-auto scroll-hidden'>
				{story.map((item, index) => (
					<Link
						href={'/'}
						className='flex flex-col justify-center items-center gap-2'
						key={index}>
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
	);
}

export default Stories;
