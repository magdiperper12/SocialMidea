import Image from 'next/image';
import React from 'react';
import image from '../../../assets/image1.webp';
import image2 from '../../../assets/image6.webp';
function Headerimage() {
	return (
		<div className='flex flex-col  justify-center items-center'>
			<div className='w-full h-64  rounded-xl max-h-[80vh] overflow-hidden'>
				<Image
					src={image2}
					alt=''
					className='w-full   rounded-lg object-cover'
				/>
			</div>
			<div className='w-40 h-40 border-white border-[8px] rounded-full overflow-hidden -mt-20 '>
				<Image
					src={image}
					alt=''
					className='w-full   rounded-lg object-cover'
				/>
			</div>
		</div>
	);
}

export default Headerimage;
