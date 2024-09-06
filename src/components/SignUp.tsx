import { Outlet } from "react-router-dom";

export function SignUp() {
  return (
    <main className="signup-nav">
      <h3>Become a part of our member club!</h3>
      <Outlet />
    </main>
  );
}
