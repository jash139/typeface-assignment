import { useState } from "react";
import MessageBubble from "../MessageBubble/MessageBubble";
import styles from "./messages.module.css";

function Messages({ currentUserDetails }) {
    const [messages, setMessages] = useState([
        { content: "df", timestamp: "11:11 AM" },
    ]);
    return (
        <div className={`${styles.messages} card`}>
            {
                messages.map(message =>
                    <MessageBubble isPrimary={false} message={{ content: "df", timestamp: "11:11 AM" }} />
                )
            }
        </div>
    );
}

export default Messages;
