import { useState } from "react";
import "./CreateAccount.css";

export default function CreateAccount() {
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
          <img src="./images/login-banner.png" className="img-login" />
        </div>
        <div className="right-container">
          <form onSubmit={handleSubmit} className="signin-form">
            <h1>Create Account</h1>
            <input
              type="text"
              name="firstname"
              placeholder="Firstname"
              className="inputs"
              value={user.firstname}
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastname"
              placeholder="Lastname"
              value={user.lastname}
              onChange={handleChange}
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={user.username}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={user.password}
              onChange={handleChange}
            />

            <button type="submit" className="btn-signin">
              Add
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
