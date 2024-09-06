import { createContext, useState, ReactNode, ReactElement } from "react";

interface IAuthContext {
  authorized: boolean;
  setAuthorized: (auth: boolean) => void;
}

interface IAuthProviderProps {
  children: ReactNode;
}

// Skapar context, där auktoriseringsstatusen hålls globalt
export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

// Provider-komponent för att dela auktorisering till barnkomponentrt
export function AuthProvider({ children }: IAuthProviderProps): ReactElement {
  const [authorized, setAuthorized] = useState<boolean>(true); // Auktoriseringsstatus, true=inloggad

  return (
    <AuthContext.Provider value={{ authorized, setAuthorized }}>{children}</AuthContext.Provider>
  );
}
