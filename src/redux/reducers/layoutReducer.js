import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function layoutReducer(state = initialState.layout, action) {
    switch (action.type) {
        case types.DRAWER_OPEN_HIDE:
            return {...state, drawerIsOpen: action.drawerIsOpen};
        default:
            return state;
    }
}
