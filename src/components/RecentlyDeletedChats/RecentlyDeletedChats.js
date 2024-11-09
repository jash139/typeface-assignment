import React from "react";

import styles from "./recentlyDeletedChats.module.css";

const RecentlyDeletedChats = () => {
    return (
        <div className={`${styles.deletedChats} card d-flex-center`}>
            <h2>Recently deleted / Archived chats will show up here.<br />
                Feature coming soon!</h2>
        </div>
    )
}

export default RecentlyDeletedChats;
