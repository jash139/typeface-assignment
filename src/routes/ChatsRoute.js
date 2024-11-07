import React from 'react'
import ContactSection from '../components/Sections/ContactSection/ContactSection'
import MessageSection from '../components/Sections/MessageSection/MessageSection'

const ChatsRoute = () => {
    return (
        <>
            {/* <ChatPreviewHeader />
        <ChatPreviewList />
        <ActiveChat /> */}
            <ContactSection />
            <MessageSection />
        </>
    )
}

export default ChatsRoute
