import Navbar from '@/app/component/header/navbar';
import Container from './container';

export default function Home() {
	return (
		<div className='bg-slate-100 min-h-screen container m-auto '>
			<Navbar />
			<Container />
		</div>
	);
}
