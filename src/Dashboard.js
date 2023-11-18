// import "./root.css";
import "./Dashboard.css";
export default function Dashboard() {




  return<div className="mother-div">

    <div className="card-container">
      <div className="card">
        <div className="portrait-container-1">
          <img src="./images/adventure_mode_portrait_v2.png"/>
        </div>
        <h2>Adventure</h2>
        <div className="description">bla bla bla bla sss ssss s sss sss ss ssssss ssssss ss sss sssss ss ss</div>
        <div className="counter">
          <span className="counter-desc">Tower Completed</span>
          <span className="the-counter">1</span>
        </div>
      </div>

      <div className="card">
        <div className="portrait-container-2">
            <img src="./images/custom_mode_portrait.jpg"/>
          </div>
          <h2>Custom Towers</h2>
          <div className="description">bla bla bla bla sss ssss s sss sss ss ssssss ssssss ss sss sssss ss ss</div>
          <div className="counter">
            <span className="counter-desc">Towers Created</span>
            <span className="the-counter">1</span>
        </div>




      </div>
    </div>


    <div className="word-collect">
      <div className="span-holder">
        <span className="span-desc">Words Collected</span>
        <div className="span-var"><span>0</span> out of <span>20</span> words</div>
        
      </div>

      <button className="go-to-archive">GO TO ARCHIVE</button>
    </div>
    
    
  </div>
}
