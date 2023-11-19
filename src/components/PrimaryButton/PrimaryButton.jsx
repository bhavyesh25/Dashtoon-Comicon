import styles from "./PrimaryButton.module.css";

const PrimaryButton = ({ title, ...otherProps }) => {
  return (
    <button className={styles.button} {...otherProps}>
      <p>{title}</p>
    </button>
  );
};

export default PrimaryButton;
