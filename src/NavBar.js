import React from 'react';
import styles from "./NavBar.module.css";
import { ReactComponent as Logo } from "../src/img/logoTransparent.svg";
import cx from 'classnames'

function NavBar() {


    const onHandleClickHome = () => {
        document.location.href = "/";
    }
    const onHandleClick = () => {
        document.location.href = "/signup";
    }
    return (



        <div className={cx(styles.navbar, styles.clearfix)}>

            <Logo className="logo" width="200" />
            <ul>

                <li onClick={onHandleClick} >Sign Up</li>
                <li onClick={onHandleClickHome} >Home</li>
            </ul>
        </div>
    )
}

export default NavBar
    ;