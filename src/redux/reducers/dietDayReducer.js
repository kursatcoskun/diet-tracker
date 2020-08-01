import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function dietDayReducer(state = initialState.dietDay, action) {
    switch (action.type) {
        case types.GET_DIET_DAYS:
            return {...state, loading: true};
        case types.GET_DIET_DAYS:
            return {...state, news: action.json[0], loading: false}
        default:
            return state;
    }
}
