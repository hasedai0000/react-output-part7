import styles from "./style.module.css";

export const TextArea = ({
  disabled = false,
  inputValue,
  placeholder,
  handleChangeValue,
}) => {
  return (
    <textarea
      disabled={disabled}
      className={styles.textArea}
      placeholder={placeholder}
      value={inputValue}
      onChange={handleChangeValue}
    />
  );
};
