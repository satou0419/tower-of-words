import "./Logout.css";
import "./root.css";
import "@fontsource/lilita-one";

export default function Logout() {
  return (
    <>
      <div className="logout">
        <div className="logout-pane">
          <h1>Logout Account?</h1>
          <img src="./images/sad robot.png" className="logout-icon"></img>
          <div className="btns">
            <button className="btn-cancel cancel">Cancel</button>
            <button className="btn-logout log ">Logout</button>
          </div>
        </div>
      </div>
    </>
  );
}
