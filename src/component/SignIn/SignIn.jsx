import signinphoto from "../../assets/Group 13.png";
import FormSign from "./FormSign";

function SignIn() {
  return (
    <section>
      <div className="signsection">
        <div className="signupmain">
          <img src={signinphoto} alt="signinphoto" className="signupimg" />
          <FormSign />
        </div>
      </div>
    </section>
  );
}

export default SignIn;
