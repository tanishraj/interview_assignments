import userReducer from "./slices/userSlice";
import todoReducer from "./slices/todoSlice";

const rootReducer = {
  users: userReducer,
  todos: todoReducer
};

export default rootReducer;
