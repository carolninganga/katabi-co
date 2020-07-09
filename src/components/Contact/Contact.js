import React from 'react';
import TeamMember from '../TeamMember/TeamMember';
import './style.css';




export default function Contact() {

  return (
    <div className="container">
          <div className="row">
            <div className="col-md-4 box">
                <TeamMember img="https://cdn.glitch.com/823d971b-2ee5-4e17-bb98-ec24b973c4c0%2Fcaroline-removebg-preview.png?v=1593113280170"
                            name="Caroline Ning'ang'a" />
            </div>
            <div className="col-md-4 box">
                <TeamMember />
            </div>
            <div className="col-md-4 box">
                <TeamMember />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 box">
                <TeamMember />
            </div>
            <div className="col-md-4 box">
                <TeamMember />
            </div>
            <div className="col-md-4 box">
                <TeamMember />
            </div>
          </div>
    </div>
   
  );
}
