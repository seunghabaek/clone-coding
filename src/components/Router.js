import React from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";
import { Auth } from "../routes/Auth";
import { Home } from "../routes/Home";
import { Navigation } from "./Navigation";
import { Profile } from "../routes/Profile";

export const AppRouter = ({ isLoggedIn, userObj }) => {
  return (
    <Router>
      {isLoggedIn && <Navigation userObj={userObj} />}
      {isLoggedIn ? (
        <>
          <Routes>
            <Route exact path="/" element={<Home userObj={userObj} />} />
            <Route path="/profile" element={<Profile userObj={userObj} />} />
          </Routes>
        </>
      ) : (
        <>
          <Routes>
            <Route exact path="/" element={<Auth />} />
          </Routes>
        </>
      )}
    </Router>
  );
};
