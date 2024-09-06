import { NavLink } from "react-router-dom";

interface LinkState {
  isActive: boolean;
  isPending: boolean;
  isTransitioning: boolean;
}

export default function Header() {
  const handleLinkState = ({ isActive, isPending, isTransitioning }: LinkState) =>
    [
      isPending ? "pending" : "",
      isActive ? "active" : "",
      isTransitioning ? "transitioning" : "",
    ].join(" ");
  //till exempel om isActive är true och de andra är false: ["", "active", ""], .join sätter ihop till en sträng. Om både isActive och isPending är true skulle resultatet vara "pending active"

  return (
    <main className="nav-header">
      <nav>
        <NavLink className={handleLinkState} to="/">
          Home
        </NavLink>
        <NavLink className={handleLinkState} to="/about">
          About
        </NavLink>
        <NavLink className={handleLinkState} to="/contact">
          Contact
        </NavLink>
        <NavLink className={handleLinkState} to="/layout">
          Layout
        </NavLink>
        <NavLink className={handleLinkState} to="/dashboard">
          Dashboard
        </NavLink>
        <NavLink className={handleLinkState} to="/signup">
          Sign up
        </NavLink>
      </nav>
    </main>
  );
}
