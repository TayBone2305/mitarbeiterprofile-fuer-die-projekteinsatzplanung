import { useRouter } from 'next/router';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
	const router = useRouter();

	return (
		<div>
			<Header pathName={router.pathname} />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
