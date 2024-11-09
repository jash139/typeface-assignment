import React, { useContext, useEffect, useState } from "react";
import OutlinedBtn from "../../../commons/Buttons/OutlinedBtn/OutlinedBtn";
import PrimaryBtn from "../../../commons/Buttons/PrimaryBtn/PrimaryBtn";
import ProfileImage from "../../../commons/ProfileImage/ProfileImage";
import ProfileModal from "../../ContactSection/ProfileModal/ProfileModal";
import { UserContext } from "../../../../routes/ChatsRoute";
import { getResponse } from "../../../../api/getResponse";
import ConfirmationModal from "../../../commons/ConfirmationModal/ConfirmationModal";
import styles from "./header.module.css";

const Header = () => {
    const userContext = useContext(UserContext);
    const [userDetails, setUserDetails] = useState({
        userId: "",
        name: "",
        profilePictureUrl: "",
        status: ""
    });
    const [showProfileModal, setShowProfileModal] = useState(false);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);

    const user = useContext(UserContext);

    const handleDeleteChat = () => {
        toggleConfirmationModal();
        // Contact list should be updated only after success of backend API
        // keeping here as backend isn't implemented
        userContext.setActiveChatUserId("");
        userContext.setContactList(userContext.contactList.filter(contact => contact.userId !== userDetails.userId))
    };

    const toggleProfileModal = () => {
        setShowProfileModal(!showProfileModal);
    };

    const toggleConfirmationModal = () => {
        setShowConfirmationModal(!showConfirmationModal);
    };

    const getActiveChatUserDetails = () => {
        getResponse("dummyData/getAllUserData.json").then(response => {
            setUserDetails(response.data.userData[user.activeChatUserId])
        })
    }

    useEffect(() => {
        getActiveChatUserDetails();
    }, [user]);

    return (
        <>
            <div className={`${styles.header} card`}>
                <div className={styles.profileButton} onClick={toggleProfileModal}>
                    <ProfileImage src={userDetails?.profilePictureUrl} />
                </div>
                <div className={styles.userDetails}>
                    <h3>{userDetails?.name}{userContext.currentUserData?.userId === userDetails.userId && " (You)"}</h3>
                    <p className={styles.status}>"{userDetails.status}"</p>
                </div>
                <div className={styles.actionBtns}>
                    <OutlinedBtn text="View Profile" onClick={toggleProfileModal} />
                    <div className={styles.separation} />
                    <PrimaryBtn text="Delete chat" onClick={toggleConfirmationModal} />
                </div>
            </div>
            {showProfileModal && <ProfileModal src={userDetails.profilePictureUrl} name={userDetails.name} onClose={toggleProfileModal} />}
            {
                showConfirmationModal && <ConfirmationModal
                    primaryText="Are you sure?"
                    secondaryText={`You are about to delete all chats with ${userDetails.name}.`}
                    onConfirm={handleDeleteChat}
                    onClose={toggleConfirmationModal}
                />
            }
        </>
    );
}

export default Header;