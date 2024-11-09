import React, { useContext, useEffect, useState } from "react";
import ProfileImage from "../../../commons/ProfileImage/ProfileImage";
import { UserContext } from "../../../../routes/ChatsRoute";
import { MdDeleteOutline } from "react-icons/md";

import styles from "./messageBubble.module.css";
import { getResponse } from "../../../../api/getResponse";

const MessageBubble = ({ message, isPrimary }) => {
    const [activeChatUserDetails, setActiveChatUserDetails] = useState({
        userId: "",
        name: "",
        profilePictureUrl: "",
        status: ""
    })
    const userContext = useContext(UserContext);

    const handleDeleteMessage = () => {
        userContext.setMessages(userContext.messages.filter(messageDetails => messageDetails.id != message.id));
    };

    const getActiveChatUserDetails = () => {
        getResponse("dummyData/getAllUserData.json").then(response => {
            setActiveChatUserDetails(response.data.userData[message.senderId])
        })
    };

    useEffect(() => {
        !isPrimary && getActiveChatUserDetails();
    }, []);

    return (
        <div className={isPrimary ? styles.primaryContainer : styles.secondaryContainer}>
            {
                !isPrimary && <ProfileImage src={activeChatUserDetails.profilePictureUrl} />
            }
            <div className={`${styles.messageBubble} ${isPrimary ? styles.primaryMessage : styles.secondaryMessage}`}>
                {message.content}
                <span className={styles.timestamp}>{message.timestamp}</span>
            </div>
            <div className={`${styles.deleteBtn} d-flex-center`} onClick={handleDeleteMessage}><MdDeleteOutline size={20} /></div>
        </div>
    );
}

export default MessageBubble;