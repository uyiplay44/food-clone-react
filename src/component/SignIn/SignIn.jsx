import signupphoto from "../../assets/Group14.png";

import FormSign from "./FormSign";

function SignIn() {
  return (
    <section>
      <div className="signsection">
        <div className="signupmain">
          <img src={signupphoto} alt="signupphoto" className="signupimg" />
          <FormSign />
        </div>
      </div>
    </section>
  );
}

export default SignIn;
