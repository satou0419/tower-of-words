import React, { useState, useEffect } from "react";
import "./root.css";
import "@fontsource/lilita-one";
import "./AccInfo.css";
import DialogBox from "./DialogBox"; // Update the path based on your folder structure

function AccInfo() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [updatedUser, setUpdatedUser] = useState({
    firstname: "",
    lastname: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  useEffect(() => {
    const userID = localStorage.getItem("userID");

    if (userID) {
      fetch(`http://localhost:8080/watataps/users/getUserById/${userID}`)
        .then((response) => response.json())
        .then((userData) => {
          setLoggedInUser(userData);
          setUpdatedUser({
            firstname: userData.user.firstname,
            lastname: userData.user.lastname,
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
          });
        });
    }
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleUpdateUserInfo = () => {
    setShowConfirmationDialog(true);
  };

  const confirmUpdate = async () => {
    const userID = localStorage.getItem("userID");

    try {
      const response = await fetch(
        `http://localhost:8080/watataps/users/updateUser/${userID}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstname: updatedUser.firstname,
            lastname: updatedUser.lastname,
          }),
        }
      );

      if (response.ok) {
        console.log("User information updated successfully");
        // Fetch and update displayed user information
        fetch(`http://localhost:8080/watataps/users/getUserById/${userID}`)
          .then((response) => response.json())
          .then((userData) => setLoggedInUser(userData));
        setShowSuccessDialog(true);
      } else {
        console.error("Failed to update user information");
      }
    } catch (error) {
      console.error("Error updating user information:", error);
    } finally {
      setShowConfirmationDialog(false);
    }
  };

  const handleUpdatePassword = async () => {
    const userID = localStorage.getItem("userID");

    try {
      const response = await fetch(
        `http://localhost:8080/watataps/users/getUserById/${userID}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: updatedUser.newPassword,
          }),
        }
      );

      if (response.ok) {
        console.log("Password updated successfully");
        setShowSuccessDialog(true);
      } else {
        console.error("Failed to update password");
      }
    } catch (error) {
      console.error("Error updating password:", error);
    }
  };

  return (
    <>
      {loggedInUser ? (
        <div className="account">
          <div className="acc-info">
            <h2 className="acc-info-title">ACCOUNT INFORMATION</h2>
            <input
              className="inputs-information-acc inputs-acc"
              type="text"
              placeholder="Username"
              value={loggedInUser.user.username}
              disabled
            ></input>
            <input
              className="inputs-information-acc inputs-acc"
              type="text"
              placeholder="Firstname"
              name="firstname"
              value={updatedUser.firstname}
              onChange={handleInputChange}
            ></input>
            <input
              className="inputs-information-acc inputs-acc"
              type="text"
              placeholder="Lastname"
              name="lastname"
              value={updatedUser.lastname}
              onChange={handleInputChange}
            ></input>
            <button
              className="btn-save save-acc"
              onClick={handleUpdateUserInfo}
            >
              Save Changes
            </button>
          </div>
          <div className="pass">
            <h2 className="acc-info-title">CHANGE PASSWORD</h2>
            <input
              className="inputs-information-acc inputs-pass"
              type="password"
              placeholder="Current Password"
              name="currentPassword"
              value={updatedUser.currentPassword}
              onChange={handleInputChange}
            ></input>
            <input
              className="inputs-information-acc inputs-pass"
              type="password"
              placeholder="New Password"
              name="newPassword"
              value={updatedUser.newPassword}
              onChange={handleInputChange}
            ></input>
            <input
              className="inputs-information-acc inputs-pass"
              type="password"
              placeholder="Confirm New Password"
              name="confirmPassword"
              value={updatedUser.confirmPassword}
              onChange={handleInputChange}
            ></input>
            <button
              className="btn-save save-pass"
              onClick={handleUpdatePassword}
            >
              Save Changes
            </button>
          </div>
        </div>
      ) : (
        <p>Please log in to view account information.</p>
      )}

      {showConfirmationDialog && (
        <DialogBox
          title="Confirm Update"
          message="Are you sure you want to update your information?"
          imageSrc={"./images/dialog-edit.gif"}
          onClose={() => setShowConfirmationDialog(false)}
          onConfirm={confirmUpdate}
          onCancel={() => setShowConfirmationDialog(false)}
          confirmText="Yes"
          cancelText="No"
          buttons={[
            {
              label: "Yes",
              className: "btn-confirm",
              onClick: confirmUpdate,
            },
            {
              label: "No",
              className: "btn-cancel",
              onClick: () => setShowConfirmationDialog(false),
            },
          ]}
        />
      )}

      {showSuccessDialog && (
        <DialogBox
          title="Update Successful"
          message="Your information has been updated successfully."
          imageSrc={"./images/dialog-check.gif"}
          onClose={() => setShowSuccessDialog(false)}
          confirmText="OK"
          buttons={[
            {
              label: "OK",
              className: "btn-confirm",
              onClick: () => setShowSuccessDialog(false),
            },
          ]}
        />
      )}
    </>
  );
}

export default AccInfo;
