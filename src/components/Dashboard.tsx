import { Outlet, useNavigate } from "react-router-dom";

export function Dashboard() {
  const navigate = useNavigate();

  return (
    <main className="nav-dashboard">
      <button onClick={() => navigate("/dashboard/settings")}>Settings</button>
      <button onClick={() => navigate("/dashboard/stats")}>Stats</button>
      <button onClick={() => navigate("/dashboard/account")}>My Account</button>
      <Outlet />
    </main>
  );
}
