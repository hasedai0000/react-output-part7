import { TodoList } from "../../organisms/TodoList";
import { InputForm } from "../../atoms/InputForm";
import { BaseLayout } from "../../organisms/BaseLayout";
import styles from "./style.module.css";
import { useTodoContext } from "../../../hooks/useTodoContext";
import { useTodoListTemplate } from "./useTodoListTemplate";

export const TodoListTemplate = () => {
  const { originTodoList, deleteTodo } = useTodoContext();

  const { searchKeyword, filteredTodoList, handleChangeSearchKeyword } =
    useTodoListTemplate({ originTodoList });

  return (
    <BaseLayout title={"TodoList"}>
      {/* 検索キーワードを入力する */}
      <section className={styles.common}>
        <InputForm
          inputValue={searchKeyword}
          placeholder={"検索キーワード"}
          handleChangeValue={handleChangeSearchKeyword}
        />
      </section>
      {/* タスクを表示する */}
      <section className={styles.common}>
        {filteredTodoList.length > 0 ? (
          <TodoList todoList={filteredTodoList} handleDeleteTodo={deleteTodo} />
        ) : (
          <p className={styles.noList}>リストがありません</p>
        )}
      </section>
    </BaseLayout>
  );
};
