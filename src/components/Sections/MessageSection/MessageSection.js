import React from 'react'
import Header from './Header/Header';
import Messages from './Messages/Messages';

import styles from "./messageSection.module.css";
import MessageBox from './MessageBox/MessageBox';

const MessageSection = () => {
    return (
        <div className={styles.messageSection}>
            <Header />
            <Messages />
            <MessageBox />
        </div>
    )
}

export default MessageSection
