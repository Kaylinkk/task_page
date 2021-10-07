import React from 'react';
import styles from "./NavBar.module.css";



function NavBar() {


    const onHandleClickHome = () => {
        document.location.href = "/";
    }
    const onHandleClick = () => {
        document.location.href = "/signup";
    }
    return (



        <div className={styles.navbar}>

            <button onClick={onHandleClickHome} className={styles.btn}>Home</button>
            <button onClick={onHandleClick} className={styles.btn}>Sign Up</button>

        </div>

    )
}

export default NavBar
    ;