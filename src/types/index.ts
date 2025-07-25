export interface Todo {
  id: number;
  title: string;
  content: string;
}

export interface TodoContextType {
  originTodoList: Todo[];
  addTodo: (title: string, content: string) => void;
  updateTodo: (id: number, title: string, content: string) => void;
  deleteTodo: (id: number, title: string) => void;
}

export interface NavigationList {
  TOP: string;
  DETAIL: string;
  CREATE: string;
  EDIT: string;
}

export interface NavigationPath {
  TOP: string;
  DETAIL: string;
  CREATE: string;
  EDIT: string;
}
