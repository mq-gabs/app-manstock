import { ReactElement, createContext, useContext, useEffect, useState } from "react";

interface IUserData {
  token: string;
  user: {
    created_at: string;
    email: string;
    id: string;
    name: string;
    password: string;
    profile_id: string;
    updated_at: string;
  }
}

interface IAuthContext {
  userData: IUserData;
  setUserData: (arg: any) => void;
}

const storageNick = '@manstock:user';

const AuthContext = createContext({} as IAuthContext);

const AuthProvider = ({ children }: { children: ReactElement }) => {
  const localUserData = JSON.parse(localStorage.getItem(storageNick) || '{}');

  const [userData, setUserData] = useState<IUserData>(localUserData || {} as IUserData);

  useEffect(() => {
    if (!userData.token) return;
    localStorage.setItem(storageNick, JSON.stringify(userData));
  }, [userData])

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };