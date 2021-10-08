import React, { useState, useEffect } from "react";
import styles from "./MainPage.module.css";

function MainPage() {
  const handleonClick = () => {
    document.location.href = "/login";
  };

  return (
    <>
      <div className={styles.backgroundContainer}>
        <ul className={styles.material}>
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

        <div className={styles.buttonBox}>
          <button onClick={handleonClick} className={styles.button}>
            Log In
          </button>
        </div>
      </div>
    </>
  );
}

export default MainPage;
