import logo from "../assets/logo.png";

import "./style/Navbar.css";

function Navbar() {
  return (
    <div>
      {/* ------------------------------NavBar ------------------------------ */}
      <nav className="navBar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="menu">
          <ul>
            <li>Home</li>
            <li>How it works</li>
            <li>Doctor</li>
          </ul>
        </div>

        <div className="btn">
          <button>Chat with Sastho</button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
