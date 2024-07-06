"use client"
import { createContext, useContext, useState } from 'react';

type LoggedStateContexttype = {
  isLogged: boolean | null,
  setIsLogged: React.Dispatch<React.SetStateAction<boolean | null>> | undefined
}

export const LoggedStateContext = createContext<LoggedStateContexttype>({
  isLogged: false,
  setIsLogged: undefined
});

export const StateProvider = ({ children }:{children:any}) => {
  const [ isLogged, setIsLogged ] = useState<boolean | null>(false);

  return (
    <LoggedStateContext.Provider value={{ isLogged, setIsLogged } }>
      {children}
    </LoggedStateContext.Provider>
  )
};
