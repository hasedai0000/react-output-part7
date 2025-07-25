import { useParams } from "react-router";
import { BaseLayout } from "../../organisms/BaseLayout";
import { useTodoContext } from "../../../hooks/useTodoContext";
import { InputForm, TextArea } from "../../atoms";
import styles from "./style.module.css";

export const TodoDetailTemplate = () => {
  const { originTodoList } = useTodoContext();
  const { id } = useParams();
  const todo = originTodoList.find((todo) => String(todo.id) === id);

  return (
    <BaseLayout title={"TodoDetail"}>
      {!!todo && (
        <div className={styles.container}>
          <div className={styles.area}>
            <InputForm
              disabled={true}
              inputValue={todo.title}
              placeholder={"タイトル"}
              handleChangeValue={() => {}}
            />
          </div>
          <div className={styles.area}>
            <TextArea
              disabled={true}
              inputValue={todo.content}
              placeholder={"内容"}
              handleChangeValue={() => {}}
            />
          </div>
        </div>
      )}
    </BaseLayout>
  );
};
