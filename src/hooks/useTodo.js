import { useState, useMemo } from "react";
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from "../constants/data.js";

export const useTodo = () => {
  /** Todo List */
  const [originTodoList, setOriginTodoList] = useState(INIT_TODO_LIST);
  /** 検索キーワード */
  const [searchKeyword, setSearchKeyword] = useState("");
  /** Todo　採番ID */
  const [uniqueId, setUniqueId] = useState(INIT_UNIQUE_ID);
  /** タスクを追加する */
  const [addInputValue, setAddInputValue] = useState("");
  /** IME変換中かどうか */
  const [isComposing, setIsComposing] = useState(false);

  /** 検索キーワードで絞り込んだTodo List */
  const filteredTodoList = useMemo(() => {
    return originTodoList.filter((todo) => {
      //　検索キーワードに部分一致したTodoだけを一覧表示する
      const regexp = new RegExp("" + searchKeyword, "i");
      return todo.title.match(regexp);
    });
  }, [originTodoList, searchKeyword]);

  /** action */
  const handleChangeSearchKeyword = (e) => {
    setSearchKeyword(e.target.value);
  };

  const onChangeAddInputValue = (e) => {
    setAddInputValue(e.target.value);
  };

  /**
   * タスクを追加する
   * @param {*} e
   */
  const handleAddTodo = (e) => {
    /** エンターキーが押された時にTodoを追加する  */
    if (e.key === "Enter" && addInputValue !== "" && !isComposing) {
      const nextUniqueId = uniqueId + 1;

      // スプレッド構文の処理
      const nextTodoList = [
        ...originTodoList,
        {
          id: nextUniqueId,
          title: addInputValue,
        },
      ];
      setOriginTodoList(nextTodoList);
      // todo 入力フォームを空にする
      setAddInputValue("");

      // 採番IDを更新する
      setUniqueId(nextUniqueId);
    }
  };

  /**
   * IME変換開始時の処理
   */
  const handleCompositionStart = () => {
    setIsComposing(true);
  };

  /**
   * IME変換終了時の処理
   */
  const handleCompositionEnd = () => {
    setIsComposing(false);
  };

  /**
   * タスクを削除する
   * @param { number } targetId
   * @param { string } targetTitle
   */
  const handleDeleteTodo = (targetId, targetTitle) => {
    if (window.confirm(`「 ${targetTitle}」のtodoを削除しますか？`)) {
      // 削除するid以外のtodoリストを再編集
      // filterを用いた方法
      const newTodoList = originTodoList.filter((todo) => todo.id !== targetId);

      // 再編集したtodoリストをセットする
      setOriginTodoList(newTodoList);
    }
  };

  return {
    addInputValue,
    searchKeyword,
    filteredTodoList,
    onChangeAddInputValue,
    handleChangeSearchKeyword,
    handleAddTodo,
    handleCompositionStart,
    handleCompositionEnd,
    handleDeleteTodo,
  };
};
