import React from 'react';
import Stories from './stories';
import Addposts from './addposts';
import Feed from './feed';

function Main() {
	return (
		<div className='space-y-5'>
			<Stories />
			<Addposts />
			<Feed />
			<Feed />
			<Feed />
			<Feed />
		</div>
	);
}

export default Main;
