import React from 'react';
import Logo from './Logo';
import MidumeNave from './MidumeNave';

function LargNav() {
	return (
		<div className=' flex justify-between  items-center  w-full '>
			<div>
				<Logo />
			</div>
			<div>
				<MidumeNave />
			</div>
		</div>
	);
}

export default LargNav;
