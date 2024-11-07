import React from 'react'
import { RiSendPlaneFill } from "react-icons/ri";

import styles from "./messageBox.module.css"

const MessageBox = () => {
    return (
        <div className={`${styles.messageBox}`}>
            <input placeholder='Type a message...' />
            <RiSendPlaneFill className={styles.sendBtn} size={35} role='button' />
        </div>
    )
}

export default MessageBox;