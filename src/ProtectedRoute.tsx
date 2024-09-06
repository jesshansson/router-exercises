import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { ReactNode, useContext } from "react";

type ProtectedRouteProps = {
  children: ReactNode;
};

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { authorized } = useContext(AuthContext); // useAuth för att få auktoriseringsstatus

  if (!authorized) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};
