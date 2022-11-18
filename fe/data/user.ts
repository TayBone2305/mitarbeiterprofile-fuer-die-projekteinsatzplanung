type UserType = {
	id: number;
	username: string;
	password: string;
	firstName: string;
	lastName: string;
	role: string;
	profilePicture: string;
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
		username: 'admin',
		password: 'admin',
		firstName: 'Admin',
		lastName: 'User',
		role: Role.ADMIN,
		profilePicture: 'https://randomuser.me/api/portraits/men/75.jpg',
	},
	{
		id: 2,
		username: 'user',
		password: 'user',
		firstName: 'Normal',
		lastName: 'User',
		role: Role.USER,
		profilePicture: 'https://randomuser.me/api/portraits/men/33.jpg',
	},
];

// get user by id
export function getUserById(id: number) {
	return users.find((user) => user.id === id);
}

// login
export function login(username: string, password: string) {
	const user = users.find(
		(user) => user.username === username && user.password === password
	);
	if (!user) return;
	const { password: _, ...userWithoutPassword } = user;
	return userWithoutPassword;
}

// get all users
export function getAll() {
	return users.map((user) => {
		const { password: _, ...userWithoutPassword } = user;
		return userWithoutPassword;
	});
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
