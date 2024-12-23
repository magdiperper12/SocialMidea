import React from 'react';
import Post from './post';
import Comment from './comment';
import image from '../../../../assets/image1.webp';
import image2 from '../../../../assets/image2.webp';
import image3 from '../../../../assets/image4.jpg';
function Feed() {
	return (
		<div className='w-auto  bg-white rounded-lg shadow-md mx-3  p-3  space-y-4'>
			<Post
				name='magdi perper'
				time='3:05 12/12/2024'
				userimage={image}
				image={image2}
				description='from feed this is my description hello from feed this is my description'
			/>
			<Comment
				username='ahmed mohsen'
				comments='from feed this is my description hello from feed this is my description comment'
				imagecomment={image3}
			/>
		</div>
	);
}

export default Feed;
