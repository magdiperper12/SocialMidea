import React from 'react';

import { FiActivity } from 'react-icons/fi';
import { CiShop } from 'react-icons/ci';
import {
	MdEventNote,
	MdOutlineOndemandVideo,
	MdPhotoLibrary,
} from 'react-icons/md';
import {
	IoAlbumsSharp,
	IoListSharp,
	IoNewspaperOutline,
	IoSettingsSharp,
} from 'react-icons/io5';
import { GiCursedStar } from 'react-icons/gi';

function Events() {
	const events = [
		{
			icon: <MdPhotoLibrary className='text-lg' />,
			text: 'My Posts',
		},
		{
			icon: <FiActivity className='text-lg' />,
			text: 'Active',
		},
		{
			icon: <CiShop className='text-lg' />,
			text: 'MarketPlace',
		},
		{
			icon: <MdEventNote className='text-lg' />,
			text: 'Event',
		},
		{
			icon: <IoAlbumsSharp className='text-lg' />,
			text: 'Albume',
		},
		{
			icon: <MdOutlineOndemandVideo className='text-lg' />,
			text: 'Videos',
		},
		{
			icon: <IoNewspaperOutline className='text-lg' />,
			text: 'News',
		},
		{
			icon: <GiCursedStar className='text-lg' />,
			text: 'Curses',
		},
		{
			icon: <IoListSharp className='text-lg' />,
			text: 'Lists',
		},
		{
			icon: <IoSettingsSharp className='text-lg' />,
			text: 'Settings',
		},
	];
	return (
		<div className='   space-y-6 '>
			{events.map((items, index) => (
				<div
					className='flex justify-start items-center gap-3'
					key={index}>
					<span className='text-blue-500 '> {items.icon}</span>

					<span className='text-gray-600'>{items.text}</span>
				</div>
			))}
		</div>
	);
}

export default Events;
