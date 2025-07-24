import { useCallback } from "react";
import { useNavigate } from "react-router";
import { NAVIGATION_PATH } from "../../../constants/navigation";

export const useTodoList = () => {
  const navigate = useNavigate();

  /**
   * 詳細ページに遷移する処理
   * @param {*} id
   * @type {function(*): void}
   */
  const handleNavigateToDetail = useCallback(
    (id) => {
      navigate(`${NAVIGATION_PATH.DETAIL}${id}`);
    },
    [navigate]
  );

  /**
   * 編集ページに遷移する処理
   * @param {*} id
   * @type {function(*): void}
   */
  const handleNavigateToEdit = useCallback(
    (id) => {
      navigate(`${NAVIGATION_PATH.EDIT}${id}`);
    },
    [navigate]
  );
  return { handleNavigateToDetail, handleNavigateToEdit };
};
