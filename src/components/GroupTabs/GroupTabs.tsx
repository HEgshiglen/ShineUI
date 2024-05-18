import React from "react";
import styles from "./GroupTabs.module.css";

export interface TabsProps {
  label: string;
  constrast: "light" | "dark";
  state: "default" | "hover" | "selected" | "focus";
}

const GroupTabs = (props: TabsProps) => {
  const { label, constrast, state} = props;

  return (
    <div
      className={`${styles["grouptabs-" + constrast]}
    ${styles["grouptabs-" + constrast + "-" + state]} 
    ]}`}
    >
      {label}
    </div>
  );
};

export default GroupTabs;
