import { createContext, FC, useEffect, useState } from 'react';

interface User {
  id: string,
  name: string,
  avatar: string
}

const AuthUser = () => {
  const [user] = useState<User>({
    name: "Knauber",
    id: "1",
    avatar: "https://www.informatik.hs-mannheim.de/fileadmin/user_upload/fakultaeten/fakultaet_i/neue_webseite/Professoren_und_Mitarbeiter/peter-knauber-300px.jpg"
  })

  useEffect(() => {
    //catch from hazura

    return () => {
      /*unsubscribe*/
    };
  }, [])

  return user;
}

export const authUserContext = createContext<User>({ name: "", id: "-1", avatar: ""});

export const AuthProvider: FC<{ children?: React.ReactNode }> = ({ children }) => {
  const authUser = AuthUser();
  return (
    <authUserContext.Provider value={authUser}>
      {children}
    </authUserContext.Provider>
  )
}
