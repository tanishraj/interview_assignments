import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: 1,
      text: "Go to the grocery",
      completed: false
    },
    {
      id: 2,
      text: "Do the Laundry",
      completed: false
    },
    {
      id: 3,
      text: "Walk the dog",
      completed: false
    },
    {
      id: 4,
      text: "Do the dishes",
      completed: false
    }
  ]
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.tasks.push({ id: Date.now(), text: action.payload });
    },

    deleteTodo: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },

    updateStatus: (state, action) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload) {
          task.completed = !task.completed;
        }
        return task;
      });
    }
  }
});

export const { addTodo, deleteTodo, updateStatus } = todoSlice.actions;
export default todoSlice.reducer;
