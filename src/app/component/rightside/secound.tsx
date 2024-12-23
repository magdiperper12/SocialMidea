import React from 'react';
interface FirstProps {
	secoundItem: React.ReactNode; // React.ReactNode allows any valid React element
}
function Secound({ secoundItem }: FirstProps) {
	return (
		<div className='w-full  bg-white rounded-lg shadow-md mx-3 p-5 text-sm text-gray-600     '>
			{secoundItem}
		</div>
	);
}

export default Secound;
