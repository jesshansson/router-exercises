import "../App.css";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";

function App() {
  const [authorized] = useState<boolean>(false);
  //const [authorized, setAuthorized] = useState<boolean>(true);

  return (
    <>
      <Header />
      <Outlet context={{ authorized }} />
    </>
  );
}

export default App;
