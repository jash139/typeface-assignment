import React from "react";

import styles from "./outlinedBtn.module.css";

const OutlinedBtn = ({ text, onClick }) => {
    return (
        <button className={`btn ${styles.outlinedBtn}`} onClick={onClick}>{text}</button>
    );
}

export default OutlinedBtn;