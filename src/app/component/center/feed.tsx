import React from 'react';
import Post from './post';
import Comment from './comment';

function Feed() {
	return (
		<div className='w-auto  bg-white rounded-lg shadow-md mx-3  p-3  space-y-4'>
			<Post />
			<Comment />
		</div>
	);
}

export default Feed;
