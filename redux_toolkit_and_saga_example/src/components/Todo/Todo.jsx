import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodoRequest,
  deleteTodoRequest
} from "../../store/slices/todoSlice";
import "./Todo.css";

class TodoItem {
  constructor(title) {
    this.todo = title;
    this.completed = false;
    this.userId = Math.floor(Math.random() * 100);
  }
}

export const Todo = () => {
  const [todo, setTodo] = useState({});
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
        <div className="add-task-container">
          <h3>Add Task</h3>
          <label className="input-label">
            <input type="text" onChange={(e) => setTodo(e.target.value)} />
            <button
              onClick={() =>
                dispatch(addTodoRequest({ ...new TodoItem(todo) }))
              }
            >
              Add
            </button>
          </label>
        </div>
        <div className="task-list-container">
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
                    <button
                      onClick={() => dispatch(deleteTodoRequest(todo.id))}
                    >
                      Delete
                    </button>
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
