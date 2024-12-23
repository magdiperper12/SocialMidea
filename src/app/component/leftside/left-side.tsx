'use client';

import React, { useEffect, useState } from 'react';
import Follower from '../home/homeprops/followers';
import First from './firstleft';
import SecoundLeft from './secoundLeft';
import Events from '../home/homeprops/Events';
import Ads from '../home/homeprops/Ads';

function LeftSide() {
	const [profile, setProfile] = useState(true);
	useEffect(() => {
		setProfile(window.location.href.toString().includes('profile'));
	}, []);

	return (
		<div className='space-y-5 flex flex-col justify-start items-center  w-full '>
			<First firstleftitem={!profile ? <Follower /> : <Events />} />
			<SecoundLeft secoundLeftside={!profile ? <Events /> : <Ads />} />
		</div>
	);
}

export default LeftSide;
