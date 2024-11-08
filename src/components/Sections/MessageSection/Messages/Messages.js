import React, { useContext, useEffect } from "react";
import MessageBubble from "../MessageBubble/MessageBubble";
import scrollToEnd from "../../../../utils/ScrollToEnd";
import { UserContext } from "../../../../routes/ChatsRoute";
import styles from "./messages.module.css";

const Messages = () => {
    const userContext = useContext(UserContext);

    const filterMessagesForCurrentChat = (allMessages) => {
        return allMessages.filter((message) => {
            const isPrimaryMessage = message.senderId === userContext.currentUserData?.userId && message.receiverId === userContext.activeChatUserId;
            const isSecondaryMessage = message.senderId === userContext.activeChatUserId && message.receiverId === userContext.currentUserData?.userId;
            if (isPrimaryMessage || isSecondaryMessage)
                return true;
            return false;
        })
    }

    // Each time the messages is updated, we scroll to latest message at the end
    useEffect(() => {
        scrollToEnd("messages-section");
    }, [userContext.messages]);

    return (
        <div id="messages-section" className={`${styles.messages} card`}>
            {
                filterMessagesForCurrentChat(userContext.messages).map(message =>
                    <MessageBubble
                        key={message.id}
                        isPrimary={message.senderId == userContext.currentUserData?.userId}
                        message={message}
                    />
                )
            }
        </div>
    );
}

export default Messages;