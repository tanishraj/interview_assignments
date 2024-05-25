import { takeLatest, put, call } from "redux-saga/effects";
import {
  fetchTodo,
  fetchTodosSuccessAction,
  fetchTodosFailureAction,
  deleteTodoSuccessAction,
  deleteTodoFailureAction,
  deleteTodoRequest,
  addTodoFailureAction,
  addTodoSuccessAction,
  addTodoRequest
} from "../slices/todoSlice";

function fetchTodoList() {
  return fetch("https://dummyjson.com/todos")
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
}

function deleteTodoItem(id) {
  return fetch(`https://dummyjson.com/todos/${id}`, {
    method: "DELETE"
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
}

function addTodoItem(newTodo) {
  console.log("INPUT TODO", newTodo);
  return fetch("https://dummyjson.com/todos/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newTodo)
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
}

function* fetchTodosSaga() {
  yield put(fetchTodo());
  try {
    const todosData = yield call(fetchTodoList);
    yield put(fetchTodosSuccessAction(todosData.todos));
  } catch (error) {
    yield put(fetchTodosFailureAction(error.message));
  }
}

export function* watchFetchTodosSaga() {
  yield takeLatest("FETCH_TODOS", fetchTodosSaga);
}

function* addTodoSaga({ payload: newTodo }) {
  try {
    const newTodoItem = yield call(addTodoItem, newTodo);
    console.log("NEW RESPONSE TODO", newTodoItem);
    yield put(addTodoSuccessAction(newTodoItem));
  } catch (error) {
    yield put(addTodoFailureAction(error.message));
  }
}

export function* watchAddTodoSaga() {
  yield takeLatest(addTodoRequest.type, addTodoSaga);
}

function* deleteTodoSaga({ payload: id }) {
  try {
    const deletedItem = yield call(deleteTodoItem, id);
    yield put(deleteTodoSuccessAction(deletedItem));
  } catch (error) {
    yield put(deleteTodoFailureAction(error.message));
  }
}

export function* watchDeleteTodoSaga() {
  yield takeLatest(deleteTodoRequest.type, deleteTodoSaga);
}
