import React from "react";
import styles from "./confirmationModal.module.css";
import PrimaryBtn from "../Buttons/PrimaryBtn/PrimaryBtn";
import OutlinedBtn from "../Buttons/OutlinedBtn/OutlinedBtn";

const ConfirmationModal = ({ primaryText, secondaryText, onClose, onConfirm }) => {
    return (
        <div className={styles.modal}>
            <div className={`${styles.modalContent} card`}>
                <h2 className={styles.primaryText}>{primaryText ?? "Are you sure?"}</h2>
                <p className={styles.secondaryText}>{secondaryText ?? "This action is irreversible"}</p>
                <div className={styles.actionBtns}>
                    <OutlinedBtn text="Cancel" onClick={onClose} />
                    <PrimaryBtn text="Confirm" onClick={onConfirm} />
                </div>
            </div>
        </div>
    )
}

export default ConfirmationModal
