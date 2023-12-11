import { Link } from "react-router-dom";
import "./Shop.css";
import "./root.css";
import Inventory from './Inventory';
import "@fontsource/lilita-one";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import DialogBox from "./DialogBox"; // Import your DialogBox component

function Shop() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [userDetails, setUserDetails] = useState(null); // Add state for user details

  useEffect(() => {
    // Fetch user details when the component mounts
    const fetchUserDetails = async () => {
      try {
        const userId = localStorage.getItem("userID");

        if (userId) {
          const response = await axios.get(`http://localhost:8080/watataps/users/getUserById/${userId}`);
          setUserDetails(response.data);
        } else {
          console.log("User ID not found in local storage");
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();

    // Fetch items from the shop
    axios.get('http://localhost:8080/watataps/items/getAllItems')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handlePriceClick = (item) => {
    // Set the selected item and show the confirmation dialog
    setSelectedItem(item);
    setShowConfirmationDialog(true);
  };

  const handleConfirmPurchase = async () => {
    try {
      if (userDetails) {
        const userId = userDetails.userIDRef;
        const userCredit = userDetails.credit;

        // Check if the user has enough credit
        if (userCredit >= selectedItem.price) {
          try {
            // Get user item details
            const userItem = userDetails.userItems.find((userItem) => userItem.item.itemID === selectedItem.itemID);

            if (userItem) {
              // Update the user item quantity in the database
              const updatedQuantity = userItem.quantity + 1; // Update the quantity as per your logic
              const userItemToUpdate = { ...userItem, quantity: updatedQuantity };

              await axios.put(
                `http://localhost:8080/watataps/userItem/updateUserItem?userItemID=${userItem.userItemID}`,
                userItemToUpdate
              );

              // Update the user's credit on the server
              const updatedCredit = userCredit - selectedItem.price;
              
              await axios.put(`http://localhost:8080/watataps/userDetails/update/${userId}`, {
                credit: updatedCredit,
              });


              localStorage.setItem("credit", updatedCredit);
              setShowSuccessDialog(true);

              const updatedUserDetails = await axios.get(`http://localhost:8080/watataps/users/getUserById/${userId}`);
              const updatedUser = updatedUserDetails.data;

              console.log("Updated User Details:", updatedUser);
            } else {
              alert("User item not found");
              Inventory.updateRightContainer(selectedItem);
            }
          } catch (error) {
            console.error("Error updating user item quantity:", error);
            alert("An error occurred while updating user item quantity.");
          }
        } else {
          alert("Not enough credit to purchase this item.");
        }
      } else {
        alert("User details not found");
      }
    } catch (error) {
      console.error("Error updating user credit:", error);
      alert("An error occurred while updating user credit.");
    } finally {
      // Close the confirmation dialog
      setShowConfirmationDialog(false);
    }
  };

  const handleCancelPurchase = () => {
    // Close the confirmation dialog
    setShowConfirmationDialog(false);
  };

  const handleCloseSuccessDialog = () => {
    setShowSuccessDialog(false);
  };

  return (
    <>
      <div className="main-shop">
        <div className="shop-top-container">
          <Link to="/inventory">
            <button className="btn-next btn-next-shop" >INVENTORY</button>
          </Link>
        </div>
        <div className="main-container-shop">
          <div className="main-border-view-shop">
            <div className="main-container-shop-inner">
              <div className="word-container-scroll-shop">
                <div className="shop-title-container">
                  <h1 className="shop-title">SHOP</h1>
                </div>
                <div className="shop-display">
                  {items.map(item => (
                    <div className="shop-first-display" key={item.itemID}>
                      <div className="shop-display-box">
                        <div className="info-btn-container">
                          <img src="./images/info-btn.png" className="info-btn-pic" alt="info-btn"></img>
                        </div>
                        <div className="shop-pic-container">
                          <img src={item.imagePath} alt={item.itemName} className="bandage-pic-shop"></img>
                          <p className="shop-medkit-name">{item.itemName}</p>
                        </div>
                        <div className="button-container-shop">
                          <button className="shop-price-button"
                            onClick={() => handlePriceClick(item)}
                          >
                            <img className="shop-cube" src="./images/cube.png" alt="cube"></img>
                            <h3 className="shop-price-text">{item.price}</h3>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Display the custom dialog for confirmation */}
      {showConfirmationDialog && (
        <DialogBox
          title={`Confirm Purchase`}
          message={`Do you want to purchase ${selectedItem.itemName} for ${selectedItem.price} credits?`}
          imageSrc={selectedItem.imagePath}
          buttons={[
            {
              label: "Cancel",
              onClick: handleCancelPurchase,
              className: "btn-cancel",
            },
            {
              label: "Confirm",
              onClick: handleConfirmPurchase,
              className: "btn-confirm",
            },
          ]}
        />
      )}

      {showSuccessDialog && (
        <DialogBox
          title="Purchased Item Successfully"
          message={`Purchase successful! Your new credit balance is ${localStorage.getItem("credit")} credits`}
          imageSrc={selectedItem.imagePath}
          buttons={[
            {
              label: "Close",
              onClick: handleCloseSuccessDialog,
              className: "btn-close",
            },
          ]}
        />
      )}
    </>
  );
}

export default Shop;
