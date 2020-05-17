import * as types from "./actionTypes";

export function showDrawerMenu(drawerIsOpen) {
  return { type: types.SHOW_DRAWER_MENU, drawerIsOpen };
}

export function hideDrawerMenu(drawerIsOpen) {
    return { type: types.HIDE_DRAWER_MENU, drawerIsOpen };
}