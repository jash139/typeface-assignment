import styles from "./outlinedBtn.module.css";

function OutlinedBtn({ text, onClick }) {
    return (
        <button className={`btn ${styles.outlinedBtn}`} onClick={onClick}>{text}</button>
    );
}

export default OutlinedBtn;