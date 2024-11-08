import React from "react";

import styles from "./unreadBadge.module.css";

const UnreadBadge = ({ count }) => {
    return (
        <div className={`${styles.unreadBadge} d-flex-center`}>{count}</div>
    );
}

export default UnreadBadge;
