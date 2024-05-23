import { createSlice } from "@reduxjs/toolkit";

const todoInitialState = {
  todo: {
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
      state.todo.isLoading = true;
      state.todo.errors = null;
    },
    fetchTodosSuccessAction: (state, action) => {
      state.todo.data = action.payload;
      state.todo.isLoading = false;
    },
    fetchTodosFailureAction: (state, action) => {
      state.todo.isLoading = false;
      state.todo.errors = action.payload;
    },

    deleteTodoRequest: (state, _action) => {
      state.todo.loading = true;
      state.todo.error = null;
    },
    deleteTodoSuccessAction: (state, action) => {
      const { id } = action.payload;
      state.todo.loading = false;
      state.todo.data = state.todo.data.filter((todo) => todo.id !== id);
    },
    deleteTodoFailureAction: (state, action) => {
      state.todo.loading = false;
      state.todo.error = action.payload;
    }
  }
});

export const {
  fetchTodo,
  fetchTodosSuccessAction,
  fetchTodosFailureAction,
  deleteTodoRequest,
  deleteTodoSuccessAction,
  deleteTodoFailureAction
} = todoSlice.actions;
export default todoSlice.reducer;
