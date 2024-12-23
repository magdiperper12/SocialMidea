import React from 'react';
import Logo from './Logo';
import MidumeNave from './MidumeNave';

function LargNav() {
	return (
		<div className=' flex justify-between items-center   w-full '>
			<div className='w-1/6   text-nowrap '>
				<Logo />
			</div>
			<div className='w-5/6 '>
				<MidumeNave />
			</div>
		</div>
	);
}

export default LargNav;
