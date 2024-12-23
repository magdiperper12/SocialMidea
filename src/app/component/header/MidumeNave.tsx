import Link from 'next/link';
import { IoHome } from 'react-icons/io5';
import { FaUser, FaUsers } from 'react-icons/fa';
import Login from './login';

function MidumeNavbar() {
	const leftHeaderData = [
		{ name: 'Home', link: '/', icon: <IoHome /> },
		{ name: 'Profile', link: '/component/profile', icon: <FaUser /> },
		{ name: 'Friends', link: '/component/friends', icon: <FaUsers /> },
	];

	return (
		<div className='flex justify-between items-center w-full'>
			{/* Left Navigation */}
			<div>
				<ul className='flex flex-col md:flex-row justify-center md:justify-start'>
					{leftHeaderData.map((item) => (
						<li
							key={item.name}
							className='m-2'>
							<a
								href={item.link}
								className={`flex gap-3 items-center font-semibold text-blue-500 hover:scale-90 p-2 rounded-lg transition-all duration-200`}>
								{item.icon}
								<span className='text-sm'>{item.name}</span>
							</a>
						</li>
					))}
				</ul>
			</div>
			{/*middle navigation */}
			<div className='hidden w-full  lg:flex justify-center items-center'>
				<div className='relative'>
					<input
						type='search'
						className='w-[300px] rounded-lg border-gray-200 outline-none  p-4 pe-12 text-sm shadow-sm'
						placeholder='Search'
					/>
				</div>
			</div>
			{/* Right Navigation */}
			<div>
				<Login />
			</div>
		</div>
	);
}

export default MidumeNavbar;
