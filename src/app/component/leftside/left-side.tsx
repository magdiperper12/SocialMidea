import React from 'react';
import Follower from './followers';
import Events from './Events';

function LeftSide() {
	return (
		<div className='space-y-4 flex flex-col justify-start items-center  w-full '>
			<Follower />
			<Events />
		</div>
	);
}

export default LeftSide;
