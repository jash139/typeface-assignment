import React from "react";
import Header from './Header/Header';
import ContactList from './ContactList/ContactList';
import styles from "./contactSection.module.css";

const ContactSection = () => {
    return (
        <div className={styles.contactSection}>
            <Header />
            <ContactList />
        </div>
    )
}

export default ContactSection;