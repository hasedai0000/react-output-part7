import { BaseLayout } from "../../organisms/BaseLayout";
import { useTodoContext } from "../../../hooks/useTodoContext";
import { InputForm, TextArea, CommonButton } from "../../atoms";
import { useTodoEditTemplate } from "./useTodoEditTemplate";

import styles from "./style.module.css";

export const TodoEditTemplate = () => {
  const { originTodoList, updateTodo } = useTodoContext();

  const {
    todo,
    inputTitle,
    inputContent,
    handleChangeTitle,
    handleChangeContent,
    handleUpdateTodo,
  } = useTodoEditTemplate({ updateTodo, originTodoList });

  return (
    <BaseLayout title={"TodoEdit"}>
      {!!todo && (
        <form className={styles.container} onSubmit={handleUpdateTodo}>
          <div className={styles.area}>
            <InputForm
              inputValue={inputTitle}
              placeholder={"タイトル"}
              handleChangeValue={handleChangeTitle}
            />
          </div>
          <div className={styles.area}>
            <TextArea
              inputValue={inputContent}
              placeholder={"内容"}
              handleChangeValue={handleChangeContent}
            />
          </div>
          <div className={styles.area}>
            <CommonButton type="submit" label="更新" />
          </div>
        </form>
      )}
    </BaseLayout>
  );
};
