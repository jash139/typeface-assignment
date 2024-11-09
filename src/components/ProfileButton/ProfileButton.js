import React, { useEffect, useState } from "react";
import ProfileImage from "../commons/ProfileImage/ProfileImage";
import ProfileModal from "../Sections/ContactSection/ProfileModal/ProfileModal";
import { getResponse } from "../../api/getResponse";

import styles from "./profileButton.module.css";

const ProfileButton = () => {
    const [currentUserData, setCurrentUserData] = useState({});
    const [showModal, setShowModal] = useState(false);
    const toggleProfileModal = () => {
        setShowModal(!showModal);
    };

    useEffect(() => {
        getResponse("dummyData/currentUserData.json").then(response => setCurrentUserData(response.data))
    }, []);

    return (
        <>
            <div className={styles.profileBtn} onClick={toggleProfileModal}>
                <ProfileImage src={currentUserData?.profilePictureUrl} />
            </div>
            {
                showModal &&
                <ProfileModal name={currentUserData?.name} src={currentUserData?.profilePictureUrl} onClose={toggleProfileModal} />
            }
        </>
    );
}

export default ProfileButton;