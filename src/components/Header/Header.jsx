import React from 'react';
import Profile from './Profile/Profile';
import Title from './Title/Title';

function Header(props) {
  return (
    <div className="header">
      <Title/>
      <Profile/>
    </div>
  );
}

export default Header;