import React from "react";
import styles from "./header.module.css";

const Header = () => {
    return (
        <div className={`${styles.header} card`}>
            <h2>Chat</h2>
        </div>
    );
}

export default Header;