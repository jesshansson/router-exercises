import { useOutletContext, Navigate } from "react-router-dom";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  // Här försöker vi använda useOutletContext men lägger till en fallback
  const context = useOutletContext<{ authorized?: boolean } | undefined>();

  // Om context är undefined eller authorized inte finns, behandla som ej auktoriserad
  const authorized = context?.authorized ?? false;

  if (!authorized) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};
