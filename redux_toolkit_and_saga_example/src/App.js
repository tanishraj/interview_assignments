import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import { Todo } from "./components/Todo/Todo";

function App() {
  const { user } = useSelector((state) => {
    return state.users;
  });

  const dispatch = useDispatch();

  const fetchUserById = (userId) => {
    dispatch({ type: "GET_USER_BY_ID", payload: userId });
  };

  useEffect(() => {
    fetchUserById();
  }, []);

  return (
    <div className="App">
      <h1>@reduxjs/toolkit + Redux Saga</h1>
      <Todo />

      {/* <div className="user-container">
        <ul>
          {user.data.map((user) => (
            <li key={user.id} className="user">
              {user.firstname}
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
}

export default App;
