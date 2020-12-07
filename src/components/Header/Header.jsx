import React from "react";
import Profile from "./Profile/Profile";
import Title from "./Title/Title";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="header">
      <Link to="/">
        <Title />
      </Link>
      <Profile />
    </div>
  );
}

export default Header;
