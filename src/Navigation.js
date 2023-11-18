import { Link, Outlet } from "react-router-dom";
import "./Navigation.css";
import "./root.css";
import "@fontsource/lilita-one";

export default function Navigation() {
  return (
    <div className="wrapper">
      <nav>
        <img src="./images/logo.png" className="nav-logo" />
        <section className="user-details">
          <span>Username</span>
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
          
          <li>
            <Link to= "/logout">LOGOUT</Link>
          </li>
        </section>
      </nav>

      <section className="content">
        <Outlet />
      </section>
    </div>
  );
}
