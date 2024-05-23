import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodoRequest } from "../../store/slices/todoSlice";
import "./Todo.css";

export const Todo = () => {
  const todoList = useSelector((state) => {
    return state.todos.todo;
  });
  const { data, isLoading, errors } = todoList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_TODOS" });
  }, [dispatch]);

  return (
    <div className="wrapper">
      <div className="container">
        <h3>Task List</h3>
        {errors && <p>{errors}</p>}
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul className="task-list">
            {data?.map((todo) => (
              <li key={todo.id} className="task">
                <span>{todo.todo}</span>
                <span className="button-container">
                  <button onClick={() => {}}>Edit</button>
                  <button onClick={() => dispatch(deleteTodoRequest(todo.id))}>
                    Delete
                  </button>
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
