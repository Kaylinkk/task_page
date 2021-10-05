import React, { useState, useEffect } from "react";
import styles from "./MainPage.module.css";

function MainPage({ history }) {
  const handleonClick = () => {
    document.location.href = "/login";
  };

  return (
    <>
      <div className={styles.buttonBox}>
        <button onClick={handleonClick} className={styles.button}>
          Log In
        </button>
      </div>
    </>
  );
}

export default MainPage;
