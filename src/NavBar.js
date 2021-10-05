import React from 'react';
import styles from "./NavBar.module.css";
import { ReactComponent as Logo } from "./img/logo.svg"

function NavBar() {
    return (

        <div className={styles.navbar}>


            <button className={styles.signup}>Sign Up</button>
            <button className={styles.button} >
                {/* <Toggle width="40" height="40" /> */}
            </button>
        </div>

    )
}

export default NavBar
    ;