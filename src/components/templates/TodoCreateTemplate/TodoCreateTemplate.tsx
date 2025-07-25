import { BaseLayout } from "../../organisms/BaseLayout";
import { useTodoContext } from "../../../hooks/useTodoContext";
import { InputForm, TextArea, CommonButton } from "../../atoms";
import { useTodoCreateTemplate } from "./useTodoCreateTemplate";
import styles from "./style.module.css";

export const TodoCreateTemplate = () => {
  const { addTodo } = useTodoContext();
  const {
    inputTitle,
    inputContent,
    handleChangeTitle,
    handleChangeContent,
    handleCreateTodo,
  } = useTodoCreateTemplate({ addTodo });

  return (
    <BaseLayout title={"TodoCreate"}>
      <form className={styles.container} onSubmit={handleCreateTodo}>
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
          <CommonButton type="submit">作成</CommonButton>
        </div>
      </form>
    </BaseLayout>
  );
};
