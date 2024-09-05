import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <main className="layout-nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Outlet />
    </main>
  );
}
