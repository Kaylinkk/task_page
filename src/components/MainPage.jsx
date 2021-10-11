import React, { useState, useEffect } from "react";

function MainPage() {
  const handleonClick = () => {
    document.location.href = "/login";
  };

  return (
    <>
      <div className="MainBackground">
        <ul className="MainPageMaterials">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>

        <div className="MainButtonBox">
          <button onClick={handleonClick} className="MainButton">
            Log In
          </button>
        </div>
      </div>
    </>
  );
}

export default MainPage;
