import { createSlice } from "@reduxjs/toolkit";

const usersInitialState = {
  user: {
    data: [
      {
        id: 1,
        name: "John Doe",
        email: "j@j.com",
        password: "password"
      },
      {
        id: 2,
        name: "Jane Doe",
        email: "j@j.com",
        password: "password"
      }
    ],
    isLoading: false,
    errors: ""
  }
};

const userSlice = createSlice({
  name: "users",
  initialState: usersInitialState,
  reducers: {
    getUserAction: (state, action) => {
      state.user.isLoading = true;
      state.user.errors = "";
    },
    getUserSuccessAction: (state, action) => {
      state.user.isLoading = false;
      state.user.data = action.payload.user;
    },
    getUserFailureAction: (state, action) => {
      state.user.isLoading = false;
      state.user.errors = action.payload.error;
    }
  }
});

export const { getUserAction, getUserSuccessAction, getUserFailureAction } =
  userSlice.actions;
export default userSlice.reducer;
