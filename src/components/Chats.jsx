import Avatar from "../assets/avatar.png";
import "./style/Chats.css";

function Chats() {
  return (
    <div className="chats">
      <div className="chat-header">
        <img src={Avatar} alt="" />
        <h2>Sastho AI</h2>
        <hr />
      </div>
      <div className="chatbox">
        <div className="chat ai-chat">
          <div className="message">
            <p>Hi, how can I help you today?</p>
          </div>
        </div>
        <div className="chat user-chat">
          <div className="message">
            <p>What are the symptoms of diabetes?</p>
          </div>
        </div>
        <div className="chat ai-chat">
          <div className="message">
            <p>
              Diabetes symptoms include increased thirst, frequent urination,
              extreme fatigue, and blurred vision.
            </p>
            <div className="option-row">
            <button className=".option-btn">Ferver</button>
            <button className=".option-btn">Cough</button>
            <button className=".option-btn">Headache</button>
           </div>
          </div>
        </div>
             
           
        <div className="chatInput">
          <input type="text" placeholder="Type your message here..." />
          {/* <input type="file" id='submit' placeholder='Upload Report'/> */}
          <button>Send</button>

          {/* <button>Upload Report</button> */}
        </div>
      </div>
    </div>
  );
}

export default Chats;
