import { Link } from "react-router-dom";

export function SignupStep2() {
  return (
    <main>
        <h3>Step 2: Account Information</h3>
        <form>
          <label>
            Username:
            <input type="text" name="username" placeholder="Enter your username" />
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="password" placeholder="Enter your password" />
          </label>
        </form>
        <div>
          <Link to="/signup/step1">
            <button type="button">Back</button>
          </Link>
          <Link to="/signup/step3">
            <button type="button">Next</button>
          </Link>
        </div>
    </main>
  );
}
