'use client';

import React from 'react';
import { UserButton, useUser } from '@clerk/nextjs';
import { LuMessageCircleMore } from 'react-icons/lu';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { CiSearch } from 'react-icons/ci';
import Link from 'next/link';
function Login() {
	const rightHeaderData = [
		{ link: '/', icon: <LuMessageCircleMore />, label: 'Messages' },
		{
			link: '/profile',
			icon: <IoIosNotificationsOutline />,
			label: 'Notifications',
		},
		{ link: '/friends', icon: <CiSearch />, label: 'Search' },
	];

	const { user } = useUser();

	return (
		<div>
			<ul className='flex flex-col md:flex-row gap-4 justify-center md:justify-start'>
				{/* Authentication Button */}
				{!user ? (
					<Link
						href='/sign-up'
						className='m-3 text-md font-bold hover:bg-blue-500 hover:text-white transition duration-200 focus:bg-blue-800 focus:text-white focus:border-blue-800 border-2 border-blue-500 rounded-lg px-5 py-0.5'>
						Login
					</Link>
				) : (
					<div className='flex items-center'>
						{rightHeaderData.map((item) => (
							<li
								key={item.label}
								className='m-2 hidden md:flex'>
								<Link
									href={item.link}
									className={`${`flex gap-3 items-center font-semibold text-blue-500 hover:scale-90 p-2 rounded-lg transition-all duration-200`} text-xl`}
									aria-label={item.label}
									title={item.label}>
									{item.icon}
								</Link>
							</li>
						))}
						<UserButton
							appearance={{
								elements: {
									userButtonAvatarBox: 'rounded-full border border-blue-500',
								},
							}}
						/>
					</div>
				)}
			</ul>
		</div>
	);
}

export default Login;
