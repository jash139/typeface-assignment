import { Link, Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

import styles from "./dashboard.module.css";

function Dashboard() {
    return (
        <>
            <Sidebar />
            <div className={styles.dashboardContent}>
                <Outlet />
            </div>
        </>
    );
}

export default Dashboard;
