import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const nagivate = useNavigate();

  const { firstName, lastName, email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      //create user with email and password
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      updateProfile(user, {
        displayName: firstName + " " + lastName,
      });

      if (user) {
        //firestore db
        await setDoc(doc(db, "User", user.uid), {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        });
      }
      //nahigate to the signin page
      nagivate("/signin");
      //show success message via toast
      toast.success("User created successfully");
      console.log(user);
    } catch (error) {
      toast.error("Please fill in the information correctly");
    }
  }

  return (
    <div className="formmain">
      <h1>Welcome to Lilies!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={handleChange}
            name="firstName"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={handleChange}
            name="lastName"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter email"
            value={email}
            onChange={handleChange}
            name="email"
          />
        </div>
        <div>
          <input
            required
            type="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
            name="password"
          />
        </div>
        <button className="signupBtn">Sigup</button>
        <div className="signinLink">
          <p>
            Already have an account? <Link to="/signin">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Form;
