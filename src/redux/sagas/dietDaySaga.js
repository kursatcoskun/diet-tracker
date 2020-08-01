import {all, takeLatest, put} from 'redux-saga/effects';
import * as types from "../actions/actionTypes";

function* getDietDays() {
    const json = yield fetch('http://localhost:8000/api/dietday/getAll')
        .then(response => response.json(),);
    yield put({type: types.GET_DIET_DAYS_SUCCESS, json: json.data,});
}

export function* dietDaySaga() {
    yield all([takeLatest(types.GET_DIET_DAYS, getDietDays)]);
}
