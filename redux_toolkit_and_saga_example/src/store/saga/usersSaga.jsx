import { put, takeLatest } from "redux-saga/effects";
import {
  getUserSuccessAction,
  getUserFailureAction
} from "../slices/userSlice";

function* getUserSaga({ payload: id }) {
  console.log("EXECUTING...");
  try {
    const response = yield fetch(`https://jsonplaceholder.org/users`);
    const user = yield response.json();
    console.log("USER IN SAGA", user);
    yield put(getUserSuccessAction({ user }));
  } catch (error) {
    yield put(getUserFailureAction({ error }));
  }
}

export function* watchGetUser() {
  console.log("WATCHING...");
  yield takeLatest("GET_USER_BY_ID", getUserSaga);
}
