import React, { useState } from "react";
import "./chatpage.css";
import { MdOutlineAttachFile } from "react-icons/md";
import { FiSend } from "react-icons/fi";

export const Chatpage = ({ chatOpen, setChatopen }) => {
  const [messageArr, setMessagesArr] = useState([]);
  const [input, setInput] = useState("");

  const SendMessageHandler = (e) => {
    e.preventDefault();
    if (input.trim().length>0) {
      setMessagesArr([...messageArr, input]);
      setInput("");
    }
  };

  const currentTime = new Date();
  const time = [currentTime.getHours(), ":", currentTime.getMinutes()];
  const imageChangeHandaler = (files) => {
    const filePreview = URL.createObjectURL(files[0]);
    setMessagesArr([...messageArr, filePreview]);
  };


  return (
    <>
      {chatOpen ? (
        <div className="chatPageContainer">
          <nav className="chatConversationContainer">
            <div className="chatContainer">
              <p>Chat</p>
              <button
                className="closeChatBtn"
                onClick={() => setChatopen(false)}
              >
                x
              </button>
            </div>
            <div className="chatSubMenu">
              <p className="activeChatTab">Chat</p>
              <p>Poll</p>
            </div>
          </nav>
          <div className="chatConversationFullHight">
            <div className="chatConverSationArea">
              {messageArr.map((el) => {
                return (
                  <>
                    {el.includes("blob") ? (
                      <img
                        src={el}
                        alt="uploaded-image"
                        style={{ height: "6rem" }}
                      />
                    ) : (
                      <span className="chatContaint">{el}</span>
                    )}
                  </>
                );
              })}
              {messageArr.length >= 1 ? <span>{time}</span> : null}

                <form>
              <div className="chatInputContainer">
                  <label htmlFor="fileimage">
                    <MdOutlineAttachFile className="inputBtns" />
                  </label>

                  <input
                    type="file"
                    name="image"
                    id="fileimage"
                    className="filesUpload"
                    value=""
                    onChange={(e) => {
                      imageChangeHandaler(e.target.files);
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Type a message"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="Chatinput"
                  />
                  <button
                    className="inputBtns sendBtn"
                    onClick={SendMessageHandler}
                    type="submit"
                  >
                    <FiSend />
                  </button>
              </div>
                </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
