import React, { useState, useEffect } from "react";
import axios from "../axiosInstance";
import "./Profile.css";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showChangeEmail, setShowChangeEmail] = useState(false);
  const [passwordData, setPasswordData] = useState({
    old_password: "",
    new_password: "",
  });
  const [emailData, setEmailData] = useState({ new_email: "" });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/user/details/");
        setProfileData(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load profile data.");
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "/api/user/details/update/",
        profileData
      );
      setSuccessMessage(
        response.data.message || "Profile updated successfully!"
      );
    } catch (err) {
      setError("Failed to update profile. Please try again.");
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/change-password/", passwordData);
      setSuccessMessage(response.data.message);
      setShowChangePassword(false);
    } catch (err) {
      setError("Failed to change password. Please try again.");
    }
  };

  const handleEmailChange = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put("/api/change-email/", emailData);
      setSuccessMessage(response.data.message);
      setShowChangeEmail(false);
    } catch (err) {
      setError("Failed to change email. Please try again.");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="profile-container">
      <h1 className="profile-title">My Profile</h1>
      <form className="profile-card" onSubmit={handleFormSubmit}>
        <div className="profile-details">
          <div className="form-group">
            <label>First Name:</label>
            <input
              type="text"
              name="first_name"
              value={profileData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input
              type="text"
              name="surname"
              value={profileData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleInputChange}
            />
            <button
              type="button"
              className="link"
              onClick={() => setShowChangeEmail(true)}
            >
              Change Email
            </button>
          </div>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={profileData.username}
              onChange={handleInputChange}
            />
          </div>
          <button
            type="button"
            className="link"
            onClick={() => setShowChangePassword(true)}
          >
            Change Password
          </button>
        </div>
        <button type="submit" className="btn-save">
          Save Changes
        </button>
      </form>

      {showChangePassword && (
        <div className="modal">
          <form onSubmit={handlePasswordChange}>
            <h3>Change Password</h3>
            <div className="form-group">
              <label>Old Password:</label>
              <input
                type="password"
                name="old_password"
                value={passwordData.old_password}
                onChange={(e) =>
                  setPasswordData({
                    ...passwordData,
                    old_password: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-group">
              <label>New Password:</label>
              <input
                type="password"
                name="new_password"
                value={passwordData.new_password}
                onChange={(e) =>
                  setPasswordData({
                    ...passwordData,
                    new_password: e.target.value,
                  })
                }
              />
            </div>
            <button type="submit">Update Password</button>
            <button type="button" onClick={() => setShowChangePassword(false)}>
              Cancel
            </button>
          </form>
        </div>
      )}

      {showChangeEmail && (
        <div className="modal">
          <form onSubmit={handleEmailChange}>
            <h3>Change Email</h3>
            <div className="form-group">
              <label>New Email:</label>
              <input
                type="email"
                name="new_email"
                value={emailData.new_email}
                onChange={(e) =>
                  setEmailData({ ...emailData, new_email: e.target.value })
                }
              />
            </div>
            <button type="submit">Update Email</button>
            <button type="button" onClick={() => setShowChangeEmail(false)}>
              Cancel
            </button>
          </form>
        </div>
      )}

      {successMessage && <div className="success">{successMessage}</div>}
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default Profile;
