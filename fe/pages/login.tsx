import { useRouter } from 'next/router';
import { useState } from 'react';
import { useUser } from '../context/user';
import { login as loginUser } from '../data/user';

const Login: React.FC = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const { user, setUser } = useUser();
	const router = useRouter();

	const login = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const user = loginUser(email, password);
		if (user) {
			setUser(user);
			setError('');
			router.replace('/');
		} else {
			setError('Invalid email or password');
		}
	};

	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={login}>
				<label htmlFor="email">Email</label>
				<input
					onChange={(e) => setEmail(e.target.value)}
					value={email}
					type="email"
					name="email"
					id="email"
				/>
				<label htmlFor="password">Password</label>
				<input
					onChange={(e) => setPassword(e.target.value)}
					value={password}
					type="password"
					name="password"
					id="password"
				/>
				<button type="submit">Login</button>
			</form>
			{error && <p>{error}</p>}
		</div>
	);
};

export default Login;
