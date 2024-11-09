import React from "react";
import styles from "./header.module.css";
import Searchbar from "../Searchbar/Searchbar";

const Header = () => {
    return (
        <div className={`${styles.header} card`}>
            <h3>Chats</h3>
            <Searchbar />
        </div>
    );
}

export default Header;