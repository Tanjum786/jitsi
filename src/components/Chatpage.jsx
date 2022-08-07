import React, { useState } from "react";
import "./chatpage.css";
import { MdOutlineAttachFile } from "react-icons/md";
import { FiSend } from "react-icons/fi";

export const Chatpage = ({ chatOpen, setChatopen }) => {
  const [messageArr, setMessagesArr] = useState([]);
  const [input, setInput] = useState("");
  const [fileAttachment, setfileAttachment] = useState({});
  const [emptyAttachmentContaner, setemptyAttachmentContaner] = useState(false);

  const SendMessageHandler = (e) => {
    e.preventDefault();
    if (input.trim().length > 0) {
      setMessagesArr([...messageArr, { fileAttachment, input: input }]);
      setfileAttachment("");
      setemptyAttachmentContaner(false);
      setInput("");
    }
  };

  const currentTime = new Date();
  const time = [currentTime.getHours(), ":", currentTime.getMinutes()];
  const imageChangeHandaler = (files) => {
    const file = files[0];
    const filePreview = URL.createObjectURL(files[0]);
    file["filePreview"] = filePreview;
    setemptyAttachmentContaner(true);
    setfileAttachment(file);
  };

  const removeAttachment = () => {
    setemptyAttachmentContaner(false);
    setfileAttachment("");
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
          <div className="chatConverSationArea" id="ScrollStyle">
            <div>
              {messageArr.map((el) => {
                return (
                  <>
                    <div className="chatContaint">
                      {el.fileAttachment.filePreview ? (
                        el.fileAttachment.name.includes(".pdf") ||
                        el.fileAttachment.name.includes(".docx") ? (
                          <a
                            href={el.fileAttachment.filePreview}
                            target="_blank"
                            download={el.fileAttachment.filePreview}
                          >
                            {el.fileAttachment.name}
                          </a>
                        ) : el.fileAttachment.type.includes("image") ? (
                          <img
                            src={el.fileAttachment.filePreview}
                            style={{ width: "inherit", height: "5rem" }}
                          />
                        ) : null
                      ) : null}
                      <p>{el.input}</p>
                    </div>
                  </>
                );
              })}
              {messageArr.length >= 1 ? (
                <span className="messageTime">{time}</span>
              ) : null}
            </div>
          </div>
          {emptyAttachmentContaner ? (
            <div className="popupcontainer">
              {fileAttachment.type.includes("image") ? (
                <>
                  <img
                    src={fileAttachment.filePreview}
                    alt=""
                    style={{ width: "2rem", hight: "2rem" }}
                  />
                </>
              ) : (
                <>
                  <div>
                    <p>{fileAttachment.name}</p>
                  </div>
                </>
              )}
              <button onClick={removeAttachment} className="removeAttachment">
                x
              </button>
            </div>
          ) : null}
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
      ) : null}
    </>
  );
};
