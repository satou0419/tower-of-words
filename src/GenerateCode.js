//TowerName
import "./GenerateCode.css";
import "./root.css";
import "@fontsource/lilita-one";

function GenerateCode() {
  return <>
        <div className="main-generatecode">
            <div className="generatecode-top-container">
                <button className="btn-back btn-back-generatecode">BACK</button>
                <h1 className="header-generatecode">
                    Generate Code
                </h1>
                <button className="btn-next btn-next-generatecode">NEXT</button>
            </div>
            <div className="main-container">
                <div className="code-container">
                    <h1 className="container-title">
                        CODE:
                    </h1>
                    <div className="generated-code">   
                        TESTINGCODE
                    </div>
                </div>
            </div>
        </div>
  </>
}

export default GenerateCode;