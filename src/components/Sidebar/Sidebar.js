import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import ProfileButton from "../ProfileButton/ProfileButton";
import { IoIosChatboxes } from "react-icons/io";
import { MdGroups, MdDelete } from "react-icons/md";

import styles from "./sidebar.module.css";

const Sidebar = () => {
    return (
        <nav className={`${styles.sidebar} card`}>
            <Link to="/">
                <Logo />
            </Link>
            <ul>
                <li>
                    <Link to="/chats"><div className={`${styles.iconBtn} d-flex-center`}><IoIosChatboxes size={30} color="#fd243e" /></div></Link>
                </li>
                <li>
                    <Link to="/channels"><div className={`${styles.iconBtn} d-flex-center`}><MdGroups size={30} color="#fd243e" /></div></Link>
                </li>
                <li>
                    <Link to="/recently-deleted"><div className={`${styles.iconBtn} d-flex-center`}><MdDelete size={30} color="#fd243e" /></div></Link>
                </li>
            </ul>
            <ProfileButton />
        </nav>
    );
}

export default Sidebar;