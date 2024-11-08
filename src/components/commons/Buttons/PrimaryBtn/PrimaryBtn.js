import React from "react"

import styles from "./primaryBtn.module.css";

const PrimaryBtn = ({ text, onClick }) => {
    return (
        <button className={`btn ${styles.primaryBtn}`} onClick={onClick}>{text}</button>
    );
}

export default PrimaryBtn;