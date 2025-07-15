import { useState } from "react";

import Avatar from "../assets/avatar.png";

import "./style/Chats.css";

function Chats() {
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hello, Priom! How can I assist you today?" },
    { role: "user", text: "I have headache and fever." },
    { role: "bot", text: "Noted. Do you also have nausea or body aches?" },
  ]);

  const [userInput, setUserInput] = useState("");

  const options = ["Fever & Cold", "Upload Prescription", "Ask about"];
  // ----------------------handleOptionClick----------------------
  const handleOptionClick = (text) => {
    const now = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    setMessages((prev) => [
      ...prev,
      { role: "user", text, time: now },
      {
        role: "bot",
        text: `You clicked "${text}". Let me help you with that.`,
        time: now,
      },
    ]);
  };
// -------------------------Handle User Send-------------------------
const handleUserSend = async () => {
  if (!userInput.trim()) return;

  const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  // Display user message
  setMessages(prev => [...prev, { role: "user", text: userInput,  }]);

  // Clear input
  setUserInput("");

  // Placeholder: call LLM API here or simulate response


  
};



  return (
    <div className="chats">
      <div className="chat-header">
        <img src={Avatar} alt="" />
        <h2>Sastho AI</h2>
        <hr />
      </div>
      <div className="chatbox">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chat ${
              message.role === "bot" ? "ai-chat" : "user-chat"
            }`}
          >
            <div className="message">
              <p>{message.text}</p>
            </div>
          </div>
        ))}
        <div className="option-row">
          {options.map((option, index) => (
            <button key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </button>
          ))}
        </div>

        <div className="chatInput">
          <input
            type="text"
            placeholder="Type your message here..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleUserSend();
            }}
          />
          <button onClick={handleUserSend} >Send</button>
        </div>
      </div>
    </div>
  );
}

export default Chats;
