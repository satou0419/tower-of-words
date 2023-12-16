import { Link } from "react-router-dom";
import "./Landing.css";

export default function Landing() {
  document.body.style.backgroundColor = "#211E49";

  return (
    <section>
      <section className="land-intro">
        <img src="./images/signin-banner.png" />
        <div className="about-content">
          <h1>What is Tower of Words?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <Link to="/login">
          <button className="btn-go">PLAY NOW</button>
        </Link>
      </section>

      <section className="land-adventure">
        <div className="adventure-content">
          <div className="wrap-adventure">
            <h1>Adventure Mode</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <img src="./images/land-adventure.png" />
        </div>

        <div className="adventure-ui">
          <img src="./images/land-ingame.png" />
          <img src="./images/land-tower.png" />
        </div>
      </section>

      <section className="land-items">
        <img src="./images/land-items.png" />
        <div className="items-content">
          <h1>Items to aid you</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>

      <section className="land-custom">
        <div className="custom-content">
          <div className="wrap-custom">
            <h1>Adventure Mode</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <img src="./images/land-thetower.png" />
        </div>

        <div className="custom-ui">
          <img src="./images/land-create.png" />
          <img src="./images/land-custom.png" />
        </div>
      </section>

      <section className="land-about">
        <h1>About Us</h1>

        <div className="profile-info">
          <div className="photo-holder">
            <img src="./images/yabao.png" />
          </div>

          <div className="photo-holder">
            <img src="./images/anton.png" />
          </div>

          <div className="photo-holder">
            <img src="./images/trisha.png" />
          </div>

          <div className="photo-holder">
            <img src="./images/reyd.jpg" />
          </div>
        </div>
      </section>
    </section>
  );
}
