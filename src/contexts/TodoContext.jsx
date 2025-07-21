import { createContext } from "react";
import { useTodo } from "../hooks/useTodo.js";

/**
 * TodoContext
 */
const TodoContext = createContext({});

// TodoContextをエクスポート
export { TodoContext };

/**
 * TodoProvider
 *
 * @param children
 * @constructor
 */
export const TodoProvider = ({ children }) => {
  // カスタムフックから状態とロジックを呼び出してコンテキストプロバイダーにあてがう
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
  } = useTodo();

  return (
    <TodoContext.Provider
      value={{
        addInputValue,
        searchKeyword,
        filteredTodoList,
        onChangeAddInputValue,
        handleChangeSearchKeyword,
        handleAddTodo,
        handleCompositionStart,
        handleCompositionEnd,
        handleDeleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
