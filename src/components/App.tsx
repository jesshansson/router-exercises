import { Outlet } from "react-router-dom";
import { AuthProvider } from "../AuthProvider";
import Header from "./Header";
import "../App.css";

function App() {
  return (
    <>
      <Header />
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    </>
  );
}

export default App;
