import { Outlet } from "react-router-dom";

export function SignUp() {
  return (
    <main className="signup-nav">
      <h3>Become a part of our family!</h3>

      <Outlet />
    </main>
  );
}
// <Link to="step1">SignUp step 1</Link>
// <Link to="step2">SignUp step 2</Link>
// <Link to="step3">SignUp step 3</Link>
