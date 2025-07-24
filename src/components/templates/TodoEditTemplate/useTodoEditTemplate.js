import { useCallback, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { NAVIGATION_PATH } from "../../../constants/navigation";

export const useTodoEditTemplate = ({ updateTodo, originTodoList }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const todo = originTodoList.find((todo) => String(todo.id) === id);
  const [inputTitle, setInputTitle] = useState(todo?.title || "");
  const [inputContent, setInputContent] = useState(todo?.content || "");

  /**
   * タイトルを変更する処理
   * @param {*} e
   */
  const handleChangeTitle = useCallback((e) => {
    setInputTitle(e.target.value);
  }, []);

  /**
   * 内容を変更する処理
   * @param {*} e
   */
  const handleChangeContent = useCallback((e) => {
    setInputContent(e.target.value);
  }, []);

  /**
   * 新規作成する処理
   */
  const handleUpdateTodo = useCallback(
    (e) => {
      e.preventDefault();
      if (!!todo?.id && !inputTitle && !inputContent) {
        alert("タイトルと内容を入力してください");
        return;
      }
      updateTodo(todo.id, inputTitle, inputContent);
      navigate(NAVIGATION_PATH.TOP);
    },
    [updateTodo, todo?.id, inputTitle, inputContent, navigate]
  );

  return {
    todo,
    inputTitle,
    inputContent,
    handleChangeTitle,
    handleChangeContent,
    handleUpdateTodo,
  };
};
