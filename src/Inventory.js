import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Inventory.css";
import "./root.css";
import "@fontsource/lilita-one";
import axios from "axios";
function Inventory() {
  const [items, setItems] = useState([]);
  const [userDetails, setUserDetails] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/watataps/items/getAllItems"
        );
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching items", error);
      }
    };
    fetchItems();
    fetchUserDetails();
  }, []);
  const handleButtonClick = async (itemId) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/watataps/items/getItemById/${itemId}`
      );
      const selectedItem = response.data;
      // Update the right container with the selected item details
      setSelectedItem(selectedItem);
    } catch (error) {
      console.error("Error fetching item details", error);
    }
  };
  const fetchUserDetails = async () => {
    try {
      const userId = localStorage.getItem("userID");
      if (userId) {
        const response = await axios.get(
          `http://localhost:8080/watataps/users/getUserById/${userId}`
        );
        setUserDetails(response.data);
      } else {
        console.log("User ID not found in local storage");
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };
  return (
    <div className="main-inventory">
      <div className="inventory-top-container">
        <Link to="/shop">
          <button className="btn-next btn-next-inventory">SHOP</button>
        </Link>
      </div>
      <div className="main-container-overall-inventory">
        <div className="main-container-left-inventory">
          <div className="main-border-view-inventory">
            <div className="word-container-scroll-inventory">
              {items.map((item) => {
                const userItem = userDetails?.userItems.find(
                  (userItem) => userItem.item.itemID === item.itemID
                );
                return (
                  <button
                    key={item.itemID}
                    className="item-button-inventory"
                    onClick={() => {
                      handleButtonClick(item.itemID);
                    }}
                  >
                    <div className="inner-button-container inventory">
                      <img
                        src={item.imagePath}
                        alt={item.itemName}
                        className={item.itemName.toLowerCase()}
                      />
                      <span className="item-quantity">
                        {userItem ? `${userItem.quantity}x` : "0x"}
                      </span>
                    </div>
                    <div className="inventory-item-button-descriptions">
                      <h2 className="item-name-button-inventory">
                        {item.itemName}
                      </h2>
                      <p className="item-button-description-inventory">
                        {item.itemDescription}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="main-container-right-inventory">
          <div className="main-border-view-right-inventory">
            <div className="main-container-right-inner-inventory">
              <div className="picture-container-inventory">
                <img
                  src={selectedItem?.imagePath}
                  alt={selectedItem?.itemName}
                  className="inventory-medkit"
                />
              </div>
              <h2 className="item-name-inventory">{selectedItem?.itemName}</h2>
              <div className="text-container-inventory">
                <p className="item-description-inventory">
                  {selectedItem?.itemDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Inventory;
