import React from 'react';
import "./about.scss";


const About = () => {
    return (
        <div>
          <h3 className="text-center mt-3"><span style={{color: "#5394a0"}}>About Katabi</span></h3>
          <h5>
          Katabi enables close collaboration through a WebVR experience that closes the distance between remote teams. 
          </h5>
          <p>
          It is a virtual world space, accessible through a browser or virtual reality headset, with ready-made meeting and social spaces and an easy-to-learn interface. 
          </p>
          <p>
          'Katabi ko' means 'beside me' in Tagalog, the Filipino language. In quarantine, social distancing no longer allows us to feel the camaraderie of sitting beside someone. 
          </p>

          <h4 className="text-center" padding-top="20px">Katabi closes the distance</h4>
          <p className="text-center"><strong><span style={{color: "#5394a0"}}>Meaningfully communicate</span></strong> ideas about projects by sending quick video messages for feedback and input.<br/> 
          Create videos and <strong><span style={{color: "#5394a0"}}>share thoughts without having to attend meetings</span></strong> or write long emails. <br/> 
          Send <strong><span style={{color: "#5394a0"}}>quick and easy video conversations</span></strong> as effortlessly as sending a text chat. 
          </p>
          
        <h2 className="text-center">Sit next to someone safely in Katabi</h2>

        </div>
    )
}

export default About;