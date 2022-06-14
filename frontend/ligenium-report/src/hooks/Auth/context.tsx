import { createContext, FC, useEffect, useState } from 'react';

interface User {
  id: string;
  name: string;
  avatar: string;
  theme: 'dark' | 'light';
}

interface UserMethods {
  changeTheme: () => void;
}

interface Context extends User, UserMethods {}

const AuthUser = () => {
  const [user, setUser] = useState<User>({
    name: 'Knauber',
    id: '1',
    theme: 'light',
    avatar:
      'https://www.informatik.hs-mannheim.de/fileadmin/user_upload/fakultaeten/fakultaet_i/neue_webseite/Professoren_und_Mitarbeiter/peter-knauber-300px.jpg',
  });

  useEffect(() => {
    //catch from hazura

    return () => {
      /*unsubscribe*/
    };
  }, []);

  return {
    ...user,
    changeTheme: () => {
      setUser({ ...user, theme: user.theme === 'dark' ? 'light' : 'dark' });
    },
  };
};

export const authUserContext = createContext<Context>({
  name: '',
  id: '-1',
  avatar: '',
  theme: 'dark',
  changeTheme: () => {
    /* placeholder */
  },
});

export const AuthProvider: FC<{ children?: React.ReactNode }> = ({ children }) => {
  const authUser = AuthUser();
  return <authUserContext.Provider value={authUser}>{children}</authUserContext.Provider>;
};
