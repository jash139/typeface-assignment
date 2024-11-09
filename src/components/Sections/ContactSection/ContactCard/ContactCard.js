import React, { useContext } from "react";
import ProfileImage from "../../../commons/ProfileImage/ProfileImage";
import UnreadBadge from "../../../commons/UnreadBadge/UnreadBadge";
import { UserContext } from '../../../../routes/ChatsRoute';
import { TbPinned, TbPinnedFilled } from "react-icons/tb";

import styles from "./contactCard.module.css";

const ContactCard = ({ contact, isPinned, togglePinnedStatus }) => {
    const userContext = useContext(UserContext);

    return (
        <>
            <div className={`${styles.contactCard} ${userContext.activeChatUserId === contact.userId ? styles.selected : ""}`} onClick={() => userContext.setActiveChatUserId(contact.userId)}>
                <div className="d-flex-center">
                    <ProfileImage src={contact.profilePictureUrl} />
                    <div className={styles.chatDetails}>
                        <h3 className={styles.chatUserName}>{contact.name}{userContext.currentUserData?.userId === contact.userId && " (You)"}</h3>
                        <p className={styles.chatPreview}>{contact.preview}</p>
                    </div>
                </div>
                <div className="d-flex-center">
                    <div>
                        <p className={styles.timestamp}>{contact.timestamp}</p>
                        {
                            contact.unreadCount > 0 &&
                            <UnreadBadge count={contact.unreadCount} />
                        }
                    </div>
                    <div
                        className={`${styles.pinBtn} d-flex-center`}
                        onClick={(e) => {
                            e.stopPropagation();
                            togglePinnedStatus(contact.userId)
                        }}>
                        {
                            isPinned ?
                                <TbPinnedFilled size={25} />
                                :
                                <TbPinned size={25} />
                        }
                    </div>
                </div>
            </div>
            <div className={styles.divider} />
        </>
    );
}

export default ContactCard;