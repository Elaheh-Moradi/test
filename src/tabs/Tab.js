import React, { useState } from "react";
import styles from "./Tab.module.css" 
 
const Tab = ({ label, onClick, isActive }) => (
    <div
        className={`${styles.tab} ${isActive ? styles.active : ""}`}
        onClick={onClick}
    >
        {label}
    </div>
);
 
export default Tab;