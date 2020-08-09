import React from 'react';
import Team from '../../components/Team/Team';
import ContactUs from '../../components/ContactUs/ContactUs';





const About = () => {
    return (
        <div>

          <div className="row mt-3">
    
           <h5 className="mt-3" style={{margin: "0 auto", color: "white"}}>Katabi enables close collaboration through a WebVR experience!</h5>
          </div>
          <div className="row justify-content-center">
            <img width="60%" src="https://cdn.glitch.com/c0dcb651-5b19-4756-a6e6-25b3982ca367%2Floft-lake.gif?v=1597009278337" alt="vr room demo"/>
          </div>
          <div className="row">
          <Team />
          </div>
          <div className="row">
          <ContactUs />
          </div>
        </div>
    )
}

export default About;