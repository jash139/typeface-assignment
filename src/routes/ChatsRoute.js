import React, { useEffect, useState } from "react";
import ContactSection from "../components/Sections/ContactSection/ContactSection";
import MessageSection from "../components/Sections/MessageSection/MessageSection";
import { getResponse } from "../api/getResponse";

export const UserContext = React.createContext();

const ChatsRoute = () => {
    const [activeChatUserId, setActiveChatUserId] = useState("1");
    const [currentUserData, setCurrentUserData] = useState({});
    const [messages, setMessages] = useState([]);

    const getCurrentUserMessages = () => {
        getResponse("dummyData/allMessages.json")
            .then(response => {
                setMessages(response.data?.messages);
            })
    }

    useEffect(() => {
        getResponse("dummyData/currentUserData.json")
            .then(response => {
                setCurrentUserData(response.data);
            })
            .then(getCurrentUserMessages());
    }, []);

    return (
        <UserContext.Provider
            value={{
                activeChatUserId,
                setActiveChatUserId,
                currentUserData,
                setCurrentUserData,
                messages,
                setMessages
            }}
        >
            <ContactSection />
            <MessageSection />
        </UserContext.Provider>
    )
}

export default ChatsRoute;