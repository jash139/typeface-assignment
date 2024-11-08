import React, { useState } from "react";
import ContactSection from "../components/Sections/ContactSection/ContactSection";
import MessageSection from "../components/Sections/MessageSection/MessageSection";

export const UserContext = React.createContext();

const ChatsRoute = () => {
    const [activeChatUserId, setActiveChatUserId] = useState("1");

    return (
        <UserContext.Provider value={{ activeChatUserId, setActiveChatUserId }}>
            <ContactSection />
            <MessageSection />
        </UserContext.Provider>
    )
}

export default ChatsRoute;