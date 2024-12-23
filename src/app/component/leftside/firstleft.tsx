import React from 'react';

// Define a type for the props
interface FirstProps {
	firstleftitem: React.ReactNode; // Use React.ReactNode to allow any valid React element
}

function First({ firstleftitem }: FirstProps) {
	return (
		<div className='w-full bg-white rounded-lg shadow-md mx-3 p-3'>
			{firstleftitem}
		</div>
	);
}

export default First;
