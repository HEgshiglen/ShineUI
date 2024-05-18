import React from "react";
import styles from "./TabsItems.module.css";

export interface TabsProps {
    label: string;
    constrast: 'light' | 'dark';
    color: 'primary' | 'secondary' | 'warning' | 'destructive' | 'success' | 'orchid';
    state: "default" | "hover" | "selected" | "focus";
    progress: "not started" | "in progress" | "completed";
}

const TabsItems = (props: TabsProps) => {
    const {label, constrast, color, state, progress} = props;

    return <div className={`${styles['tabsitems-' + constrast]}
                            ${styles['tabsitems-text']}`}>
                              <div className={`${styles['tabsitems-' + state]}
                              ${styles['tabsitems-text']}`}></div>
                <div className={`${styles['tabsitems-' + color]}
                                 ${styles['tabsitems-icon']}`}>
                                  <div className={`${styles['tabsitems-' + progress]}
                                 `}></div>
                </div>
                {label}
           </div>;
};

export default TabsItems;