import React, { useContext } from "react";
import { FiSearch } from "react-icons/fi";
import styles from "./searchbar.module.css";
import { UserContext } from "../../../../routes/ChatsRoute";

const Searchbar = () => {
    const userContext = useContext(UserContext);

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
        alert("Search feature coming soon!");
        // Feature can be added later
        // Handle search
    }, 500);

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
