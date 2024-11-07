import { useEffect, useState } from "react";
import ChatPreviewCard from "../ChatPreviewCard/ChatPreviewCard";
import { getResponse } from "../../api/getResponse";

import styles from "./chatPreviewList.module.css";

function ChatPreviewList() {
    const [chatPreviewList, setChatPreviewList] = useState([]);

    useEffect(() => {
        getResponse("chatPreviewList.json").then(response => setChatPreviewList(response.data.chatPreviewList))
    }, []);

    return (
        <div className={`${styles.chatPreviewList} card`}>
            <p className={styles.chatPreviewSubheading}>Pinned</p>
            {
                chatPreviewList.map(chatPreviewDetails =>
                    <ChatPreviewCard key={chatPreviewDetails.userId} chatPreviewDetails={chatPreviewDetails} />
                )
            }
            <p className={styles.chatPreviewSubheading}>All</p>
        </div>
    );
}

export default ChatPreviewList;
