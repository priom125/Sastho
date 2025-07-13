import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

import "./style/Navbar.css";

function Navbar() {

    const navigate = useNavigate();
    function goToChat() {
        navigate("/chat");   
    }
    function goToHonme() {
        navigate("/");   
    }
    // function goToDoctor() {
    //     navigate("/chat");   
    // }
  return (
    <div>
      {/* ------------------------------NavBar ------------------------------ */}
      <nav className="navBar">
        <div className="logo">
          <img src={logo} alt="Logo" onClick={goToHonme} />
        </div>

        <div className="menu">
          <ul>
            <li onClick={goToHonme}>Home</li>
            <li>How it works</li>
            <li>Doctor</li>
          </ul>
        </div>

        <div className="btn">
          <button onClick={goToChat}>Chat with Sastho</button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
