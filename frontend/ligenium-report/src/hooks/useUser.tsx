import { createContext, FC, useContext, useEffect, useState } from 'react';

interface User {
  id: string;
  name: string;
  avatar: string;
  role: 'service' | 'customer';
  theme: 'dark' | 'light';
}

type UserContext = {
  user: User | undefined;
  setUser: (user: User | undefined) => void;
  changeTheme: (theme: 'dark' | 'light') => void;
};

export const UserContext = createContext<UserContext>({
  user: undefined,
  setUser() {},
  changeTheme() {},
});

export const UserProvider: FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [user, _setUser] = useState<User | undefined>(
    localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : undefined,
  );

  function setUser(user: User | undefined) {
    _setUser(user);
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }

  function changeTheme(theme: 'dark' | 'light') {
    setUser(user && { ...user, theme });
  }

  return <UserContext.Provider value={{ user, setUser, changeTheme }}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
