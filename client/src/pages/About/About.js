import React from 'react';
import Team from '../../components/Team/Team';
import ContactUs from '../../components/ContactUs/ContactUs';





const About = () => {
    return (
        <div>

          {/* <div className="row mt-3"> 
           <h5 className="mt-3 mb-2 text-center" style={{margin: "0 auto", color: "white"}}>Katabi enables close collaboration through a WebVR experience!</h5>
          </div> */}
          <div className="container">
          <div className="row justify-content-center mt-3 pt-4">
  
          <img src="https://cdn.glitch.com/c0dcb651-5b19-4756-a6e6-25b3982ca367%2Floft-lake.gif?v=1597009278337" alt="vr room demo"/>
          </div>
          <h4 className="text-center text-white">Sit next to someone safely in Katabi</h4>
      
          <p className="mt-3 text-white">Katabi enables close collaboration through a WebVR experience that closes the distance between remote teams. It is a virtual world space, accessible through a browser or virtual reality headset, with ready-made meeting and social spaces and an easy-to-learn interface.<br/><br/>Backstory: "Katabi ko" means "beside me" in Tagalog, the Filipino language. In quarantine, social distancing no longer allows us to feel the camaraderie of sitting beside someone. </p>
   
        
         
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