export type UserType = {
	id: number;
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	role: Role;
	profilePicture: string;
	jobTitle: string;
	phone: string;
	hireDate: string;
	skills: {
		name: string;
		type: SkillType;
	}[];
};

export enum SkillType {
	HARD = 'hard',
	SOFT = 'soft',
}

export enum Role {
	ADMIN = 'admin',
	USER = 'user',
	GUEST = 'guest',
}

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
		phone: '1234567890',
		hireDate: '2009-01-01',
		skills: [
			{
				name: 'HTML',
				type: SkillType.HARD,
			},
			{
				name: 'CSS',
				type: SkillType.HARD,
			},
			{
				name: 'JavaScript',
				type: SkillType.HARD,
			},
			{
				name: 'Organisationstalent',
				type: SkillType.SOFT,
			},
		],
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
		phone: '1234567890',
		hireDate: '2019-01-01',
		skills: [
			{
				name: 'HTML',
				type: SkillType.HARD,
			},
			{
				name: 'Haskell',
				type: SkillType.HARD,
			},
			{
				name: 'Java',
				type: SkillType.HARD,
			},
			{
				name: 'React',
				type: SkillType.HARD,
			},
			{
				name: 'Teamfäigkeit',
				type: SkillType.SOFT,
			},
			{
				name: 'Kommunikationsfähigkeit',
				type: SkillType.SOFT,
			},
		],
	},
	{
		id: 3,
		email: 'judith.sims@msg.de',
		password: 'wwwwww',
		firstName: 'Judith',
		lastName: 'Sims',
		role: Role.GUEST,
		profilePicture: 'https://randomuser.me/api/portraits/women/71.jpg',
		jobTitle: 'Frontend Engineer',
		phone: '1234567890',
		hireDate: '2019-01-01',
		skills: [
			{
				name: 'OCaml',
				type: SkillType.HARD,
			},
			{
				name: 'JavaScript',
				type: SkillType.HARD,
			},
			{
				name: 'Vue.js',
				type: SkillType.HARD,
			},
			{
				name: 'Durchsetzungsvermögen',
				type: SkillType.SOFT,
			},
		],
	},
	{
		id: 4,
		email: 'ana.gauthier@msg.de',
		password: 'babylove',
		firstName: 'Ana',
		lastName: 'Gauthier',
		role: Role.GUEST,
		profilePicture: 'https://randomuser.me/api/portraits/women/30.jpg',
		jobTitle: 'Software Engineer',
		phone: '1234567890',
		hireDate: '2019-01-01',
		skills: [
			{
				name: 'Swift',
				type: SkillType.HARD,
			},
			{
				name: 'C#',
				type: SkillType.HARD,
			},
			{
				name: 'C++',
				type: SkillType.HARD,
			},
			{
				name: 'Kreativ',
				type: SkillType.SOFT,
			},
		],
	},
	{
		id: 5,
		email: 'samuel.kyllonen@msg.de',
		password: 'firefigh',
		firstName: 'Samuel',
		lastName: 'Kyllonen',
		role: Role.USER,
		profilePicture: 'https://randomuser.me/api/portraits/men/99.jpg',
		jobTitle: 'Software Engineer',
		phone: '1234567890',
		hireDate: '2020-01-01',
		skills: [
			{
				name: 'Ruby',
				type: SkillType.HARD,
			},
			{
				name: 'JavaScript',
				type: SkillType.HARD,
			},
			{
				name: 'C',
				type: SkillType.HARD,
			},
			{
				name: 'SQL',
				type: SkillType.HARD,
			},
			{
				name: 'JavaScript',
				type: SkillType.HARD,
			},			{
				name: 'Empathie',
				type: SkillType.SOFT,
			},
		],
	},
	{
		id: 6,
		email: 'aubrey.robertson@msg.de',
		password: 'fowler',
		firstName: 'Aubrey',
		lastName: 'Robertson',
		role: Role.ADMIN,
		profilePicture: 'https://randomuser.me/api/portraits/women/62.jpg',
		jobTitle: 'Software Engineer',
		phone: '1234567890',
		hireDate: '2019-01-01',
		skills: [
			{
				name: 'PHP',
				type: SkillType.HARD,
			},
			{
				name: 'Objective-C',
				type: SkillType.HARD,
			},
			{
				name: 'Python',
				type: SkillType.HARD,
			},
			{
				name: 'Teamfähig',
				type: SkillType.SOFT,
			},
		],
	},
	{
		id: 7,
		email: 'david.martin@msg.de',
		password: 'redskin',
		firstName: 'David',
		lastName: 'Martin',
		role: Role.GUEST,
		profilePicture: 'https://randomuser.me/api/portraits/men/50.jpg',
		jobTitle: 'Software Engineer',
		phone: '1234567890',
		hireDate: '2019-01-01',
		skills: [
			{
				name: 'VHDL',
				type: SkillType.HARD,
			},
			{
				name: 'Fortran 90',
				type: SkillType.HARD,
			},
			{
				name: 'Rust',
				type: SkillType.HARD,
			},
			{
				name: 'Strukturierte Arbeitsweise',
				type: SkillType.SOFT,
			},
		],
	},
	{
		id: 8,
		email: 'ysmyn.shylyrd@msg.de',
		password: 'hewitt',
		firstName: 'یاسمین',
		lastName: 'سهيلي راد',
		role: Role.GUEST,
		profilePicture: 'https://randomuser.me/api/portraits/women/95.jpg',
		jobTitle: 'Software Engineer',
		phone: '1234567890',
		hireDate: '2019-01-01',
		skills: [
			{
				name: 'HTML',
				type: SkillType.HARD,
			},
			{
				name: 'x86 Assembly',
				type: SkillType.HARD,
			},
			{
				name: 'ARM Assembly',
				type: SkillType.HARD,
			},
			{
				name: 'Flexibel',
				type: SkillType.SOFT,
			},
		],
	},
	{
		id: 9,
		email: 'hugo.velasco@msg.de',
		password: 'sadie1',
		firstName: 'Hugo',
		lastName: 'Velasco',
		role: Role.GUEST,
		profilePicture: 'https://randomuser.me/api/portraits/men/77.jpg',
		jobTitle: 'Software Engineer',
		phone: '1234567890',
		hireDate: '2019-01-01',
		skills: [
			{
				name: 'GO',
				type: SkillType.HARD,
			},
			{
				name: 'PHP',
				type: SkillType.HARD,
			},
			{
				name: 'Perl',
				type: SkillType.HARD,
			},
			{
				name: 'Zielorientiert',
				type: SkillType.SOFT,
			},
		],
	},
	{
		id: 10,
		email: 'amy.beck@msg.de',
		password: 'cheyenne',
		firstName: 'Amy',
		lastName: 'Beck',
		role: Role.GUEST,
		profilePicture: 'https://randomuser.me/api/portraits/women/0.jpg',
		jobTitle: 'Software Engineer',
		phone: '1234567890',
		hireDate: '2019-01-01',
		skills: [
			{
				name: 'JavaEE',
				type: SkillType.HARD,
			},
			{
				name: 'Python',
				type: SkillType.HARD,
			},
			{
				name: 'C',
				type: SkillType.HARD,
			},
			{
				name: 'Empathie',
				type: SkillType.SOFT,
			},
		],
	},
	{
		id: 11,
		email: 'janina.verspeek@msg.de',
		password: 'owen',
		firstName: 'Janina',
		lastName: 'Verspeek',
		role: Role.GUEST,
		profilePicture: 'https://randomuser.me/api/portraits/women/60.jpg',
		jobTitle: 'Software Engineer',
		phone: '1234567890',
		hireDate: '2019-01-01',
		skills: [
			{
				name: 'Visual Basic',
				type: SkillType.HARD,
			},
			{
				name: 'Pascal',
				type: SkillType.HARD,
			},
			{
				name: 'Basic',
				type: SkillType.HARD,
			},
			{
				name: 'Selbstdiszipiln',
				type: SkillType.SOFT,
			}
		],
	},
	{
		id: 12,
		email: 'kelly.fowler@msg.de',
		password: 'benton',
		firstName: 'Kelly',
		lastName: 'Fowler',
		role: Role.ADMIN,
		profilePicture: 'https://randomuser.me/api/portraits/men/70.jpg',
		jobTitle: 'Software Engineer',
		phone: '1234567890',
		hireDate: '2019-01-01',
		skills: [
			{
				name: 'Lisp',
				type: SkillType.HARD,
			},
			{
				name: 'LUA',
				type: SkillType.HARD,
			},
			{
				name: 'M',
				type: SkillType.HARD,
			},
			{
				name: 'Organisationstalent',
				type: SkillType.SOFT,
			},
		],
	},
	{
		id: 13,
		email: 'ahmet.tokgoz@msg.de',
		password: 'potato',
		firstName: 'Ahmet',
		lastName: 'Tokgöz',
		role: Role.ADMIN,
		profilePicture: 'https://randomuser.me/api/portraits/men/8.jpg',
		jobTitle: 'Software Engineer',
		phone: '1234567890',
		hireDate: '2019-01-01',
		skills: [
			{
				name: 'HTML',
				type: SkillType.HARD,
			},
			{
				name: 'CSS',
				type: SkillType.HARD,
			},
			{
				name: 'PostScript',
				type: SkillType.HARD,
			},
			{
				name: 'Kritikfähig',
				type: SkillType.SOFT,
			},
		],
	},
	{
		id: 14,
		email: 'maya.walker@msg.de',
		password: 'spam',
		firstName: 'Maya',
		lastName: 'Walker',
		role: Role.ADMIN,
		profilePicture: 'https://randomuser.me/api/portraits/women/14.jpg',
		jobTitle: 'Software Engineer',
		phone: '1234567890',
		hireDate: '2019-01-01',
		skills: [
			{
				name: 'Joy',
				type: SkillType.HARD,
			},
			{
				name: 'ML',
				type: SkillType.HARD,
			},
			{
				name: 'OPAL',
				type: SkillType.HARD,
			},
			{
				name: 'Teamfähigkeit',
				type: SkillType.SOFT,
			},
		],
	},
	{
		id: 15,
		email: 'nina.williams@msg.de',
		password: 'nikki1',
		firstName: 'Nina',
		lastName: 'Williams',
		role: Role.ADMIN,
		profilePicture: 'https://randomuser.me/api/portraits/women/8.jpg',
		jobTitle: 'Software Engineer',
		phone: '1234567890',
		hireDate: '2019-01-01',
		skills: [
			{
				name: 'D',
				type: SkillType.HARD,
			},
			{
				name: 'Visual Basic',
				type: SkillType.HARD,
			},
			{
				name: 'Fortran',
				type: SkillType.HARD,
			},
			{
				name: 'Eigeninitiative',
				type: SkillType.SOFT,
			},
		],
	},
	{
		id: 16,
		email: 'rishaan.prabhakaran@msg.de',
		password: 'tanker',
		firstName: 'Rishaan',
		lastName: 'Prabhakaran',
		role: Role.ADMIN,
		profilePicture: 'https://randomuser.me/api/portraits/men/41.jpg',
		jobTitle: 'Software Engineer',
		phone: '1234567890',
		hireDate: '2019-01-01',
		skills: [
			{
				name: 'HTML',
				type: SkillType.HARD,
			},
			{
				name: 'CSS',
				type: SkillType.HARD,
			},
			{
				name: 'JavaScript',
				type: SkillType.HARD,
			},
			{
				name: 'Stressresitent',
				type: SkillType.SOFT,
			},
		],
	},
	{
		id: 17,
		email: 'dragomir.radanovic@msg.de',
		password: 'tongue',
		firstName: 'Dragomir',
		lastName: 'Radanović',
		role: Role.GUEST,
		profilePicture: 'https://randomuser.me/api/portraits/men/51.jpg',
		jobTitle: 'Software Engineer',
		phone: '1234567890',
		hireDate: '2019-01-01',
		skills: [
			{
				name: 'Bliss',
				type: SkillType.HARD,
			},
			{
				name: 'Oberon',
				type: SkillType.HARD,
			},
			{
				name: 'CLIST',
				type: SkillType.HARD,
			},			{
				name: 'Kommunikativ',
				type: SkillType.SOFT,
			},
		],
	},
	{
		id: 18,
		email: 'ruben.thomas@msg.de',
		password: 'miller1',
		firstName: 'Ruben',
		lastName: 'Thomas',
		role: Role.GUEST,
		profilePicture: 'https://randomuser.me/api/portraits/men/40.jpg',
		jobTitle: 'Software Engineer',
		phone: '1234567890',
		hireDate: '2019-01-01',
		skills: [
			{
				name: 'HTML',
				type: SkillType.HARD,
			},
			{
				name: 'CSS',
				type: SkillType.HARD,
			},
			{
				name: 'JavaScript',
				type: SkillType.HARD,
			},
		],
	},
	{
		id: 19,
		email: 'carmen.lozano@msg.de',
		password: 'jeanette',
		firstName: 'Carmen',
		lastName: 'Lozano',
		role: Role.ADMIN,
		profilePicture: 'https://randomuser.me/api/portraits/women/23.jpg',
		jobTitle: 'Software Engineer',
		phone: '1234567890',
		hireDate: '2019-01-01',
		skills: [
			{
				name: 'HTML',
				type: SkillType.HARD,
			},
			{
				name: 'CSS',
				type: SkillType.HARD,
			},
			{
				name: 'JavaScript',
				type: SkillType.HARD,
			},
		],
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
