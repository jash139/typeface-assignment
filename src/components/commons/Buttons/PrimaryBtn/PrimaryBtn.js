import styles from "./primaryBtn.module.css";

function PrimaryBtn({ text, onClick }) {
    return (
        <button className={`btn ${styles.primaryBtn}`} onClick={onClick}>{text}</button>
    );
}

export default PrimaryBtn;