import { Link, Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

import styles from "./dashboard.module.css";

function Dashboard() {
    return (
        <div className={`${styles.container} d-flex-center`}>
            <div className={styles.content}>
                <Sidebar />
                <Outlet />
            </div>
        </div>
    );
}

export default Dashboard;
