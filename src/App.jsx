import React, { useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  // State to track whether Home or Navbar is shown
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <div>
      {showNavbar ? <Navbar /> : <Home onClick={() => setShowNavbar(true)} />}
    </div>
  );
}

export default App;
