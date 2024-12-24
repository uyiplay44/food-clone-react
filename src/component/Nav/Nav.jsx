import "./Nav.css";
import Logo from "../../assets/Group 12.png";
import { Link, useNavigate } from "react-router";

function Nav() {
  const nagviate = useNavigate();

  const handleSignup = () => {
    nagviate("/signup");
  };
  return (
    <div className="navSection">
      <Link to="/" className="navImg Link">
        <img src={Logo} alt="" />
        <h1>Lilies Food</h1>
      </Link>

      <ul className="navLinks">
        <Link to="/" className="Link text">
          Home
        </Link>
        <Link to="/signin" className="Link text1">
          Login
        </Link>
        <div>
          <button className="btnSignup" onClick={handleSignup}>
            Sign Up
          </button>
        </div>
      </ul>
    </div>
  );
}

export default Nav;
