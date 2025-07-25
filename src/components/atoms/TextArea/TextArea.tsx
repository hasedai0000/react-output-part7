import { ChangeEvent, FC } from "react";
import styles from "./style.module.css";

type TextAreaProps = {
  disabled?: boolean;
  inputValue: string;
  placeholder: string;
  handleChangeValue: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

export const TextArea: FC<TextAreaProps> = ({
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
