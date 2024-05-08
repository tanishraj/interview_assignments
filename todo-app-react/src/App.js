import { useState } from "react";
import "./App.css";

const statusLoop = ["todo", "In Progress", "Completed"];
const statusBg = ["red", "orange", "green"];

function Task(id, title, status = "todo") {
  this.id = id;
  this.title = title;
  this.status = status;
}

function App() {
  const [numberOfTask, setNumberOfTask] = useState(0);
  const [taskList, setTaskList] = useState([]);

  const generateRandomTask = (num = 4) => {
    const randomTasks = new Array(Number(num))
      .fill()
      .map((_, index) => index)
      .map((_item, index) => {
        const randomNumber = Math.floor(Math.random() * 100);
        return new Task(index + 1, `Task ${randomNumber}`);
      });

    return randomTasks;
  };

  const handleCreateTask = () => {
    console.log(numberOfTask);
    setTaskList(generateRandomTask(numberOfTask));
  };

  const taskClickHandler = (taskId) => {
    const updatedTaskList = taskList.map((task) => {
      if (task?.id === taskId) {
        const currentStatusIndex = statusLoop.indexOf(task.status);
        console.log(currentStatusIndex);
        task.status =
          currentStatusIndex >= 2
            ? statusLoop[0]
            : statusLoop[currentStatusIndex + 1];
      }

      return task;
    });

    setTaskList([...updatedTaskList]);
  };

  return (
    <div className="app-container">
      <h1>Todo App</h1>

      <div className="input-container">
        <input
          type="number"
          placeholder="how many task you want to create"
          onChange={(e) => setNumberOfTask(e.target.value)}
        />
        <button onClick={handleCreateTask}>Create Task</button>
      </div>

      <div className="todo-list-container">
        {taskList.length > 0 ? (
          <ul>
            {taskList?.map((task) => (
              <li
                key={task.id}
                onClick={() => {
                  taskClickHandler(task.id);
                }}
                style={{
                  background: statusBg[statusLoop.indexOf(task.status)]
                }}
              >
                <span>{task?.title}</span>
                <span>{task?.status}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No task has been created yet.</p>
        )}
      </div>
    </div>
  );
}

export default App;
