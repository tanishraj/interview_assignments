import { takeLatest, put, call } from "redux-saga/effects";
import {
  fetchTodo,
  fetchTodosSuccessAction,
  fetchTodosFailureAction,
  deleteTodoSuccessAction,
  deleteTodoFailureAction,
  deleteTodoRequest
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
