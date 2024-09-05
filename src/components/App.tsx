import "../App.css";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";

function App() {
  const [authorized] = useState<boolean>(true);
  //const [authorized, setAuthorized] = useState<boolean>(true); //När authorized behöver kunna ändras på

  return (
    <>
      <Header />
      <Outlet context={{ authorized }} />
      {/* Outlet används för att dela context med barnkomponenterna. Ett context-objekt skickas till alla underkomponenter som kan använda detta för att kontrollera inloggningsstatus (authorized).*/}
    </>
  );
}

export default App;
