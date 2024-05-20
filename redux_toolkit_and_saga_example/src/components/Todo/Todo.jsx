import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Todo.css";

export const Todo = () => {
  const todoList = useSelector((state) => {
    return state.todos;
  });
  const { data, isLoading, errors } = todoList?.todos;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_TODOS" });
  }, []);

  console.log("TODOS RESULT", todoList);

  return (
    <div className="wrapper">
      <div className="container">
        <h4>Task List</h4>
        {errors && <p>{errors}</p>}
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul className="task-list">
            {data?.todos?.map((todo) => (
              <li key={todo.id} className="task">
                {todo.todo}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
