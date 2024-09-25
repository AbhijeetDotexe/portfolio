import React, { useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [showNavbar, setShowNavbar] = useState(false); // Track Navbar visibility

  const handleOpenNavbar = () => {
    setShowNavbar(true); // Show Navbar and trigger animation
  };

  const handleCloseNavbar = () => {
    setShowNavbar(false); // Hide Navbar and bring back Home
  };

  return (
    <div className={`app-container ${showNavbar ? "dark-background" : ""}`}>
      {/* Home component */}
      <div
        className={`page ${showNavbar ? "slide-out-left" : "slide-in-right"}`}
      >
        <Home onClick={handleOpenNavbar} />
      </div>

      {/* Navbar component */}
      <div
        className={`page ${showNavbar ? "slide-in-left" : "slide-out-right"}`}
      >
        <Navbar onClose={handleCloseNavbar} />
      </div>
    </div>
  );
}

export default App;
