import { useState, useCallback } from "react";
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from "../constants/data.js";

export const useTodo = () => {
  /** Todo List */
  const [originTodoList, setOriginTodoList] = useState(INIT_TODO_LIST);
  /** Todo　採番ID */
  const [uniqueId, setUniqueId] = useState(INIT_UNIQUE_ID);

  /** actions */
  /**
   * Todo新規登録処理
   * @param {*} title
   * @param {*} content
   */
  const addTodo = useCallback(
    (title, content) => {
      const nextUniqueId = uniqueId + 1;
      const newTodo = [
        ...originTodoList,
        {
          id: nextUniqueId,
          title: title,
          content: content,
        },
      ];
      setOriginTodoList(newTodo);
      setUniqueId(nextUniqueId);
    },
    [originTodoList]
  );

  const updateTodo = useCallback(
    (id, title, content) => {
      const updatedTodoList = originTodoList.map((todo) => {
        if (id === todo.id) {
          return {
            id: id,
            title: title,
            content: content,
          };
        }
        return todo;
      });
      setOriginTodoList(updatedTodoList);
    },
    [originTodoList]
  );

  const deleteTodo = (id, title) => {
    if (window.confirm(`${title}を削除しますか？`)) {
      setOriginTodoList(originTodoList.filter((t) => t.id !== id));
    }
  };

  return {
    originTodoList,
    addTodo,
    updateTodo,
    deleteTodo,
  };
};
