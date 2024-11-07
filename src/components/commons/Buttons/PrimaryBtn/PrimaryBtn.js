import styles from "./primaryBtn.module.css";

function PrimaryBtn() {
    return (
        <button className={`btn ${styles.primaryBtn}`}>PrimaryBtn</button>
    );
}

export default PrimaryBtn;