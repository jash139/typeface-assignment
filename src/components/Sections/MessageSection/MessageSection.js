import React from "react";
import Header from "./Header/Header";
import Messages from "./Messages/Messages";
import MessageBox from './MessageBox/MessageBox';

import styles from "./messageSection.module.css";

const MessageSection = () => {
    return (
        <div className={styles.messageSection}>
            <Header />
            <Messages />
            <MessageBox />
        </div>
    )
}

export default MessageSection;