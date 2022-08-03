import { useState } from "react";
import "./App.css";
import { Chatpage } from "./components/Chatpage";
import { ConferencePageNav } from "./components/ConferenceNav";
import { ConferencePage } from "./components/ConferencePage";

function App() {
  const [chatOpen,setChatopen]=useState(false)
  return (
    <>
      <ConferencePageNav chatOpen={chatOpen} setChatopen={setChatopen} />
      <div className="conferenceComponent">
      <Chatpage chatOpen={chatOpen} setChatopen={setChatopen} />
        <ConferencePage chatOpen={chatOpen} setChatopen={setChatopen} />
      </div>
    </>
  );
}

export default App;
