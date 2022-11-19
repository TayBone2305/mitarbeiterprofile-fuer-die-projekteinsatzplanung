import styled from 'styled-components';
import UserMetaData from '../components/UserMetaData';
import { useUser } from '../context/user';

const Profile = () => {
	const { user } = useUser();

	if (!user) {
		return <div>Yuu need to be logged in to see this page</div>;
	}

	return (
		<Container>
			<UserMetaData user={user} />
		</Container>
	);
};

export default Profile;

const Container = styled.div`
	max-width: 875px;
	margin: 0 auto;
`;
