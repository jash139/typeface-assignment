import React from "react";
import { IoCloseCircle } from "react-icons/io5";

import styles from "./profileModal.module.css";

const ProfileModal = ({ name, src, onClose }) => {
    return (
        <div className={styles.profileModal} onClick={onClose}>
            <IoCloseCircle size={50} />
            <div onClick={(e) => e.stopPropagation()}>
                <img src={src ?? ""} alt={name ?? ""} />
                <h2>{name}</h2>
            </div>
        </div>
    )
}

export default ProfileModal;