import OutlinedBtn from "../../../commons/Buttons/OutlinedBtn/OutlinedBtn";
import PrimaryBtn from "../../../commons/Buttons/PrimaryBtn/PrimaryBtn";
import ProfileImage from "../../../commons/ProfileImage/ProfileImage";
import styles from "./header.module.css";

function Header() {
    return (
        <div className={`${styles.header} card`}>
            <ProfileImage src="" />
            <div className={styles.userDetails}><h3>Ayush Acharya</h3><p className={styles.status}>Online</p></div>
            <div className={styles.actionBtns}>
                <OutlinedBtn />
                <div className={styles.separation} />
                <PrimaryBtn />
            </div>
        </div>
    );
}

export default Header;
