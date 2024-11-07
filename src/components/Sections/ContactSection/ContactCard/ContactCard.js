import React, { useContext } from 'react'

import ProfileImage from "../../../commons/ProfileImage/ProfileImage";
import UnreadBadge from "../../../commons/UnreadBadge/UnreadBadge";
import { UserContext } from '../../../../routes/ChatsRoute';

import styles from "./contactCard.module.css";

const ContactCard = ({ contact }) => {
    const user = useContext(UserContext);

    return (
        <>
            <div className={`${styles.contactCard} ${user.activeChatUserId === contact.userId ? styles.selected : ""}`} onClick={() => user.setActiveChatUserId(contact.userId)}>
                <div className="d-flex-center">
                    <ProfileImage src={contact.profilePictureUrl} />
                    <div className={styles.chatDetails}>
                        <h3 className={styles.chatUserName}>{contact.name}</h3>
                        <p className={styles.chatPreview}>{contact.preview}</p>
                    </div>
                </div>
                <div>
                    <p className={styles.timestamp}>{contact.timestamp}</p>
                    {
                        contact.unreadCount > 0 &&
                        <UnreadBadge count={contact.unreadCount} />
                    }
                </div>
            </div>
            <div className={styles.divider} />
        </>
    );
}

export default ContactCard
