import React, { useEffect, useState } from "react";
import MessageBubble from "../MessageBubble/MessageBubble";
import styles from "./messages.module.css";
import scrollToEnd from "../../../../utils/ScrollToEnd";

const Messages = () => {
    const [messages, setMessages] = useState([
        { content: "df", timestamp: "11:11 AM" },
    ]);

    useEffect(() => {
        scrollToEnd("messages-section");
    }, []);


    return (
        <div id="messages-section" className={`${styles.messages} card`}>
            {
                messages.map(message =>
                    <MessageBubble isPrimary={false} message={{ content: "df", timestamp: "11:11 AM" }} />
                )
            }
            {
                messages.map(message =>
                    <MessageBubble isPrimary={false} message={{ content: "df", timestamp: "11:11 AM" }} />
                )
            }
            {
                messages.map(message =>
                    <MessageBubble isPrimary={true} message={{ content: "df", timestamp: "11:11 AM" }} />
                )
            }
            {
                messages.map(message =>
                    <MessageBubble isPrimary={true} message={{ content: "df", timestamp: "11:11 AM" }} />
                )
            }
            {
                messages.map(message =>
                    <MessageBubble isPrimary={false} message={{ content: "df", timestamp: "11:11 AM" }} />
                )
            }
            {
                messages.map(message =>
                    <MessageBubble isPrimary={false} message={{ content: "df", timestamp: "11:11 AM" }} />
                )
            }
            {
                messages.map(message =>
                    <MessageBubble isPrimary={false} message={{ content: "df", timestamp: "11:11 AM" }} />
                )
            }
            {
                messages.map(message =>
                    <MessageBubble isPrimary={false} message={{ content: "df", timestamp: "11:11 AM" }} />
                )
            }
            {
                messages.map(message =>
                    <MessageBubble isPrimary={false} message={{ content: "df", timestamp: "11:11 AM" }} />
                )
            }
            {
                messages.map(message =>
                    <MessageBubble isPrimary={false} message={{ content: "df", timestamp: "11:11 AM" }} />
                )
            }
            {
                messages.map(message =>
                    <MessageBubble isPrimary={false} message={{ content: "df", timestamp: "11:11 AM" }} />
                )
            }
            {
                messages.map(message =>
                    <MessageBubble isPrimary={false} message={{ content: "df", timestamp: "11:11 AM" }} />
                )
            }
            {
                messages.map(message =>
                    <MessageBubble isPrimary={false} message={{ content: "df", timestamp: "11:11 AM" }} />
                )
            }
            {
                messages.map(message =>
                    <MessageBubble isPrimary={false} message={{ content: "df", timestamp: "11:11 AM" }} />
                )
            }
            {
                messages.map(message =>
                    <MessageBubble isPrimary={false} message={{ content: "df", timestamp: "11:11 AM" }} />
                )
            }
            {
                messages.map(message =>
                    <MessageBubble isPrimary={false} message={{ content: "df", timestamp: "11:11 AM" }} />
                )
            }
            {
                messages.map(message =>
                    <MessageBubble isPrimary={false} message={{ content: "df", timestamp: "11:11 AM" }} />
                )
            }
            {
                messages.map(message =>
                    <MessageBubble isPrimary={false} message={{ content: "df", timestamp: "11:11 AM" }} />
                )
            }
            {
                messages.map(message =>
                    <MessageBubble isPrimary={false} message={{ content: "df", timestamp: "11:11 AM" }} />
                )
            }
            {
                messages.map(message =>
                    <MessageBubble isPrimary={false} message={{ content: "df", timestamp: "11:11 AM" }} />
                )
            }
            {
                messages.map(message =>
                    <MessageBubble isPrimary={false} message={{ content: "df", timestamp: "11:11 AM" }} />
                )
            }
            {
                messages.map(message =>
                    <MessageBubble isPrimary={false} message={{ content: "df", timestamp: "11:11 AM" }} />
                )
            }
            {
                messages.map(message =>
                    <MessageBubble isPrimary={false} message={{ content: "df", timestamp: "11:11 AM" }} />
                )
            }
            {
                messages.map(message =>
                    <MessageBubble isPrimary={false} message={{ content: "df", timestamp: "11:11 AM" }} />
                )
            }
            {
                messages.map(message =>
                    <MessageBubble isPrimary={false} message={{ content: "df", timestamp: "11:11 AM" }} />
                )
            }
            {
                messages.map(message =>
                    <MessageBubble isPrimary={false} message={{ content: "df", timestamp: "11:11 AM" }} />
                )
            }
            {
                messages.map(message =>
                    <MessageBubble isPrimary={false} message={{ content: "df", timestamp: "11:11 AM" }} />
                )
            }
            {
                messages.map(message =>
                    <MessageBubble isPrimary={false} message={{ content: "df", timestamp: "11:11 AM" }} />
                )
            }
            {
                messages.map(message =>
                    <MessageBubble isPrimary={false} message={{ content: "df", timestamp: "11:11 AM" }} />
                )
            }
            {
                messages.map(message =>
                    <MessageBubble isPrimary={false} message={{ content: "df", timestamp: "11:11 AM" }} />
                )
            }
        </div>
    );
}

export default Messages;