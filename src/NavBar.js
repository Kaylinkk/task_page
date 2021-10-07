import React from 'react';
import styles from "./NavBar.module.css";



function NavBar() {

    const onHandleClick = () => {
        document.location.href = "/signup";
    }
    return (



        <div className={styles.navbar}>


            <button onClick={onHandleClick} className={styles.signup}>Sign Up</button>

        </div>

    )
}

export default NavBar
    ;