import React, { useContext, useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import { UserContext } from "../../../../routes/ChatsRoute";

import styles from "./messageBox.module.css";

const MessageBox = () => {
    const userContext = useContext(UserContext);
    const [messageToSend, setMessageToSend] = useState("");
    const handleSendMessage = () => {
        if (messageToSend.length == 0)
            alert("Can't send empty text!");

        const payload = {
            // Id should be generated in backend and should be unique
            // For the purpose of this assignment, keeping it simple
            id: Math.random().toString(16).slice(2),
            senderId: userContext.currentUserData?.userId,
            receiverId: userContext.activeChatUserId,
            content: messageToSend,
            timestamp: new Date().toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' })
        };

        // Post call to backend should be added here
        userContext.setMessages(prevValue => [...prevValue, payload]);
        setMessageToSend("");
    };

    return (
        <div className={`${styles.messageBox}`}>
            <input
                placeholder='Type a message...'
                onKeyDown={(e) => {
                    if (e.key === 'Enter')
                        handleSendMessage()
                }}
                value={messageToSend}
                onChange={(e) => setMessageToSend(e.target.value)}
            />
            <RiSendPlaneFill className={styles.sendBtn} size={35} role='button' onClick={handleSendMessage} />
        </div>
    )
}

export default MessageBox;