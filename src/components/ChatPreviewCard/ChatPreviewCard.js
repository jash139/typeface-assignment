import UnreadBadge from "../UnreadBadge/UnreadBadge";
import styles from "./chatPreviewCard.module.css";

const DEFAULT_PROFILE_URL = "https://images.unsplash.com/photo-1535382651921-5e77ea4458f2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

function ChatPreviewCard({ chatPreviewDetails }) {
    return (
        <>
            <div className={styles.chatPreviewCard}>
                <div className="d-flex-center">
                    <img className={styles.profileImg} src={chatPreviewDetails.profilePictureUrl ? chatPreviewDetails.profilePictureUrl : DEFAULT_PROFILE_URL} alt="DP" />
                    <div>
                        <h3 className={styles.chatUserName}>{chatPreviewDetails.name}</h3>
                        <p className={styles.chatPreview}>{chatPreviewDetails.preview}</p>
                    </div>
                </div>
                <div>
                    <p className={styles.chatTime}>{chatPreviewDetails.timestamp}</p>
                    {
                        chatPreviewDetails.unreadCount > 0 &&
                        <UnreadBadge count={chatPreviewDetails.unreadCount} />
                    }
                </div>
            </div>
            <div className={styles.divider} />
        </>
    );
}

export default ChatPreviewCard;
