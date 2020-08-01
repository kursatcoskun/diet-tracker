import * as types from "./actionTypes";

export function getDietDays() {
    return {type: types.GET_DIET_DAYS};
}

export function getDietDaysSuccess() {
    return {type: types.GET_DIET_DAYS_SUCCESS};
}
