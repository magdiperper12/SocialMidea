'use client';

import React, { useState } from 'react';
import Logo from './Logo';

import Image from 'next/image';
import Link from 'next/link';
import Login from './login';
function MobileNav() {
	const [isOpen, setIsOpen] = useState(false);
	const headerData = [
		{ name: 'Home', link: '/', image: '/home.png' },
		{ name: 'Profile', link: '/profile', image: '/noAvatar.png' },
		{ name: 'Friends', link: '/friends', image: '/friends.png' },
		{ name: 'Group', link: '/group', image: '/groups.png' },
		{ name: 'Stories', link: '/stories', image: '/stories.png' },
		{ name: 'Login', link: '/login', image: '/work.png' },
	];
	return (
		<div className='flex  justify-between w-full '>
			<div className=''>
				<Logo />
			</div>
			<div className='flex justify-center items-center gap-3'>
				<Login />
				<div
					className=''
					onClick={() => setIsOpen(!isOpen)}>
					<div
						className={`bg-blue-600 h-1 w-6 rounded-lg m-1 ${
							isOpen ? 'rotate-45' : ''
						} origin-left duration-200`}></div>
					<div
						className={`bg-blue-600 h-1 w-6 rounded-lg m-1 ${
							isOpen ? 'opacity-0' : ''
						} origin-left`}></div>
					<div
						className={`bg-blue-600 h-1 w-6 rounded-lg m-1 ${
							isOpen ? '-rotate-45' : ''
						} origin-left duration-200`}></div>

					{isOpen && (
						<div className='absolute start-0 top-12 w-full gap-1 text-lg  bg-white h-[calc(100vh-48px)] z-10 duration-200  flex flex-col justify-center items-center'>
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
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default MobileNav;
