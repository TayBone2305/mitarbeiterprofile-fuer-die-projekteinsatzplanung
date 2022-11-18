import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import msgLogo from '../assets/msg-logo.svg';

const navLinks = [
	{
		name: 'Overview',
		href: '/',
	},
	{
		name: 'About',
		href: '/about',
	},
];

const Header: React.FC<{ pathName: string }> = ({ pathName }) => {
	return (
		<MyHeader>
			<Image src={msgLogo} alt="My App Logo" width={100} height={50} />
			<Nav>
				{navLinks.map((link) => (
					<Link
						className={`${pathName === link.href ? 'active' : ''}`}
						href={link.href}>
						{link.name}
					</Link>
				))}
			</Nav>
		</MyHeader>
	);
};

export default Header;

const MyHeader = styled.header`
	display: flex;
	align-items: center;
	background-color: ${(props) => props.theme.colors.primary};
	border-radius: 0.5rem;
	margin: 0.5rem;
	padding: 0.5rem;
`;
const Nav = styled.nav`
	flex: 1;
	display: flex;
	justify-content: center;
	gap: 1rem;

	a {
		color: ${(props) => props.theme.colors.text};
		text-decoration: none;
		&.active {
			color: ${(props) => props.theme.colors.text};
			text-decoration: underline;
		}
	}
`;
