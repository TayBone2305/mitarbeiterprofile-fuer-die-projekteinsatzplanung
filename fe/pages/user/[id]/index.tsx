import styled from 'styled-components';
import { getUserById, users, UserType } from '../../../data/user';
import { GetStaticProps, NextPage } from 'next';
import UserMetaData from '../../../components/UserMetaData';
import UserMetaDataDetail from '../../../components/UserMetaDataDetail';

const SingleUserPage: NextPage<{ user: UserType }> = ({ user }) => {
	const { jobTitle, firstName, lastName, id, email, phone } = user;
	function switchFocusLabel(index: number) {
		focusLabel = index;
		console.log(focusLabel, 'test');
	}

	var focusLabel = 0;
	const categories = ['Hard Skills', 'Soft Skills', 'Projects'];

	return (
		<>
			<Container>
				<UserMetaDataDetail user={user} />
			</Container>
		</>
	);
};

export default SingleUserPage;

export async function getStaticPaths() {
	const availableRoutes = users.map(({ id }) => ({
		params: { id: id.toString() },
	}));

	return {
		paths: availableRoutes,
		fallback: false, // can also be true or 'blocking'
	};
}

export const getStaticProps: GetStaticProps = (context) => {
	console.log({ idOfUserTORender: context.params.id });

	const user = getUserById(Number(context.params.id));

	return {
		props: { user },
	};
};

const Main = styled.div`
	padding: 5rem 0;
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const Container = styled.div`
	padding: 0 0.5rem;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	height: 100vh;
	min-height: 100vh;
`;
