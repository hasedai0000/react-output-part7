import { useCallback, useState } from "react";
import { useNavigate } from "react-router";
import { NAVIGATION_PATH } from "../../../constants/navigation";

export const useTodoCreateTemplate = ({ addTodo }) => {
  const navigate = useNavigate();
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");

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
  const handleCreateTodo = useCallback(
    (e) => {
      e.preventDefault();
      if (!inputTitle || !inputContent) {
        alert("タイトルと内容を入力してください");
        return;
      }
      addTodo(inputTitle, inputContent);
      navigate(NAVIGATION_PATH.TOP);
    },
    [addTodo, inputTitle, inputContent, navigate]
  );

  return {
    inputTitle,
    inputContent,
    handleChangeTitle,
    handleChangeContent,
    handleCreateTodo,
  };
};
