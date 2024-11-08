import React, { useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";

import styles from "./messageBox.module.css";

const MessageBox = () => {
    const [messageToSend, setMessageToSend] = useState("");
    const handleSendMessage = () => {
        if (messageToSend.length == 0)
            alert("Can't send empty text!");
        // Add empty message checks
    };

    return (
        <div className={`${styles.messageBox}`}>
            <input placeholder='Type a message...' onKeyDown={(e) => e.key === 'Enter' && handleSendMessage} value={messageToSend} onChange={(e) => setMessageToSend(e.target.value)} />
            <RiSendPlaneFill className={styles.sendBtn} size={35} role='button' onClick={handleSendMessage} />
        </div>
    )
}

export default MessageBox;