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
					<ProjectInfo>
						<p>für welche Rolle möchtest du einen Mitarbeiter suchen?</p>
						<div>
							<div>
								<input
									type="radio"
									id="frontend"
									name="role"
									value="frontend"
								/>
								<label htmlFor="frontend">Frontend</label>
							</div>
							<div>
								<input type="radio" id="backend" name="role" value="backend" />
								<label htmlFor="backend">Backend</label>
							</div>
							<div>
								<input type="radio" id="design" name="role" value="design" />
								<label htmlFor="design">Design</label>
							</div>
							<div>
								<input type="radio" id="all" name="role" value="all" />
								<label htmlFor="all">Alle</label>
							</div>
						</div>
						<DateRange>
							<div>
								<label htmlFor="start">von</label>

								<input type="date" name="project-start" id="project-start" />
							</div>
							<div>
								<label htmlFor="end">bis</label>

								<input type="date" name="project-end" id="project-end" />
							</div>
						</DateRange>
					</ProjectInfo>

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
	margin-bottom: 3rem;
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

const ProjectInfo = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	gap: 1rem;
	margin-bottom: 1rem;
	accent-color: ${(props) => props.theme.colors.secondary};

	> *:first-child {
		grid-column: 1 / -1;
		margin: 0;
	}
`;

const DateRange = styled.div`
	display: flex;
	gap: 1rem;
	input {
		padding: 0.51rem;
	}
`;
