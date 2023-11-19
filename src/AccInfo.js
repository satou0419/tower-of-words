import "./root.css";
import "@fontsource/lilita-one";
import "./AccInfo.css";


function AccInfo() {
    return(
    <>
    <div className="account">
    <div className="acc-info">
      <h2>ACCOUNT INFORMATION</h2>
      <input className="inputs-information inputs-acc" type="text" placeholder="Username"></input>
      <input className="inputs-information inputs-acc" type="text" placeholder="Firstname"></input>
      <input className="inputs-information inputs-acc" type="text" placeholder="Lastname"></input>
      <button className="btn-save save-acc">Save Changes</button>
    </div>
    <div className="pass">
      <h2>CHANGE PASSWORD</h2>
      <input className="inputs-information inputs-pass" type="password" placeholder="Current Password"></input>
      <input className="inputs-information inputs-pass" type="password" placeholder="New Password"></input>
      <input className="inputs-information inputs-pass" type="password" placeholder="Confirm New Password"></input>
      <button className="btn-save save-pass">Save Changes</button>
    </div>
    </div>
    </>
    )
}

export default AccInfo;