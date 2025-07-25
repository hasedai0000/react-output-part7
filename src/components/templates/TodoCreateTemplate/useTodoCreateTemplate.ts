import { useCallback, useState, FormEvent, ChangeEvent } from "react";
import { useNavigate } from "react-router";
import { NAVIGATION_PATH } from "../../../constants/navigation";

type UseTodoCreateTemplateParams = {
  addTodo: (title: string, content: string) => void;
};

export const useTodoCreateTemplate = ({
  addTodo,
}: UseTodoCreateTemplateParams) => {
  const navigate = useNavigate();
  const [inputTitle, setInputTitle] = useState<string>("");
  const [inputContent, setInputContent] = useState<string>("");

  /**
   * タイトルを変更する処理
   * @param {ChangeEvent<HTMLInputElement>} e
   */
  const handleChangeTitle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value);
  }, []);

  /**
   * 内容を変更する処理
   * @param {ChangeEvent<HTMLTextAreaElement>} e
   */
  const handleChangeContent = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      setInputContent(e.target.value);
    },
    []
  );

  /**
   * 新規作成する処理
   */
  const handleCreateTodo = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!inputTitle && !inputContent) {
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
