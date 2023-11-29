import "./GenerateCode.css";
import "./root.css";
import "@fontsource/lilita-one";

function GenerateCode() {
  return <>
        <div className="main-generatecode">
            <div className="generatecode-top-container">
                <button className="btn-back btn-back-generatecode">BACK</button>
                <button className="btn-next btn-next-generatecode">FINISH</button>
            </div>
            <div className="main-container-code">
                <div className="main-border-code">
                    <div className="code-container">
                        <h1 className="container-title">
                            CODE
                        </h1>
                        <div className="generated-code">   
                            TESTINGCODE
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </>
}

export default GenerateCode;