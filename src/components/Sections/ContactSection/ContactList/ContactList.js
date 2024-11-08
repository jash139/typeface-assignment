import React, { useContext } from "react";
import ContactCard from "../ContactCard/ContactCard";
import { UserContext } from "../../../../routes/ChatsRoute";

import styles from "./contactList.module.css";

const ContactList = () => {
    const userContext = useContext(UserContext);

    const togglePinnedStatus = (userId) => {
        const indexToUpdate = userContext.contactList.findIndex((contact) => {
            return contact.userId === userId
        });

        let updatedContactList = userContext.contactList.slice();
        updatedContactList[indexToUpdate] = {
            ...updatedContactList[indexToUpdate],
            pinned: !updatedContactList[indexToUpdate].pinned
        };
        userContext.setContactList(updatedContactList);
    };

    return (
        <div className={`${styles.contactList} card`}>
            <p className={styles.contactListSubheading}>Pinned</p>
            {
                userContext.contactList.filter(contact => contact.pinned).length === 0
                && <p className={styles.noContactsMsg}>No pinned contacts.</p>
            }
            {
                userContext.contactList.filter(contact => contact.pinned).map(contact =>
                    <ContactCard
                        key={contact.userId}
                        contact={contact}
                        isPinned={true}
                        togglePinnedStatus={togglePinnedStatus}
                    />
                )
            }
            <p className={styles.contactListSubheading}>All</p>
            {
                userContext.contactList.filter(contact => !contact.pinned).map(contact =>
                    <ContactCard
                        key={contact.userId}
                        contact={contact}
                        isPinned={false}
                        togglePinnedStatus={togglePinnedStatus}
                    />
                )
            }
            {
                userContext.contactList.filter(contact => !contact.pinned).length === 0
                && <p className={styles.noContactsMsg}>No contacts.</p>
            }
        </div>
    );
}

export default ContactList;