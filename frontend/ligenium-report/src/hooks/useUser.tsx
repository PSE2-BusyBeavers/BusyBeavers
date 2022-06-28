import { createContext, FC, useContext, useEffect, useState } from 'react';

interface User {
  id: number;
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

export const users: User[] = [
  {
    name: 'Peter Knauber',
    id: 1,
    theme: 'light',
    role: 'service',
    avatar:
      'https://www.informatik.hs-mannheim.de/fileadmin/user_upload/fakultaeten/fakultaet_i/neue_webseite/Professoren_und_Mitarbeiter/peter-knauber-300px.jpg',
  },
  {
    name: 'Ferdinand Porsche',
    id: 2,
    theme: 'light',
    role: 'customer',
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/f/fb/Bundesarchiv_Bild_183-2005-1017-525%2C_Dr._Ferdinand_Porsche.jpg',
  },
];

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
