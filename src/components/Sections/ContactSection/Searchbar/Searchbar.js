import React, { useContext, useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { UserContext } from "../../../../routes/ChatsRoute";
import { getResponse } from "../../../../api/getResponse";
import styles from "./searchbar.module.css";

const Searchbar = () => {
    const userContext = useContext(UserContext);
    // Maintaining allMessages variable to filter upon.
    // Since updating existing contact list after filtering
    // will not contain the whole array
    const [allMessages, setAllMessages] = useState([]);

    const debounce = (callback, wait) => {
        let timeoutId = null;
        return (...args) => {
            window.clearTimeout(timeoutId);
            timeoutId = window.setTimeout(() => {
                callback(...args);
            }, wait);
        };
    }

    // Debounce is added to ensure overloading doesn't happen
    const handleSearch = debounce((searchTerm) => {
        userContext.setContactList(allMessages.filter(contact => contact.name.toLowerCase().includes(searchTerm.trim())));
    }, 500);

    useEffect(() => {
        getResponse("dummyData/contactList.json")
            .then(response => {
                setAllMessages(response.data.contactList)
            })
    }, []);

    return (
        <div className={`${styles.searchbar} d-flex-center`}>
            <input
                placeholder="Search"
                onChange={(e) => handleSearch(e.target.value)}
            />
            <FiSearch />
        </div>
    )
}

export default Searchbar;
