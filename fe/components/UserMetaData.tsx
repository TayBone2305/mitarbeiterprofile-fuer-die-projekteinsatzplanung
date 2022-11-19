import { UserType } from '../data/user';
import Image from 'next/image';
import Link from 'next/link';
import Edit from '../assets/edit.svg';
import Phone from '../assets/phone-alt.svg';
import Mail from '../assets/envelopes.svg';
import { Nav } from './Header';
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

const UserMetaData: React.FC<{ user: UserType }> = ({
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
	const categories = [
		{ name: 'Hard Skills', slug: 'hardSkills' },
		{ name: 'Soft Skills', slug: 'softSkills' },
		{ name: 'Projects', slug: 'projects' },
	];
	const router = useRouter();
	{
		console.log(router);
	}
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
				{firstName}, {lastName} test
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
			<div>
				{categories.map((category) => (
					<Link href={id + '/' + category.slug}>{category.name}</Link>
				))}
			</div>
			<Nav>
				{categories.map((category) => (
					<Link
						className={`${
							router.asPath === `/user/${id}/${category.slug}` ? 'active' : ''
						}`}
						href={`/user/${id}/${category.slug}`}>
						{category.name}
					</Link>
				))}
			</Nav>
		</>
	);
};

export default UserMetaData;
