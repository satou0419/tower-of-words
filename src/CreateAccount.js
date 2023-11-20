import { useState } from "react";
import "./CreateAccount.css";
import "./root.css";
import { Link } from "react-router-dom";
export default function CreateAccount() {
  document.body.style.backgroundColor = "#ffc658";

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:8080/user/insertUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  };

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  return (
    <section className="signin-wrapper">
      <div className="signin-container">
        <div className="left-container">
          <img src="./images/signup-banner.png" className="img-login" />
        </div>
        <div className="right-container">
          <form onSubmit={handleSubmit} className="signin-form">
            <h1 className="heading">Create Account</h1>
            <input
              type="text"
              name="firstname"
              placeholder="Firstname"
              className="input-fields"
              value={user.firstname}
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastname"
              placeholder="Lastname"
              className="input-fields"
              value={user.lastname}
              onChange={handleChange}
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="input-fields"
              value={user.username}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input-fields"
              value={user.password}
              onChange={handleChange}
            />
            <input
              type="password"
              name="confirm-password"
              placeholder="Confirm Password"
              className="input-fields"
              onChange={handleChange}
            />

            <button type="submit" className="btn-signin">
              Sign Up
            </button>

            <p>
              Already have an account?{" "}
              <span>
                <Link to="/login" className="to-login">
                  Login
                </Link>
              </span>
            </p>

            <span className="push-bottom">
              Terms and Conditions | Privacy Policy | Support | About Us
            </span>
          </form>
        </div>
      </div>
    </section>
  );
}
