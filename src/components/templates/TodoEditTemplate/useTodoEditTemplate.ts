import { useCallback, useState, FormEvent, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router";
import { NAVIGATION_PATH } from "../../../constants/navigation";
import { TodoType } from "../../../types/Todo";

type UseTodoEditTemplateProps = {
  originTodoList: Array<TodoType>;
  updateTodo: (id: number, title: string, content: string) => void;
};

export const useTodoEditTemplate = ({
  originTodoList,
  updateTodo,
}: UseTodoEditTemplateProps) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const todo = originTodoList.find((todo) => String(todo.id) === id);
  const [inputTitle, setInputTitle] = useState<string>(todo?.title || "");
  const [inputContent, setInputContent] = useState<string>(todo?.content || "");

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
   * 更新する処理
   */
  const handleUpdateTodo = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!!todo?.id && !inputTitle && !inputContent) {
        alert("タイトルと内容を入力してください");
        return;
      }
      if (todo?.id) {
        updateTodo(todo.id, inputTitle, inputContent);
        navigate(NAVIGATION_PATH.TOP);
      }
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
