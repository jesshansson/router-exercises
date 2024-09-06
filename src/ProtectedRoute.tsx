import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { ReactNode, useContext } from "react";

type ProtectedRouteProps = {
  children: ReactNode;
};

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { authorized } = useContext(AuthContext); // För att hämta auktoriseringsstatus från AuthProvider

  if (!authorized) {
    return <Navigate to="/signup" replace />;
  }

  return <>{children}</>;
};
