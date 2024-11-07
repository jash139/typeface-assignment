import styles from "./header.module.css";

function Header() {
    return (
        <div className={`${styles.header} card`}>
            <h2>Chat</h2>
        </div>
    );
}

export default Header;