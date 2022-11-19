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

export const users: UserType[] = [
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
	{
		id: 3,
		email: 'judith.sims@msg.de',
		password: 'wwwwww',
		firstName: 'Judith',
		lastName: 'Sims',
		role: 'user',
		profilePicture: 'https://randomuser.me/api/portraits/women/71.jpg',
		jobTitle: 'Software Engineer',
	},
	{
		id: 4,
		email: 'ana.gauthier@msg.de',
		password: 'babylove',
		firstName: 'Ana',
		lastName: 'Gauthier',
		role: 'user',
		profilePicture: 'https://randomuser.me/api/portraits/women/30.jpg',
		jobTitle: 'Software Engineer',
	},
	{
		id: 5,
		email: 'samuel.kyllonen@msg.de',
		password: 'firefigh',
		firstName: 'Samuel',
		lastName: 'Kyllonen',
		role: 'user',
		profilePicture: 'https://randomuser.me/api/portraits/men/99.jpg',
		jobTitle: 'Software Engineer',
	},
	{
		id: 6,
		email: 'aubrey.robertson@msg.de',
		password: 'fowler',
		firstName: 'Aubrey',
		lastName: 'Robertson',
		role: 'user',
		profilePicture: 'https://randomuser.me/api/portraits/women/62.jpg',
		jobTitle: 'Software Engineer',
	},
	{
		id: 7,
		email: 'david.martin@msg.de',
		password: 'redskin',
		firstName: 'David',
		lastName: 'Martin',
		role: 'user',
		profilePicture: 'https://randomuser.me/api/portraits/men/50.jpg',
		jobTitle: 'Software Engineer',
	},
	{
		id: 8,
		email: 'ysmyn.shylyrd@msg.de',
		password: 'hewitt',
		firstName: 'یاسمین',
		lastName: 'سهيلي راد',
		role: 'user',
		profilePicture: 'https://randomuser.me/api/portraits/women/95.jpg',
		jobTitle: 'Software Engineer',
	},
	{
		id: 9,
		email: 'hugo.velasco@msg.de',
		password: 'sadie1',
		firstName: 'Hugo',
		lastName: 'Velasco',
		role: 'user',
		profilePicture: 'https://randomuser.me/api/portraits/men/77.jpg',
		jobTitle: 'Software Engineer',
	},
	{
		id: 10,
		email: 'amy.beck@msg.de',
		password: 'cheyenne',
		firstName: 'Amy',
		lastName: 'Beck',
		role: 'user',
		profilePicture: 'https://randomuser.me/api/portraits/women/0.jpg',
		jobTitle: 'Software Engineer',
	},
	{
		id: 11,
		email: 'janina.verspeek@msg.de',
		password: 'owen',
		firstName: 'Janina',
		lastName: 'Verspeek',
		role: 'user',
		profilePicture: 'https://randomuser.me/api/portraits/women/60.jpg',
		jobTitle: 'Software Engineer',
	},
	{
		id: 12,
		email: 'kelly.fowler@msg.de',
		password: 'benton',
		firstName: 'Kelly',
		lastName: 'Fowler',
		role: 'user',
		profilePicture: 'https://randomuser.me/api/portraits/men/70.jpg',
		jobTitle: 'Software Engineer',
	},
	{
		id: 13,
		email: 'ahmet.tokgoz@msg.de',
		password: 'potato',
		firstName: 'Ahmet',
		lastName: 'Tokgöz',
		role: 'user',
		profilePicture: 'https://randomuser.me/api/portraits/men/8.jpg',
		jobTitle: 'Software Engineer',
	},
	{
		id: 14,
		email: 'maya.walker@msg.de',
		password: 'spam',
		firstName: 'Maya',
		lastName: 'Walker',
		role: 'user',
		profilePicture: 'https://randomuser.me/api/portraits/women/14.jpg',
		jobTitle: 'Software Engineer',
	},
	{
		id: 15,
		email: 'nina.williams@msg.de',
		password: 'nikki1',
		firstName: 'Nina',
		lastName: 'Williams',
		role: 'user',
		profilePicture: 'https://randomuser.me/api/portraits/women/8.jpg',
		jobTitle: 'Software Engineer',
	},
	{
		id: 16,
		email: 'rishaan.prabhakaran@msg.de',
		password: 'tanker',
		firstName: 'Rishaan',
		lastName: 'Prabhakaran',
		role: 'user',
		profilePicture: 'https://randomuser.me/api/portraits/men/41.jpg',
		jobTitle: 'Software Engineer',
	},
	{
		id: 17,
		email: 'dragomir.radanovic@msg.de',
		password: 'tongue',
		firstName: 'Dragomir',
		lastName: 'Radanović',
		role: 'user',
		profilePicture: 'https://randomuser.me/api/portraits/men/51.jpg',
		jobTitle: 'Software Engineer',
	},
	{
		id: 18,
		email: 'ruben.thomas@msg.de',
		password: 'miller1',
		firstName: 'Ruben',
		lastName: 'Thomas',
		role: 'user',
		profilePicture: 'https://randomuser.me/api/portraits/men/40.jpg',
		jobTitle: 'Software Engineer',
	},
	{
		id: 19,
		email: 'carmen.lozano@msg.de',
		password: 'jeanette',
		firstName: 'Carmen',
		lastName: 'Lozano',
		role: 'user',
		profilePicture: 'https://randomuser.me/api/portraits/women/23.jpg',
		jobTitle: 'Software Engineer',
	},
];

// get user by id
export function getUserById(id: number) {
	return users.find((user) => user.id === id);
}

// login
export function login(email: string, password: string) {
	const user = users.find(
		(user) => user.email === email && user.password === password
	);
	if (!user) return;
	const { password: _, ...userWithoutPassword } = user;
	return userWithoutPassword;
}

// get all users
export async function getAll() {
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

// const userfromRandomUser = await fetch(
// 	'https://randomuser.me/api/?results=20'
// )
// 	.then((response) => response.json())
// 	.then((data) => data.results);

// const usersWithProfilePicture = userfromRandomUser.map((user) => {
// 	return {
// 		id: user.login.uuid,
// 		email: user.email.replace(/\@example.com/, '@msg.de'),
// 		password: user.login.password,
// 		firstName: user.name.first,
// 		lastName: user.name.last,
// 		role: Role.USER,
// 		profilePicture: user.picture.large,
// 		jobTitle: 'Software Engineer',
// 	};
// });

// const userToReturn = [...users, ...usersWithProfilePicture];

// console.log({ userToReturn });
