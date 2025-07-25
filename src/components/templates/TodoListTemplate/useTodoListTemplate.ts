import { useState, useMemo, useCallback, ChangeEvent } from "react";
import { TodoType } from "../../../types/Todo";

type UseTodoListTemplateParams = {
  originTodoList: Array<TodoType>;
};

export const useTodoListTemplate = ({
  originTodoList,
}: UseTodoListTemplateParams) => {
  /** 検索キーワード */
  const [searchKeyword, setSearchKeyword] = useState("");

  /**
   * 検索キーワードで絞り込んだTodo List
   */
  const filteredTodoList = useMemo(() => {
    const regexp = new RegExp("^" + searchKeyword, "i");
    return originTodoList.filter((todo) => {
      return todo.title.match(regexp);
    });
  }, [originTodoList, searchKeyword]);

  /**
   * 検索キーワードを変更する
   * @param {ChangeEvent<HTMLInputElement>} e イベントオブジェクト
   */
  const handleChangeSearchKeyword = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setSearchKeyword(e.target.value),
    []
  );

  return {
    searchKeyword,
    filteredTodoList,
    handleChangeSearchKeyword,
  };
};
