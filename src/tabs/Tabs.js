import React, { useState } from "react";
import Tab from "./Tab";
import styles from "./Tab.module.css" 
import Table from "../table/Table";
import Page from "../page/Page";

const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(1);
    let table=<></>
    let [myTable,setMyTable]=useState(<></>)

    let handleTabClick = (index) => {
        setActiveTab(index);
        if (index===0) {
            setMyTable(<Page title="TAB1"/>)
        }
        else if(index===1){
            setMyTable(<Page title="TAB2"/>)

        }
        else if(index===2){
            setMyTable(<Page title="TAB3"/>)

        }
    };
 
    return (
        <div className={styles["tabs-container"]}>
            <div className={styles.tabs}>
                {tabs.map((tab, index) => (
                    <Tab
                        key={index}
                        label={tab.label}
                        onClick={() =>
                            handleTabClick(index)
                        }
                        isActive={index === activeTab}
                    />
                ))}
            </div>
            <div className={styles["tab-content"]}>
                {/* Tab {activeTab} is Active */}
                {myTable}
            </div>
        </div>
    );
};
 
export default Tabs;