import styles from "./SecondaryButton.module.css";

const SecondaryButton = ({ title, icon, ...otherProps }) => {
  return (
    <button className={styles.button} {...otherProps}>
      {icon && <img src={icon} />}
      <p>{title}</p>
    </button>
  );
};

export default SecondaryButton;
