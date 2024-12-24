import { Link } from "react-router-dom";
import "./SignIn.css";

function FormSign() {
  return (
    <div className="formmain">
      <h1>Welcome Back!</h1>
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
          <Link to="/signup">Create Account</Link>
          <Link to="/">Forget Password</Link>
        </div>
      </form>
    </div>
  );
}

export default FormSign;
