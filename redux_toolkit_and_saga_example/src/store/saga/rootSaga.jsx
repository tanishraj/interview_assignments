import { all, fork } from "redux-saga/effects";
import { watchGetUser } from "./usersSaga";
import { watchDeleteTodoSaga, watchFetchTodosSaga } from "./todoSaga";

const rootSaga = function* () {
  yield all([
    fork(watchGetUser),
    fork(watchFetchTodosSaga),
    fork(watchDeleteTodoSaga)
  ]);
};

export default rootSaga;
