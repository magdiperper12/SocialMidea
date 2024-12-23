'use client';

import React, { useEffect, useState } from 'react';
import Birthday from '../home/homeprops/Birthday';
import First from './first';
import Request from '../home/homeprops/Request';
import Secound from './secound';
import Third from './third';
import Ads from '../home/homeprops/Ads';
import Media from '../home/homeprops/media';
import Information from '../home/homeprops/information';

function RightSide() {
	const [profil, setProfile] = useState(true);
	useEffect(() => {
		const URL = window.location.href.toString().includes('profile');
		setProfile(URL);
	}, []);
	return (
		<div className='space-y-5 flex flex-col justify-start items-center  w-full '>
			<First firstitem={!profil ? <Request /> : <Information />} />
			<Secound secoundItem={!profil ? <Birthday /> : <Media />} />
			<Third thirditem={!profil ? <Ads /> : <Request />} />
		</div>
	);
}

export default RightSide;
