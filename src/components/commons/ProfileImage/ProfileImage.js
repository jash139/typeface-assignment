import React from "react"

import styles from "./profileImage.module.css";

const DEFAULT_PROFILE_URL = "https://images.unsplash.com/photo-1535382651921-5e77ea4458f2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const ProfileImage = ({ src }) => {
    return (
        <img className={styles.profileImg} src={src ? src : DEFAULT_PROFILE_URL} alt="DP" />
    );
}

export default ProfileImage;