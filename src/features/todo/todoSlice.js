import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodos: (state, action) => {
      state.todos = Array.isArray(action.payload) ? action.payload : [];
    },
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const targetTodo = state.todos.find(
        (todo) => todo.id === action.payload.id,
      );

      if (targetTodo) {
        targetTodo.text = action.payload.text;
      }
    },
  },
});

export const { setTodos, addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
