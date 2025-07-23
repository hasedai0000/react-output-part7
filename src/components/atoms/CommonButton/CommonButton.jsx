import styles from "./style.module.css";

export const CommonButton = ({ type, label, onClick }) => {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {label}
    </button>
  );
};
