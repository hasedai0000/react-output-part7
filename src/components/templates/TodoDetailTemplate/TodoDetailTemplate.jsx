import { TodoList } from "../../organisms/TodoList";
import { InputForm } from "../../atoms/InputForm";
import { AddTodo } from "../../organisms/AddTodo";
import styles from "./style.module.css";
import { useTodoContext } from "../../../hooks/useTodoContext";

export const TodoDetailTemplate = () => {
  const {
    addInputValue,
    searchKeyword,
    filteredTodoList,
    onChangeAddInputValue,
    handleChangeSearchKeyword,
    handleAddTodo,
    handleCompositionStart,
    handleCompositionEnd,
    handleDeleteTodo,
  } = useTodoContext();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo List</h1>
      {/* タスクを追加する */}
      <section className={styles.common}>
        <AddTodo
          addInputValue={addInputValue}
          onChangeTodo={onChangeAddInputValue}
          handleAddTodo={handleAddTodo}
          onCompositionStart={handleCompositionStart}
          onCompositionEnd={handleCompositionEnd}
        />
      </section>
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
          <TodoList
            todoList={filteredTodoList}
            handleDeleteTodo={handleDeleteTodo}
          />
        ) : (
          <p className={styles.noList}>リストがありません</p>
        )}
      </section>
    </div>
  );
};
