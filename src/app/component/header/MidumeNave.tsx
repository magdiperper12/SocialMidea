import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

function MidumeNave() {
	const headerData = [
		{ name: 'Home', link: '/', image: '/home.png' },
		{ name: 'Profile', link: '/profile', image: '/noAvatar.png' },
		{ name: 'Friends', link: '/friends', image: '/friends.png' },
		{ name: 'Group', link: '/group', image: '/groups.png' },
		{ name: 'Stories', link: '/stories', image: '/stories.png' },
		{ name: 'Login', link: '/login', image: '/work.png' },
	];

	return (
		<nav className=''>
			<ul className='flex flex-col md:flex-row justify-center md:justify-start'>
				{headerData.map((item, index) => (
					<li
						key={index}
						className='m-2'>
						<Link
							href={item.link}
							className='flex gap-3  items-center text-gray-700 hover:scale-90 p-2 rounded-lg transition-all duration-200'>
							<Image
								src={item.image}
								alt={`${item.name} icon`}
								width={20}
								height={20}
							/>
							<span className='mt-2 text-sm'>{item.name}</span>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default MidumeNave;
