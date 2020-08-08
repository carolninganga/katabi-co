import React from 'react';
import './Home.css';



const Home = () => {
    return (
      <div id="landing-2">
      <div className="container">
      <div className="row">
      <div className="col-md-8 mt-5 pt-5">
        <h4 className="mt-6 pt-6" style={{color: "#ccc"}}>Katabi enables close collaboration<br/> through a WebVR experience</h4>
      </div>
      <div className="col-md-4">
          <div className="row mt-5 pt-5">
              <a href="/#" className="btn">BUSINESS DEMO</a>
          </div>

          <div className="row">
              <a href="/#" className="btn">FAMILY DEMO</a>
          </div>

          <div className="row">
              <a href="/#" className="btn">SCHOOL DEMO</a>
          </div>
          </div>
      </div>
     </div>
  </div>
    )
}

export default Home; 