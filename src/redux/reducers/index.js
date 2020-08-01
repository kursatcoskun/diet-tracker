import {combineReducers} from "redux";
import layout from './layoutReducer';
import dietDay from './dietDayReducer';

const rootReducer = combineReducers({
    layout,
    dietDay
})

export default rootReducer;
