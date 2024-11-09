import React, { useContext } from "react";
import ProfileImage from "../../../commons/ProfileImage/ProfileImage";
import { UserContext } from "../../../../routes/ChatsRoute";
import { MdDeleteOutline } from "react-icons/md";

import styles from "./messageBubble.module.css";

const MessageBubble = ({ message, isPrimary }) => {
    const userContext = useContext(UserContext);

    const handleDeleteMessage = () => {
        userContext.setMessages(userContext.messages.filter(messageDetails => messageDetails.id != message.id));
    };

    return (
        <div className={isPrimary ? styles.primaryContainer : styles.secondaryContainer}>
            {
                !isPrimary && <ProfileImage />
            }
            <div className={`${styles.messageBubble} ${isPrimary ? styles.primaryMessage : styles.secondaryMessage}`}>
                {message.content}
                <span className={styles.timestamp}>{message.timestamp}</span>
            </div>
            <div className={`${styles.deleteBtn} d-flex-center`} onClick={handleDeleteMessage}><MdDeleteOutline size={20} /></div>
        </div>
    );
}

export default MessageBubble;