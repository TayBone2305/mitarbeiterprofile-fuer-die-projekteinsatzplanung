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
	background-color: ${(props) => props.theme.colors.white};
	border-radius: 0.5rem;
	margin: 0.5rem;
	padding: 0.5rem;
	position: sticky;
	top: 0.5rem;
	box-shadow: 0 0 0.5rem 0.5rem rgba(0, 0, 0, 0.1);
`;
const Nav = styled.nav`
	flex: 1;
	display: flex;
	justify-content: center;
	gap: 2rem;

	a {
		position: relative;
		color: ${(props) => props.theme.colors.primary};
		text-decoration: none;
		font-weight: bolder;
		&::after {
			content: '';
			display: block;
			opacity: 0;
			position: absolute;
			left: -8px;
			bottom: 4px;
			width: 70px;
			height: 7px;
			border-radius: 50%;
			background-color: ${(props) => props.theme.colors.secondary};
			transition: width 0.3s ease-in-out 1s, bottom 0.3s ease-in-out 1s;
		}
		&.active {
			color: ${(props) => props.theme.colors.gray};

			&::after {
				transition: width 0.3s ease-in-out;
				width: 7px;
				opacity: 1;
			}
		}
	}
`;
