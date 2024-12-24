import { Link } from "react-router-dom";
import "./SignIn.css";

function FormSign() {
  return (
    <div className="formmain">
      <h1>Welcome to Lilies!</h1>
      <form>
        <div>
          <input type="text" placeholder="Enter email" name="email" />
        </div>
        <div>
          <input
            required
            type="password"
            placeholder="Password"
            name="password"
          />
        </div>
        <button className="signupBtn">Sigup</button>
        <div className="signinLink">
          <p>
            Already have an account? <Link to="/signup">Register</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default FormSign;
