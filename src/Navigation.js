import React, { useState, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Navigation.css";
import "./root.css";
import "@fontsource/lilita-one";
import Logout from "./Logout";
import { Context } from "./App";

export default function Navigation() {
  const [words, userInfo, handleLogin] = useContext(Context);
  const { username } = userInfo.user;
  const { credit } = userInfo;
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
          <Link to="/accinfo">{username}</Link>
          <span className="currency">Currency: {credit}</span>
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
