import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, updateStatus } from "./store/slices/todoSlice";
import "./App.css";

function App() {
  const { tasks } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (e.target.add.value) {
      dispatch(addTodo(e.target.add.value));
      e.target.add.value = "";
    }
  };

  return (
    <div className="container">
      <header className="text-center text-light my-4">
        <h1 className="mb-4">Todo List</h1>
        <form className="search">
          <input
            className="form-control m-auto"
            type="text"
            name="search"
            placeholder="search todos"
          />
        </form>
      </header>

      <ul className="list-group todos mx-auto text-light delete">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
            style={{ textDecoration: task.completed && "line-through" }}
            onClick={() => dispatch(updateStatus(task.id))}
          >
            <span>{task.text}</span>
            <i
              className="far fa-trash-alt delete"
              onClick={() => dispatch(deleteTodo(task.id))}
            ></i>
          </li>
        ))}
      </ul>

      <form className="add text-center my-4" onSubmit={submitHandler}>
        <label className="text-light">Add a new todo...</label>
        <input className="form-control m-auto" type="text" name="add" />
        <br />
        <div className="text-center">
          <input type="submit" className="btn btn-light" />
        </div>
      </form>
    </div>
  );
}

export default App;
