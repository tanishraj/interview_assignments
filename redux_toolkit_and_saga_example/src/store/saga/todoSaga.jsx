import { takeLatest, put, call } from "redux-saga/effects";
import {
  fetchTodo,
  fetchTodosSuccessAction,
  fetchTodosFailureAction
} from "../slices/todoSlice";

function fetchTodoList() {
  return fetch("https://dummyjson.com/todos")
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
}

function* fetchTodosSaga() {
  yield put(fetchTodo());
  try {
    const todos = yield call(fetchTodoList);
    yield put(fetchTodosSuccessAction({ todos }));
  } catch (error) {
    yield put(fetchTodosFailureAction({ error }));
  }
}

export function* watchFetchTodosSaga() {
  yield takeLatest("FETCH_TODOS", fetchTodosSaga);
}
