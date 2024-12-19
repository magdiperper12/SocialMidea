import React from 'react';
import Logo from './Logo';
import MidumeNave from './MidumeNave';

function LargNav() {
	return (
		<div className='grid grid-cols-6   w-full '>
			<div className='col-span-2 lg:col-span-1 text-nowrap p-4'>
				<Logo />
			</div>
			<div className='md:col-span-4 lg:col-span-5 px-5'>
				<MidumeNave />
			</div>
		</div>
	);
}

export default LargNav;
