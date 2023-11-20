import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Navigation.css";
import "./root.css";
import "@fontsource/lilita-one";
import Logout from "./Logout"; // Import your Logout component

export default function Navigation() {
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);

  const openLogoutModal = () => {
    setLogoutModalOpen(true);
  };

  const closeLogoutModal = () => {
    setLogoutModalOpen(false);
  };

  return (
    <div className="wrapper">
      <nav>
        <img src="./images/logo.png" alt="tow-logo" className="nav-logo" />
        <section className="user-details">
          <span>
            <Link to="/user-info">Username</Link>
          </span>
          <span className="currency">1000</span>
        </section>
        <section className="nav-links">
          <li className="push-right">
            <Link to="/home">HOME</Link>
          </li>

          <li>
            <Link to="/items">ITEMS</Link>
          </li>

          <li>
            <Link to="/archive">ARCHIVE</Link>
          </li>

          <li onClick={openLogoutModal}>LOGOUT</li>
        </section>
      </nav>

      <section className="content">
        <Outlet />
      </section>

      {isLogoutModalOpen && <Logout onClose={closeLogoutModal} />}
    </div>
  );
}
