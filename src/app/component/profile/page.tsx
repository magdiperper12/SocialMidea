import React from 'react';
import Headerimage from './headerimage';
import Information from './information';
import Post from '../home/center/post';
import Comment from '../home/center/comment';
import image from '../../../assets/image6.webp';
import image2 from '../../../assets/image1.webp';
import image3 from '../../../assets/image5.webp';
function Profile() {
	return (
		<div className='space-y-5'>
			<div className='  bg-white rounded-lg shadow-md mx-3  p-3  space-y-4 w-auto'>
				<Headerimage />
				<Information />
			</div>
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
		</div>
	);
}

export default Profile;
