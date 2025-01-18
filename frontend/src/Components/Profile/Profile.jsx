import React from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
const Profile = () => {
  return (
    <div className="profile-container">
      <h1 className="profile-title">My Profile</h1>
      <div className="profile-card">
        <div className="profile-details">
          <div className="form-group">
            <label>First Name:</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Surname:</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" />

            <Link to="/" className="link">
              Change Email
            </Link>
          </div>
          <div className="form-group">
            <label>Username:</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" />
            <Link to="/" className="link">
              Change Password
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
