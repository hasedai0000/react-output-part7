import { ChangeEvent, KeyboardEvent, CompositionEvent, FC } from "react";
import { InputForm } from "../../atoms/InputForm";
import styles from "./style.module.css";

type AddTodoProps = {
  addInputValue: string;
  onChangeTodo: (e: ChangeEvent<HTMLInputElement>) => void;
  handleAddTodo: (e: KeyboardEvent<HTMLInputElement>) => void;
  onCompositionStart?: (e: CompositionEvent<HTMLInputElement>) => void;
  onCompositionEnd?: (e: CompositionEvent<HTMLInputElement>) => void;
};

export const AddTodo: FC<AddTodoProps> = ({
  addInputValue,
  onChangeTodo,
  handleAddTodo,
  onCompositionStart,
  onCompositionEnd,
}) => {
  return (
    <>
      <h2 className={styles.subTitle}>タスクを追加する</h2>
      <InputForm
        inputValue={addInputValue}
        placeholder={"タスクを入力してください"}
        handleChangeValue={onChangeTodo}
        handleKeyDown={handleAddTodo}
        onCompositionStart={onCompositionStart}
        onCompositionEnd={onCompositionEnd}
      />
    </>
  );
};
