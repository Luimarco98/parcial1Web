import React from 'react';
import './home.css'; 

const home = ({ username, name, description, posts, followers, following, profileImage }) => {
  return (
    <div className="profile-container">
      <div className="user-info">
        <img src={profileImage} alt="User" className="profile-image" />
        <div className="user-details">
          <span className="username">{username}</span>
          <h1 className="name">{name}</h1>
          <p className="description">{description}</p>
          <p className="website">www.website.com</p>
        </div>
      </div>
      <div className="stats">
        <div className="stat">
          <span className="number">{posts}</span>
          <span className="label">posts</span>
        </div>
        <div className="stat">
          <span className="number">{followers}</span>
          <span className="label">followers</span>
        </div>
        <div className="stat">
          <span className="number">{following}</span>
          <span className="label">following</span>
        </div>
      </div>
    </div>
  );
};

export default home;
