'use client';

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

interface ILogInContext {
  isLoggedIn: any;
  setIsLoggedIn: Dispatch<SetStateAction<any>>;
}

const LogInContext = createContext<ILogInContext>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

export function LogInProvider({ children }: { children: ReactNode }) {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <LogInContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </LogInContext.Provider>
  );
}

export function useLogInState() {
  return useContext(LogInContext);
}
