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
          <li className="push-right">HOME</li>
          <li>ITEMS</li>
          <li>ARCHIVE</li>
          <li>LOGOUT</li>
        </section>
      </nav>
    </div>
  );
}
