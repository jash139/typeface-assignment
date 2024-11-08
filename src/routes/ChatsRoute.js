import React, { useEffect, useState } from "react";
import ContactSection from "../components/Sections/ContactSection/ContactSection";
import MessageSection from "../components/Sections/MessageSection/MessageSection";
import { getResponse } from "../api/getResponse";
import ChatSvg from "../components/ChatSvg/ChatSvg";

export const UserContext = React.createContext();

const ChatsRoute = () => {
    const [activeChatUserId, setActiveChatUserId] = useState("1");
    const [currentUserData, setCurrentUserData] = useState({});
    const [messages, setMessages] = useState([]);
    const [contactList, setContactList] = useState([]);

    const getCurrentUserMessages = () => {
        getResponse("dummyData/allMessages.json")
            .then(response => {
                setMessages(response.data?.messages);
            })
    };

    const getContactList = () => {
        getResponse("dummyData/contactList.json")
            .then(response => setContactList(response.data.contactList));
    };

    useEffect(() => {
        getResponse("dummyData/currentUserData.json")
            .then(response => {
                setCurrentUserData(response.data);
            })
            .then(getCurrentUserMessages())
            .then(getContactList());
    }, []);

    return (
        <UserContext.Provider
            value={{
                activeChatUserId,
                setActiveChatUserId,
                currentUserData,
                setCurrentUserData,
                messages,
                setMessages,
                contactList,
                setContactList
            }}
        >
            <ContactSection />
            {
                activeChatUserId !== "" ? <MessageSection /> : <ChatSvg />
            }
        </UserContext.Provider>
    )
}

export default ChatsRoute;