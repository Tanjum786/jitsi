import React from "react";
import {
  BsFillMicMuteFill,
  BsCameraVideoOff,
  BsChatRight,
  BsThreeDots,
} from "react-icons/bs";
import {
  MdOutlineScreenShare,
  MdOutlineBackHand,
  MdGridView,
  MdOutlineCallEnd,
} from "react-icons/md";

export const ConferencePage = ({ chatOpen, setChatopen }) => {
  return (
    <>
      <div className="conferenceContainer">
        <div className="mainPageContainer">
          <p className="userNameMain">T</p>
        </div>
        <div className="conferenceToolBar">
          <button className="toolbarBtns">
            <BsFillMicMuteFill />
          </button>
          <button className="toolbarBtns">
            <BsCameraVideoOff />
          </button>
          <button className="toolbarBtns">
            <MdOutlineScreenShare />
          </button>
          <button
            className="toolbarBtns"
            onClick={() => setChatopen(!chatOpen)}
          >
            <BsChatRight />
          </button>
          <button className="toolbarBtns">
            <MdOutlineBackHand />
          </button>
          <button className="toolbarBtns">
            <MdGridView />
          </button>
          <button className="toolbarBtns">
            <BsThreeDots />
          </button>
          <button className="toolbarBtns callEndBtn">
            <MdOutlineCallEnd />
          </button>
        </div>
      </div>
    </>
  );
};
