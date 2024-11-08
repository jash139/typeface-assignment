import React from "react";
import ProfileImage from "../../../commons/ProfileImage/ProfileImage";

import styles from "./messageBubble.module.css";

const MessageBubble = ({ message, isPrimary, userContext }) => {
    return (
        <div className={isPrimary ? styles.primaryContainer : styles.secondaryContainer}>
            {
                !isPrimary && <ProfileImage />
            }
            <div className={`${styles.messageBubble} ${isPrimary ? styles.primaryMessage : styles.secondaryMessage}`}>
                {message.content}
                <span className={styles.timestamp}>{message.timestamp}</span>
            </div>
        </div>
    );
}

export default MessageBubble;