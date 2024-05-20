import { createSlice } from "@reduxjs/toolkit";

const todoInitialState = {
  todos: {
    data: [],
    isLoading: false,
    errors: null
  }
};

const todoSlice = createSlice({
  name: "todo",
  initialState: todoInitialState,
  reducers: {
    fetchTodo: (state) => {
      state.todos.isLoading = true;
      state.todos.errors = null;
    },
    fetchTodosSuccessAction: (state, action) => {
      state.todos.data = action.payload.todos;
      state.todos.isLoading = false;
    },
    fetchTodosFailureAction: (state, action) => {
      state.todos.isLoading = false;
      state.todos.errors = action.payload.error;
    }
  }
});

export const { fetchTodo, fetchTodosSuccessAction, fetchTodosFailureAction } =
  todoSlice.actions;
export default todoSlice.reducer;
