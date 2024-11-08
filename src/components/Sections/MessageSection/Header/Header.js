import React, { useContext, useEffect, useState } from "react";
import OutlinedBtn from "../../../commons/Buttons/OutlinedBtn/OutlinedBtn";
import PrimaryBtn from "../../../commons/Buttons/PrimaryBtn/PrimaryBtn";
import ProfileImage from "../../../commons/ProfileImage/ProfileImage";
import ProfileModal from "../../ContactSection/ProfileModal/ProfileModal";

import { UserContext } from "../../../../routes/ChatsRoute";
import { getResponse } from "../../../../api/getResponse";
import styles from "./header.module.css";

const Header = () => {
    const [userDetails, setUserDetails] = useState({
        userId: "",
        name: "",
        profilePictureUrl: ""
    });
    const [showProfileModal, setShowProfileModal] = useState(false);

    const user = useContext(UserContext);

    const handleDeleteChat = () => {
        if (window.confirm(`Are you sure you want to delete all chat with ${userDetails.name}?`) == true) {
            console.log("delete chat")
        }
    };

    const toggleModal = () => {
        setShowProfileModal(!showProfileModal);
    };

    const getActiveUserDetails = () => {
        getResponse("getAllUserData.json").then(response => {
            setUserDetails(response.data.userData[user.activeChatUserId])
        })
    }

    useEffect(() => {
        getActiveUserDetails();
    }, [user]);

    return (
        <>
            <div className={`${styles.header} card`}>
                <div className={styles.profileButton} onClick={toggleModal}>
                    <ProfileImage src={userDetails?.profilePictureUrl} />
                </div>
                <div className={styles.userDetails}><h3>{userDetails?.name}</h3><p className={styles.status}>Online</p></div>
                <div className={styles.actionBtns}>
                    <OutlinedBtn text="Profile" onClick={toggleModal} />
                    <div className={styles.separation} />
                    <PrimaryBtn text="Delete chat" onClick={handleDeleteChat} />
                </div>
            </div>
            {showProfileModal && <ProfileModal src={userDetails.profilePictureUrl} name={userDetails.name} onClose={toggleModal} />}
        </>
    );
}

export default Header;