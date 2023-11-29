import { Link } from "react-router-dom";
import "./GenerateCode.css";
import "./root.css";
import "@fontsource/lilita-one";

function GenerateCode() {
  return (
    <>
      <div className="main-generatecode">
        <div className="generatecode-top-container">
          <button className="btn-back btn-back-generatecode">
            <Link to="/view-words-added">BACK</Link>
          </button>
          <h1 className="header-generatecode">Generate Code</h1>
          <button className="btn-next btn-next-generatecode">FINISH</button>
        </div>
        <div className="main-container">
          <div className="code-container">
            <h1 className="generate-container-title">CODE</h1>
            <div className="generated-code">TESTINGCODE</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GenerateCode;
