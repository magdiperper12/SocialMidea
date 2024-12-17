'use client';

import React, { useState } from 'react';
import Logo from './Logo';
import MidumeNave from './MidumeNave';
function MobileNav() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='flex  justify-between w-full '>
			<div className=''>
				<Logo />
			</div>
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
					<div className='absolute start-0 top-12 w-full gap-1 text-lg  bg-white h-[calc(100vh-48px)] flex flex-col justify-center items-center'>
						<MidumeNave />
					</div>
				)}
			</div>
		</div>
	);
}

export default MobileNav;
