import { useState, useMemo, useCallback } from "react";

export const useTodoListTemplate = ({ originTodoList }) => {
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
   * @param {＊} e イベントオブジェクト
   */
  const handleChangeSearchKeyword = useCallback(
    (e) => setSearchKeyword(e.target.value),
    []
  );

  return {
    searchKeyword,
    filteredTodoList,
    handleChangeSearchKeyword,
  };
};
