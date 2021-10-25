import styles from "../css/MainPage.module.css";
function MainPage() {
  const handleonClick = () => {
    document.location.href = "/login";
  };

  return (
    <>
      <div className={styles.background}>
        <ul className={styles.materials}>
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

        <div className={styles.btnContainer}>
          <button onClick={handleonClick} className={styles.btn}>
            Log In
          </button>
        </div>
      </div>
    </>
  );
}

export default MainPage;
