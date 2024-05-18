import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { useEffect } from "react";

function App() {
  const { user } = useSelector((state) => {
    return state.users;
  });

  console.log(user);

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

      <div className="user-container">
        <ul>
          {user.data.map((user) => (
            <li
              key={user.id}
              onClick={() => fetchUserById(user.id)}
              className="user"
            >
              {user.firstname}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
