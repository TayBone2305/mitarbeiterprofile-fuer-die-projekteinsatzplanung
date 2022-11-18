import { createContext, useContext, useState } from 'react';
import { UserType } from '../data/user';

interface UserUserType {
	user: Omit<UserType, 'password'> | null;
	setUser: (user: Omit<UserType, 'password'> | null) => void;
}

const UserContext = createContext<UserUserType>({
	user: null,
	setUser: () => {},
});

export const useUser = () => useContext(UserContext);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [user, setUser] = useState<Omit<UserType, 'password'> | null>(null);

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};
