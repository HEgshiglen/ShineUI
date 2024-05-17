import React from "react";
import styles from "./Shortcut.module.css";

export interface ShortcutProps {
    constrast: 'light' | 'dark';
    label: string;
    keystrokes: string;
}

const Shortcut = (props: ShortcutProps) => {
    const {label, constrast, keystrokes} = props;

    return (
        <div className={`${styles['shortcut']} ${styles['shortcut-' + constrast]}`}>
            {label}
            {keystrokes.split(' ').map((char, i) => (
            <div key={i} className={`${styles['strokebox']} ${styles['keystroke-' + constrast]}`}>
                {char} 
            </div>
        ))} 
        </div> 
    )
};

export default Shortcut;