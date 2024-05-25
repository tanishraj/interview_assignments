import { all, fork } from "redux-saga/effects";
import { watchGetUser } from "./usersSaga";
import {
  watchAddTodoSaga,
  watchDeleteTodoSaga,
  watchFetchTodosSaga
} from "./todoSaga";

const rootSaga = function* () {
  yield all([
    fork(watchGetUser),
    fork(watchFetchTodosSaga),
    fork(watchDeleteTodoSaga),
    fork(watchAddTodoSaga)
  ]);
};

export default rootSaga;
