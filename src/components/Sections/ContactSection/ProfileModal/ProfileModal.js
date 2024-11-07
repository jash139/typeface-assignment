import React from 'react'
import { IoCloseCircle } from "react-icons/io5";

import styles from "./profileModal.module.css";


const ProfileModal = ({ name, src, onClose }) => {
    return (
        <div className={styles.profileModal}>
            <IoCloseCircle onClick={onClose} size={50} />
            <img src={src ?? ""} alt={name ?? ""} />
        </div>
    )
}

export default ProfileModal
