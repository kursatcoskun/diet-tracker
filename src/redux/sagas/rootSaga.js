import { all } from "redux-saga/effects";
import { dietDaySaga } from "./dietDaySaga";

export default function* rootSaga() {
  yield all([dietDaySaga()]);
}
