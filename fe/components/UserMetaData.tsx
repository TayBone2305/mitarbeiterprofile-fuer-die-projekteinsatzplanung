import { UserType } from '../data/user';
import Image from 'next/image';
import Link from 'next/link';
import Edit from '../assets/edit.svg';
import Phone from '../assets/phone-alt.svg';
import Mail from '../assets/envelopes.svg';
import { useRouter } from 'next/router';

const DAY_MILLISECONDS = 1000 * 60 * 60 * 24;

function getRelativeTime(timestamp) {
	const rtf = new Intl.RelativeTimeFormat('en', {
		numeric: 'auto',
	});
	const daysDifference = Math.round(
		(timestamp - new Date().getTime()) / DAY_MILLISECONDS
	);

	return rtf.format(daysDifference, 'day');
}
const categories = [
	{ name: 'Hard Skills', slug: 'hardSkills' },
	{ name: 'Soft Skills', slug: 'softSkills' },
	{ name: 'Projects', slug: 'projects' },
];

const UserMetaData: React.FC<{ user: Omit<UserType, 'password'> }> = ({
	user: {
		firstName,
		lastName,
		profilePicture,
		jobTitle,
		id,
		email,
		phone,
		hireDate,
	},
}) => {
	const router = useRouter();

	return (
		<>
			<Image
				style={{ borderRadius: '50%' }}
				src={profilePicture}
				alt="User Image"
				width={200}
				height={200}
			/>
			<h1>
				{firstName}, {lastName}
			</h1>
			<p>{jobTitle}</p>
			<p>member since: {getRelativeTime(new Date(hireDate).getTime())}</p>
			<div>
				<a href={'mailto:' + email} target="_blank">
					<Image src={Mail} alt="User Image" width={25} height={25} />
				</a>
				<a
					target="_blank"
					href={'tel:+' + phone}
					style={{ paddingLeft: '12px' }}>
					<Image src={Phone} alt="User Image" width={25} height={25} />
				</a>
				<Link href={id + '/edit'} style={{ display: 'flex' }}>
					<Image src={Edit} alt="User Image" width={25} height={25} />
					<div style={{ paddingLeft: '5px', color: '#848484' }}>Edit</div>
				</Link>
			</div>
			<div style={{ paddingTop: '30px' }}>ab 18.11.2022 Verfügbar</div>

			<TabsWrapper>
				<TabsComponent />
			</TabsWrapper>
		</>
	);
};

export default UserMetaData;

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styled from 'styled-components';

const TabsComponent = () => (
	<Tabs>
		<TabList>
			{categories.map((category) => (
				<Tab>{category.name}</Tab>
			))}
		</TabList>

		<TabPanel>
			<h2>Any content 1</h2>
		</TabPanel>
		<TabPanel>
			<h2>Any content 2</h2>
		</TabPanel>
	</Tabs>
);

const TabsWrapper = styled.nav`
	/* flex: 1; */
	display: flex;
	justify-content: center;
	gap: 2rem;

	li {
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
