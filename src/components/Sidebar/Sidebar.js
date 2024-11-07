import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import ProfileButton from "../ProfileButton/ProfileButton";
import { FaHome } from "react-icons/fa";
import { IoIosChatboxes } from "react-icons/io";
import { MdGroups } from "react-icons/md";
import { MdDelete } from "react-icons/md";

import styles from "./sidebar.module.css";

function Sidebar() {
    return (
        <nav className={`${styles.sidebar} card`}>
            <Logo />
            <ul>
                <li>
                    <Link to="/"><FaHome size={35} color="#fd243e" ac /></Link>
                </li>
                <li>
                    <Link to="/chats"><IoIosChatboxes size={35} color="#fd243e" /></Link>
                </li>
                <li>
                    <Link to="/channels"><MdGroups size={35} color="#fd243e" /></Link>
                </li>
                <li>
                    <Link to="/recently-deleted"><MdDelete size={35} color="#fd243e" /></Link>
                </li>
            </ul>
            <ProfileButton />
        </nav>
    );
}

export default Sidebar;
