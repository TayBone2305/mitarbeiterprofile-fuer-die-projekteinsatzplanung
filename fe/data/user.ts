export type UserType = {
	id: number;
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	role: string;
	profilePicture: string;
	jobTitle: string;
};

const Role = {
	ADMIN: 'admin',
	USER: 'user',
	GUEST: 'guest',
};

// create fake user data with roles and fake profile picture

const users: UserType[] = [
	{
		id: 1,
		email: 'admin@msg.de',
		password: 'admin',
		firstName: 'Admin',
		lastName: 'User',
		role: Role.ADMIN,
		profilePicture: 'https://randomuser.me/api/portraits/men/75.jpg',
		jobTitle: 'CEO',
	},
	{
		id: 2,
		email: 'user@msg.de',
		password: 'user',
		firstName: 'Normal',
		lastName: 'User',
		role: Role.USER,
		profilePicture: 'https://randomuser.me/api/portraits/men/33.jpg',
		jobTitle: 'Software Engineer',
	},
];

// get user by id
export function getUserById(id: number) {
	return users.find((user) => user.id === id);
}

// login
export function login(username: string, password: string) {
	const user = users.find(
		(user) => user.email === username && user.password === password
	);
	if (!user) return;
	const { password: _, ...userWithoutPassword } = user;
	return userWithoutPassword;
}

// get all users
export async function getAll() {
	const userfromRandomUser = await fetch(
		'https://randomuser.me/api/?results=20'
	)
		.then((response) => response.json())
		.then((data) => data.results);

	const usersWithProfilePicture = userfromRandomUser.map((user) => {
		return {
			id: user.login.uuid,
			email: user.email.replace(/\@example.com/, '@msg.de'),
			password: user.login.password,
			firstName: user.name.first,
			lastName: user.name.last,
			role: Role.USER,
			profilePicture: user.picture.large,
			jobTitle: 'Software Engineer',
		};
	});

	return [...users, ...usersWithProfilePicture];
}

// create user
export function create(user: Omit<UserType, 'id' | 'role'>) {
	// assign user id and a few other properties then save
	const newUser = {
		...user,
		id: users.length + 1,
		role: Role.USER,
	};
	users.push(newUser);
	return newUser;
}
