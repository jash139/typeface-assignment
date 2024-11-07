import styles from "./unreadBadge.module.css";

function UnreadBadge({ count }) {
    return (
        <div className={`${styles.unreadBadge} d-flex-center`}>{count}</div>
    );
}

export default UnreadBadge;
