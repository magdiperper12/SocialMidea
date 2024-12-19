import LargNav from './LargNav';
import MidumeNave from './MidumeNave';
import MobileNav from './MobileNav';

function Navbar() {
	return (
		<div className='bg-white  text-blue-600 w-full px-3 md:px-8 lg:px-10  p-3'>
			<div className=' container   m-auto'>
				<div className='hidden md:hidden lg:flex'>
					<LargNav />
				</div>
				<div className='hidden md:flex lg:hidden'>
					<MidumeNave />
				</div>
				<div className='flex md:hidden '>
					<MobileNav />
				</div>
			</div>
		</div>
	);
}

export default Navbar;
