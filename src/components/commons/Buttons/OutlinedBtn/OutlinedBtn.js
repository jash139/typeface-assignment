import styles from "./outlinedBtn.module.css";

function OutlinedBtn() {
    return (
        <button className={`btn ${styles.outlinedBtn}`}>OutlinedBtn</button>
    );
}

export default OutlinedBtn;