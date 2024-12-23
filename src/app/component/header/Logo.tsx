import Link from 'next/link';
import React from 'react';

function Logo() {
	return (
		<Link
			href={'/'}
			className='text-blue-600  text-lg md:text-xl lg:text-2xl font-bold flex gap-3  items-center   '>
			Historic Social
		</Link>
	);
}

export default Logo;
