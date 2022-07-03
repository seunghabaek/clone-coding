import React, { useState } from "react";
import { authService } from "fbase";
import { useNavigate } from "react-router-dom";

export const Profile = ({ userObj, refreshUser }) => {
  const navigate = useNavigate();
  const [newDiaplyName, setNewDisplayName] = useState(userObj.displayName);
  const onLogOutClick = () => {
    authService.signOut();
    navigate("/", { replace: true });
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    if (userObj.displayName !== newDiaplyName) {
      await userObj.updateProfile({
        displayName: newDiaplyName,
      });
      refreshUser();
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Display name"
          onChange={onChange}
          value={newDiaplyName}
        />
        <input type="submit" value="Update Profile" />
      </form>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};
