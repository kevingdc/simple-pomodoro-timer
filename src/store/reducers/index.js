import { combineReducers } from "redux";
import timerReducer from "./timerReducer";

const rootReducer = combineReducers({ sample: timerReducer });

export default rootReducer;
