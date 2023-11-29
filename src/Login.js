import { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

export default function Login({ onLogin }) {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    credit: "",
  });

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:8080/watataps/users/getAllUsersDetails/"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const usersDetails = await response.json();

      if (usersDetails.length > 0) {
        const matchingUser = usersDetails[0].user;

        if (
          matchingUser &&
          matchingUser.username === credentials.username &&
          matchingUser.password === credentials.password
        ) {
          //To avoid losing data in refreshing char
          localStorage.setItem("username", matchingUser.username);
          localStorage.setItem("credit", usersDetails[0].credit);

          // Call the onLogin callback with the username and credit
          onLogin(matchingUser.username, usersDetails[0].credit);
          navigate("/home");
        } else {
          // Display an error message or take appropriate action for failed login
          console.log("Invalid credentials");
        }
      } else {
        console.log("No user data in the response");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  document.body.style.backgroundColor = "#ffc658";

  return (
    <section className="signin-wrapper">
      <div className="signin-container">
        <div className="left-container">
          <img
            src="./images/signin-banner.png"
            className="img-login"
            alt="signin-banner"
          />
        </div>
        <div className="right-container">
          <form className="signin-form" onSubmit={handleLogin}>
            <h1 className="heading">Welcome</h1>
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="input-fields"
              value={credentials.username}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input-fields"
              value={credentials.password}
              onChange={handleChange}
            />
            <button type="submit" className="btn-signin">
              Sign In
            </button>
            <p>
              Don't have an account yet?
              <span>
                <Link to="/account" className="to-account">
                  Sign up
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
