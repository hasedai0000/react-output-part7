import { BaseLayout, TodoList } from "../../organisms";
import { InputForm } from "../../atoms";
import { useTodoContext } from "../../../hooks/useTodoContext";
import { useTodoListTemplate } from "./useTodoListTemplate";
import styles from "./style.module.css";

export const TodoListTemplate = () => {
  // コンテキストから状態とロジックを呼び出してコンポーネントにあてがう
  const { originTodoList, deleteTodo } = useTodoContext();

  const { searchKeyword, filteredTodoList, handleChangeSearchKeyword } =
    useTodoListTemplate({ originTodoList });

  return (
    <BaseLayout title={"TodoList"}>
      <div className={styles.container}>
        {/* Todo検索フォームエリア */}
        <div className={styles.area}>
          <InputForm
            inputValue={searchKeyword}
            placeholder={"Search Keyword"}
            handleChangeValue={handleChangeSearchKeyword}
          />
        </div>
        {/* Todoリスト一覧表示 */}
        <div className={styles.area}>
          {filteredTodoList.length > 0 && (
            <TodoList
              todoList={filteredTodoList}
              handleDeleteTodo={deleteTodo}
            />
          )}
        </div>
      </div>
    </BaseLayout>
  );
};
