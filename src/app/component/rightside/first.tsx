import React from 'react';

// Define a type for the props
interface FirstProps {
	firstitem: React.ReactNode; // React.ReactNode allows any valid React element
}

function First({ firstitem }: FirstProps) {
	return (
		<div className='w-full bg-white rounded-lg shadow-md mx-3 p-5 text-sm text-gray-600'>
			{firstitem}
		</div>
	);
}

export default First;
