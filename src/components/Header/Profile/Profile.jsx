import React, { useState } from "react";
import Avatar from "./../../../assets/img/user-avatar.png";
import Arrow from "./../../../assets/img/Arrow.svg";


function Profile(props) {
  const [visability, setVisability] = useState(false);
  const className = visability?'avatar__img rotate':'avatar__img'
  return (
    <div className="header__profile">
      <button
        onClick={() => setVisability(!visability)}
        className="header__btn"
      >
        <img className="avatar__img" src={Avatar} alt="Аватар" />
        <img className={className} src={Arrow} alt="Стрелочка вниз" />
      </button>
      {visability && (
        <div className="header__profile-popap">
          <div className="profile-popap__link">
            Profile
          </div>
          <div className="profile-popap__link">
            Log Out
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
