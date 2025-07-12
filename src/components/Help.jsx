import "./style/Help.css";
import chat from "../assets/chat.jpg";
import file from "../assets/file.jpg";
import human from "../assets/human.jpg";
import location from "../assets/location.jpg";

function Help() {
  return (
    <div>
      <div className="demo">
        <h1>How Sastho Helps</h1>
        <div className="flex">
          <div className="section">
            <img src={chat} alt="" />
            <h4>Chat with AI</h4>
            <p>Chat Anytime From Any Where</p>
          </div>
          <div className="section">
            <img src={file} alt="" />
            <h4>Scan Medical Reports</h4>
            <p>Scan Medical Reports Get Prescribtion</p>
          </div>
          <div className="section">
            <img src={human} alt="" />
            <h4>Talk to Real Doctor</h4>
            <p>Talk to Real Doctor</p>
          </div>
          <div className="section">
            <img src={location} alt="" />
            <h4>Find Nearby Lab </h4>
            <h1>Hospitals</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help;
