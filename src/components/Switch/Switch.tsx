import React, { useState } from "react";
import styles from "./Switch.module.css";

export interface SwitchProps {
  label: string;
  contrast: "light" | "dark";
  initialChecked?: boolean;
  initialError?: boolean;
}

const Switch = (props: SwitchProps) => {
  const {
    label,
    contrast,
    initialChecked = false,
    initialError = false,
  } = props;
  const [checked, setChecked] = useState(initialChecked);
  const [error, setError] = useState(initialError);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <label
      className={`${styles.switch} ${styles["switch-" + contrast]} ${
        error ? styles.error : ""
      }`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className={styles.switchInput}
      />
      <span className={styles.label}>{label}</span>
    </label>
  );
};

export default Switch;
