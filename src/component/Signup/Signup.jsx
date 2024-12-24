import "./Signup.css";
import signupphoto from "../../assets/Group14.png";
import Form from "./Form";
// import Form from "./form";

function Signup() {
  return (
    <section>
      <div className="signsection">
        <div className="signupmain">
          <img src={signupphoto} alt="signupphoto" className="signupimg" />
          <Form />
        </div>
      </div>
    </section>
  );
}

export default Signup;
