import { useContext } from 'react';
import { AuthProvider, authUserContext } from './context';

const useAuthUser = () => useContext(authUserContext);

export { AuthProvider, useAuthUser };