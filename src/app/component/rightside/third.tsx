import React from 'react';
interface FirstProps {
	thirditem: React.ReactNode; // React.ReactNode allows any valid React element
}
function Third({ thirditem }: FirstProps) {
	return (
		<div className='w-full  bg-white rounded-lg shadow-md mx-3 p-5 text-sm text-gray-600 '>
			{thirditem}
		</div>
	);
}

export default Third;
