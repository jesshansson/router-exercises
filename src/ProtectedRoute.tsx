import { useOutletContext, Navigate } from "react-router-dom";

//ProtectedRouteProps: Ett objekt som innehåller en nyckel, children, som måste ha en React.ReactNode som värde.
type ProtectedRouteProps = { //ProtectedRoute-komponenten tar emot en children-prop som har typen React.ReactNode.
  children: React.ReactNode; //React.ReactNode: en typ i React som kan representera alla typer av element som React kan rendera (t.ex. JSX, text, komponenter, etc.).
};

// Komponentens props är { children }, och TypeScript-typen för dessa props är ProtectedRouteProps
export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  //Försök att hämta context från Outlet (useOutletContext). "?." används för att säkert kolla om det finns, då context inte alltid är definierat
  const context = useOutletContext<{ authorized?: boolean } | undefined>();

  // Om context inte existerar eller om authorized är odefinierat, så antas authorized vara false som standard. Detta är viktigt för att förhindra fel om useOutletContext inte returnerar det vi förväntar oss.
  const authorized = context?.authorized ?? false;

  if (!authorized) {
    return <Navigate to="/" replace />;
    // replace-attributet så att användaren inte kan gå "bakåt" till den skyddade sidan i webbläsarens historik.
  }

  return <>{children}</>;
};
