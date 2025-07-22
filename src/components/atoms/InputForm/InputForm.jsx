import styles from "./style.module.css";

export const InputForm = ({
  disabled = false,
  inputValue,
  placeholder,
  handleChangeValue,
  handleKeyDown,
  onCompositionStart,
  onCompositionEnd,
}) => {
  return (
    <input
      disabled={disabled}
      className={styles.input}
      type="text"
      placeholder={placeholder}
      value={inputValue}
      onChange={handleChangeValue}
      onKeyDown={handleKeyDown}
      onCompositionStart={onCompositionStart}
      onCompositionEnd={onCompositionEnd}
    />
  );
};
