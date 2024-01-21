'use client';

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

interface IAuthContext {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<any>>;
  userData: {
    name: string;
    surname: string;
    email: string;
    phone: string;
    username: string;
  };
  setUserData: Dispatch<SetStateAction<any>>;
}

const AuthContext = createContext<IAuthContext>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  userData: {
    name: '',
    surname: '',
    email: '',
    phone: '',
    username: '',
  },
  setUserData: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  let [userData, setUserData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    username: '',
  });

  useEffect(() => {
    const userData = localStorage.getItem('logged_in_as');
    if (userData) {
      setUserData(JSON.parse(userData));
    }
    const isLogged = localStorage.getItem('is_logged_in');
    if (isLogged) {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        userData,
        setUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthState() {
  return useContext(AuthContext);
}
