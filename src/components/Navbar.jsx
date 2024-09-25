import React from "react";
import "../App.css";

function Navbar({ onClose }) {
  return (
    <div className="menu">
      <ul className="list-unstyled">
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Skills</li>
      </ul>
      <button className="close-btn" onClick={onClose}>
        Close
      </button>
    </div>
  );
}

export default Navbar;
