import React from "react";
import "./App.css";
import profilePic from "./profile-pic.jpg";

function ProfileCard() {
  return (
    <div className="card">
      <img src={profilePic} alt="Profile" className="profile-pic" />
      <h2>Celestine Emmanuel</h2>
      <p>Junior Front-End Developer</p>
      <div className="socials">
        <a href="https://github.com/emmanuelcelestine380" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/celestine-emmanuel-501b15352/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
  );
}

export default ProfileCard;