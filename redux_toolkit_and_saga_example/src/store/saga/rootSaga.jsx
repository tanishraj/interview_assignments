import { all, fork } from "redux-saga/effects";
import { watchGetUser } from "./usersSaga";
import { watchFetchTodosSaga } from "./todoSaga";

const rootSaga = function* () {
  yield all([fork(watchGetUser), fork(watchFetchTodosSaga)]);
};

export default rootSaga;
