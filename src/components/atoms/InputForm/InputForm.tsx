import { ChangeEvent, KeyboardEvent, CompositionEvent, FC } from "react";
import styles from "./style.module.css";

type InputFormProps = {
  disabled?: boolean;
  inputValue: string;
  placeholder: string;
  handleChangeValue: (e: ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  onCompositionStart?: (e: CompositionEvent<HTMLInputElement>) => void;
  onCompositionEnd?: (e: CompositionEvent<HTMLInputElement>) => void;
};

export const InputForm: FC<InputFormProps> = ({
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
