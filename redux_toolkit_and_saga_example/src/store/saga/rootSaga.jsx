import { all, fork } from "redux-saga/effects";
import { watchGetUser } from "./usersSaga";

const rootSaga = function* () {
  yield all([fork(watchGetUser)]);
};

export default rootSaga;
