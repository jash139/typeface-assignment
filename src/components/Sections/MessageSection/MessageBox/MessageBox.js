import React from 'react'

import styles from "./messageBox.module.css"

const MessageBox = () => {
    return (
        <div className={`${styles.messageBox}`}>
            <input placeholder='Type a message...' />
            <button className={`${styles.sendBtn} d-flex-center`}>Se</button>
        </div>
    )
}

export default MessageBox;