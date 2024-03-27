import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const TodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    setCheck: (state, action) => {
      state.todoList.map((todo) => {
        if (action.payload === todo.id) {
          todo.done ? (todo.done = false) : (todo.done = true);
        }
      });
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { saveTodo, setCheck, deleteTodo } = TodoSlice.actions;
export const selectTodoList = (state) => state.todos.todoList;
export default TodoSlice.reducer;
