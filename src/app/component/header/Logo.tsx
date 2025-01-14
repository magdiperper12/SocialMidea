import Link from 'next/link';
import React from 'react';
import { SlSocialFoursqare } from 'react-icons/sl';

function Logo() {
	return (
		<Link
			href={'/'}
			className='text-blue-600  text-3xl  xl:text-5xl font-bold flex justify-start ps-5  items-center   '>
			<SlSocialFoursqare />
		</Link>
	);
}

export default Logo;
