import React from "react";
import styles from "./UserBadge.module.css";

export interface UserBadgeProps {
    label: string;
    constrast: 'light' | 'dark';
    state: 'default' | 'hover';
}

const UserBadge = (props: UserBadgeProps) => {
    const {label, constrast, state} = props;

    return <div className={`${styles['statusbadge-' + constrast + "-" + state]} ${styles['statusbadge']}`}>
                <div className={`${styles['userbadge-frame']}`}>
                    <div className={`${styles['userbadge-icon']}`}>
                        
                    </div>
                </div>
                {label}
           </div>;
};

export default UserBadge;