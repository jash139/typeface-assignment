import React, { useEffect, useState } from "react";
import ContactCard from "../ContactCard/ContactCard";
import { getResponse } from "../../../../api/getResponse";

import styles from "./contactList.module.css";

const ContactList = () => {
    const [contactList, setContactList] = useState([]);

    useEffect(() => {
        getResponse("dummyData/contactList.json").then(response => setContactList(response.data.contactList))
    }, []);

    return (
        <div className={`${styles.contactList} card`}>
            <p className={styles.contactListSubheading}>Pinned</p>
            {
                contactList.filter(contact => contact.pinned).map(contact =>
                    <ContactCard key={contact.userId} contact={contact} />
                )
            }
            <p className={styles.contactListSubheading}>All</p>
            {
                contactList.filter(contact => !contact.pinned).map(contact =>
                    <ContactCard key={contact.userId} contact={contact} />
                )
            }
        </div>
    );
}

export default ContactList;