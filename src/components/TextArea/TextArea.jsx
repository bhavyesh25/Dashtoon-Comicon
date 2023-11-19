import React from "react";
import styles from "./TextArea.module.css";

const TextArea = ({ label, ...otherProps }) => {
  return (
    <div className={styles.field}>
      <p className={styles.label}>{label}</p>
      <textarea className={styles.input} {...otherProps} />
    </div>
  );
};

export default TextArea;
