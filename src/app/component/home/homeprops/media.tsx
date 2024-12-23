import React, { useState } from 'react';
import image from '../.././../../assets/image6.webp';
import image1 from '../.././../../assets/image1.webp';
import image2 from '../.././../../assets/image2.webp';
import image3 from '../.././../../assets/image3.jpg';
import image4 from '../.././../../assets/image5.webp';
import image5 from '../.././../../assets/image4.jpg';
import Image from 'next/image';

function Media() {
	const friend = [
		{ image },
		{ image: image1 },
		{ image: image2 },
		{ image: image3 },
		{ image: image4 },
		{ image: image5 },
		{ image },
		{ image: image1 },
		{ image: image2 },
		{ image: image3 },
		{ image: image4 },
		{ image: image5 },
		{ image },
		{ image: image1 },
		{ image: image2 },
		{ image: image3 },
		{ image: image4 },
		{ image: image5 },
		{ image },
		{ image: image1 },
		{ image: image2 },
		{ image: image3 },
		{ image: image4 },
		{ image: image5 },
	];

	const [showAll, setShowAll] = useState(false);

	const handleToggleShow = () => {
		setShowAll(!showAll);
	};

	return (
		<div className='flex flex-col gap-3'>
			<div className='flex justify-between items-center'>
				<div className='text-lg'>Friend Requests</div>
				<button
					onClick={handleToggleShow}
					className='text-blue-600'>
					{showAll ? 'Show Less' : 'See All'}
				</button>
			</div>
			<div className='grid grid-cols-4 gap-3'>
				{friend.slice(0, showAll ? friend.length : 8).map((item, index) => (
					<div
						key={index}
						className='h-28  rounded-lg flex overflow-hidden col-span-1'>
						<Image
							src={item.image}
							alt={`Friend ${index + 1}`}
							className='object-cover h-28 w-full'
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export default Media;
