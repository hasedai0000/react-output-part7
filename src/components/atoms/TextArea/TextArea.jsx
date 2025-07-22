import styles from "./style.module.css";

export const TextArea = ({ disabled = false, inputValue, placeholder }) => {
  return (
    <textarea
      disabled={disabled}
      className={styles.textArea}
      placeholder={placeholder}
      value={inputValue}
    />
  );
};
