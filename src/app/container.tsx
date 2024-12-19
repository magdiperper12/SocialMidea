import React from 'react';
import Main from './component/center/main';
import RightSide from './component/rightside/right-side';
import LeftSide from './component/leftside/left-side';

function Container() {
	return (
		<div className='grid grid-cols-12 w-full lg:px-16 md:px-8 px-3 py-5'>
			<div className=' lg:col-span-2 bg-blue-500 hidden lg:flex'>
				<LeftSide />
			</div>
			<div className='col-span-12 md:col-span-8 lg:col-span-7'>
				<Main />
			</div>
			<div className=' md:col-span-4 lg:col-span-3 bg-red-500 hidden md:flex'>
				<RightSide />
			</div>
		</div>
	);
}

export default Container;
