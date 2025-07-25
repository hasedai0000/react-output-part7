import { Todo } from "../types";

/**
 * Todoリストの処理値
 */
export const INIT_TODO_LIST: Todo[] = [
  {
    id: 1,
    title: "Reactを勉強する",
    content: "Reactの基礎を学ぶ",
  },
  {
    id: 2,
    title: "TypeScriptを勉強する",
    content: "TypeScriptの基礎を学ぶ",
  },
];

/**
 * Todo採番IDの初期値
 */
export const INIT_UNIQUE_ID: number = INIT_TODO_LIST.length;
