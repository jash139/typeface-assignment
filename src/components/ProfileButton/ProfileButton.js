import React from "react";
import ProfileImage from "../commons/ProfileImage/ProfileImage";

import styles from "./profileButton.module.css";


const ProfileButton = () => {
    return (
        <div className={styles.profileBtn}>
            <ProfileImage />
        </div>
    );
}

export default ProfileButton;