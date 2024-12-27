import { Link, useNavigate } from "react-router-dom";
import "./SignIn.css";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth"; // Import the signInWithEmailAndPassword function
import { auth } from "../../firebase"; // Import the auth object from the firebase.js file
import { toast } from "react-toastify";

function FormSign() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
      toast.success("User successfully");
    } catch (error) {
      toast.error("User Invalid");
    }
  }

  return (
    <div className="formmain">
      <h1>Welcome Back!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            required
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="signupBtn">Sign In</button>
        <div className="signinLink">
          <Link to="/signup" className="tagLink">
            Create Account
          </Link>
          <Link to="/" className="tagLink">
            Forget Password
          </Link>
        </div>
      </form>
    </div>
  );
}

export default FormSign;
