import React, { useEffect, useState } from "react";
import { authService } from "fbase";
import { useNavigate } from "react-router-dom";
import { dbService } from "../fbase";

export const Profile = ({ userObj }) => {
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
  const onSubmit = (event) => {
    event.preventDefault();
    if (userObj.displayName !== newDiaplyName) {
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
