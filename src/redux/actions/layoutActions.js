import * as types from "./actionTypes";

export function DrawerHideOpen(drawerIsOpen) {
    return {type: types.DRAWER_OPEN_HIDE, drawerIsOpen};
}
