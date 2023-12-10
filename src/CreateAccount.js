import React, { useState } from "react";
import "./CreateAccount.css";
import "./root.css";
import { Link } from "react-router-dom";
import DialogBox from "./DialogBox"; // Import your DialogBox component

export default function CreateAccount() {
  document.body.style.backgroundColor = "#ffc658";

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if passwords match
    if (user.password !== user.confirmPassword) {
      setPasswordsMatch(false);
      return;
    }

    // Check if the password meets criteria
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    if (!passwordRegex.test(user.password)) {
      setValidPassword(false);
      return;
    }

    // If passwords match and password is valid, show confirmation dialog
    setShowConfirmationDialog(true);
  };

  const handleConfirmSave = () => {
    // Requesting to fetch data in the database
    fetch("http://localhost:8080/watataps/users/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      //Response sa server
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(() => {
        // If successful, show success dialog, my custom dialog
        setShowSuccessDialog(true);
      })
      .catch((error) => console.error("Error:", error))
      .finally(() => {
        // Close the confirmation dialog
        setShowConfirmationDialog(false);
      });
  };

  const handleCloseConfirmationDialog = () => {
    setShowConfirmationDialog(false);
  };

  const handleCloseSuccessDialog = () => {
    setShowSuccessDialog(false);
  };

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  return (
    <section className="signin-wrapper">
      <div className="signin-container">
        <div className="create-left-container">
          <img
            src="./images/signup-banner.png"
            className="img-login"
            alt="signup banner"
          />
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
            {!validPassword && (
              <p className="error" style={{ color: "red" }}>
                Password must be at least 8 characters long with a combination
                of uppercase, lowercase, and special characters.
              </p>
            )}
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="input-fields"
              onChange={handleChange}
            />
            {!passwordsMatch && (
              <p style={{ color: "red" }}>Passwords do not match</p>
            )}
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
      {showConfirmationDialog && (
        <DialogBox
          title="Confirm Save"
          message="Are you sure you want to save the account?"
          imageSrc="./images/confirmation-icon.png" // Change this to your confirmation image
          buttons={[
            {
              label: "Cancel",
              onClick: handleCloseConfirmationDialog,
              className: "btn-cancel",
            },
            {
              label: "Confirm",
              onClick: handleConfirmSave,
              className: "btn-confirm",
            },
          ]}
        />
      )}
      {showSuccessDialog && (
        <DialogBox
          title="Account Created Successfully"
          message="Your account has been successfully created!"
          imageSrc="./images/sad robot.png" // Change this to your success image
          buttons={[
            {
              label: "Close",
              onClick: handleCloseSuccessDialog,
              className: "btn-close",
            },
          ]}
        />
      )}
    </section>
  );
}
