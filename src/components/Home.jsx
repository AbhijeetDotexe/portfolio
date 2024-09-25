import React from "react";
import "../App.css";

function Home({ onClick }) {
  return (
    <div>
      <p className="heading">Full Screen Navigation Menu</p>
      <button className="animate" onClick={onClick}>
        Menu
      </button>
    </div>
  );
}

export default Home;
