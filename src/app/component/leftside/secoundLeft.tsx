import React from 'react';

// Define a type for the props
interface SecoundLeftProps {
	secoundLeftside: React.ReactNode; // React.ReactNode allows any valid React element
}

function SecoundLeft({ secoundLeftside }: SecoundLeftProps) {
	return (
		<div className='w-full bg-white rounded-lg shadow-md mx-3 p-5 text-sm text-gray-600'>
			{secoundLeftside}
		</div>
	);
}

export default SecoundLeft;
