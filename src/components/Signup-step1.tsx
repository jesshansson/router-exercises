import { Link } from "react-router-dom";

export function SignupStep1() {
  return (
    <main>
      <h3>Personal information</h3>
      <form>
        <label>
          Name:
          <input type="text" name="name" placeholder="Enter your name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" placeholder="Enter your email" />
        </label>
      </form>
      <Link to="/signup/step2">
        <button>Next</button>
      </Link>
    </main>
  );
}
