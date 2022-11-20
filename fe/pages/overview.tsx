import { Container, Title } from '../components/sharedstyles';
import { getAll, Role, UserType } from '../data/user';
import styled from 'styled-components';
import { NextPage } from 'next';
import UserCard from '../components/UserCard';
import { useState } from 'react';
import { useUser } from '../context/user';

const Overview: NextPage<{ users: UserType[] }> = ({ users }) => {
	const [searchString, setSearchString] = useState('');

	const { user: loggedInUser } = useUser();

	users = users.filter((user) => user.id !== loggedInUser?.id);

	const filteredUsers = users.filter((user) => {
		const fullName = user.firstName + user.lastName;

		return searchString === ''
			? true
			: fullName.toLowerCase().includes(searchString.toLowerCase());
	});

	if (loggedInUser?.role !== Role.ADMIN) {
		return (
			<Container>
				<Title>Übersicht</Title>
				<p>Du hast keine Berechtigung diese Seite zu sehen.</p>
			</Container>
		);
	}

	return (
		<Container>
			{loggedInUser && (
				<Title>
					Welcome <span>{loggedInUser?.role}!</span>
				</Title>
			)}

			{loggedInUser?.role === Role.ADMIN && (
				<>
					<SearchWithIcon>
						<SearchInput
							type="text"
							placeholder="mitarbeiter suchen"
							onChange={(e) => {
								setSearchString(e.target.value);
							}}
						/>
						<span>&#128269;</span>
					</SearchWithIcon>

					{filteredUsers.length > 0 ? (
						<UsersContainer>
							{filteredUsers.map((user) => (
								<UserCard {...user} />
							))}
						</UsersContainer>
					) : (
						<h4>
							Keine Mitarbeiter gefunden, ändere bitte deine Suchparameter
						</h4>
					)}
				</>
			)}

			{/* <Cards /> */}
		</Container>
	);
};

export default Overview;

export async function getStaticProps() {
	const users = await getAll();
	return {
		props: {
			users,
		},
	};
}

const UsersContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	gap: 1rem;
`;
const SearchWithIcon = styled.div`
	position: relative;
	margin-bottom: 1rem;
	max-width: 302px;
	span {
		position: absolute;
		right: 0.5rem;
		right: 0.81rem;
		pointer-events: none;
		top: 50%;
		transform: translate(0, -100%);
	}
`;

const SearchInput = styled.input`
	padding: 0.5rem;
	border-radius: 0.5rem;
	border: 1px solid #ebebeb;
	margin-bottom: 1rem;
	width: 100%;
`;
