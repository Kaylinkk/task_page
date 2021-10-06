import React from 'react';
import styles from "./NavBar.module.css";
import { ReactComponent as Logo } from "./img/logo.svg"

function NavBar() {

    const onHandleClick = () => {
        document.location.href = "/signup";
    }
    return (



        <div className={styles.navbar}>


            <button onClick={onHandleClick} className={styles.signup}>Sign Up</button>
            <button className={styles.button} >
                {/* <Toggle width="40" height="40" /> */}
            </button>
        </div>

    )
}

export default NavBar
    ;