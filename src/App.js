import { useState } from "react";
import "./App.css";
import { Chatpage } from "./components/Chatpage";
import { ConferencePageNav } from "./components/ConferenceNav";
import { ConferencePage } from "./components/ConferencePage";

function App() {
  const [chatOpen, setChatopen] = useState(false);
  return (
    <div className={`${chatOpen ? "main-container" : null}`}>
      <Chatpage chatOpen={chatOpen} setChatopen={setChatopen} />
      <div className="chatPage">
        <ConferencePageNav chatOpen={chatOpen} setChatopen={setChatopen} />
        <div className="conferenceComponentFullWidth">
          <ConferencePage chatOpen={chatOpen} setChatopen={setChatopen} />
        </div>
      </div>
    </div>
  );
}

export default App;
