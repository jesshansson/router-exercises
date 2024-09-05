import { Link } from "react-router-dom";

export function SignupStep3() {
  return (
    <main>
      <h3>Step 3: Summary & Agreement</h3>
      <form>
        <p>Review your details and accept the terms and conditions.</p>
        <label>
          <input type="checkbox" name="agreement" /> I accept the membership terms.
        </label>
      </form>
      <div>
        <Link to="/signup/step2">
          <button type="button">Back</button>
        </Link>
        <button type="submit">Submit</button>
      </div>
    </main>
  );
}
