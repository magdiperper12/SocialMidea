import { ClerkProvider } from '@clerk/nextjs';
import Navbar from './component/header/navbar';
import LeftSide from './component/leftside/left-side';
import RightSide from './component/rightside/right-side';

export const metadata = {
	title: 'Historic Social',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ClerkProvider>
			<html lang='en'>
				<body>
					<Navbar />
					<div className='grid grid-cols-12 w-full xl:px-16 lg:px-10 md:px-5 px-0 py-5 bg-slate-100 min-h-screen container m-auto'>
						<div className='lg:col-span-2 hidden xl:flex'>
							<LeftSide />
						</div>
						<div className='col-span-12 md:col-span-8 xl:col-span-7'>
							{children}
						</div>
						<div className='md:col-span-4 xl:col-span-3 hidden md:flex'>
							<RightSide />
						</div>
					</div>
				</body>
			</html>
		</ClerkProvider>
	);
}
