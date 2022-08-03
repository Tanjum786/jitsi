import React from "react";
import "./conferencepage.css";
import { BsFillMicMuteFill } from "react-icons/bs";
import { SiJitsi } from "react-icons/si";

export const ConferencePageNav = ({ chatOpen}) => {
  return (
    <>
      <nav className={`${!chatOpen?"navContainerFullWidth":"navContainer"}`}>
        <div className="jitsiLogoContainer">
          <p>
            <SiJitsi  className="jitsiLogo"/>
          </p>
          <p>jitsi</p>
        </div>
        <div className="user-ProfileMain-div">
          <div className="userProfileContainer">
            <p className="userInitailName">T</p>
          </div>
          <div className="userNameContainer">
            <p>
              <BsFillMicMuteFill />
            </p>
            <p>Tanjum</p>
          </div>
        </div>
      </nav>
    </>
  );
};
