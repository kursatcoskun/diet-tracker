import * as types from "../actions/actionTypes";

export default function layoutReducer(state = [], action) {
  switch (action.type) {
    case types.SHOW_DRAWER_MENU:
      return action.drawerIsOpen;
    case types.HIDE_DRAWER_MENU:
      return action.drawerIsOpen;
    default:
      return state;
  }
}
