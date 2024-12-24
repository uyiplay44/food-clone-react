import { useState } from "react";
import "./New.css";

function New() {
  const [email, setEmail] = useState({
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmail({
      ...email,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="newMain">
      <div className="newContainer">
        <div className="newTitle">
          <h2>Get notified when we update!</h2>
          <p>
            Get notified when we add new items to our specials menu, update our
            price list of have promos!
          </p>
        </div>
        <div>
          <form className="newForm" onSubmit={handleSubmit}>
            <input
              className="newInput"
              type="text"
              name="name"
              placeholder="gregphillips@gmail.com"
              onChange={handleChange}
            />
            <button className="newBtn">Get notified</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default New;
