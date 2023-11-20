import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
export default function Login({ onLogin }) {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/home");
  };

  document.body.style.backgroundColor = "#ffc658";

  return (
    <section className="signin-wrapper">
      <div className="signin-container">
        <div className="left-container">
          <img src="./images/signin-banner.png" className="img-login" />
        </div>
        <div className="right-container">
          <form className="signin-form">
            <h1 className="heading">Welcome</h1>
            <input
              type="text"
              name="firstname"
              placeholder="Firstname"
              className="input-fields"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input-fields"
            />

            <button type="submit" className="btn-signin" onClick={handleLogin}>
              Sign In
            </button>

            <p>
              Don't have an account yet?
              <span>
                <Link to="/account" className="to-account">
                  Sign up
                </Link>
              </span>
            </p>

            <span className="push-bottom">
              Terms and Conditions | Privacy Policy | Support | About Us
            </span>
          </form>
        </div>
      </div>
    </section>
  );
}
