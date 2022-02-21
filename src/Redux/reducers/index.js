import { combineReducers } from "redux";
import taskReducer from "./TodoReducer";

const rootReducer = combineReducers({ taskReducer });
export default rootReducer;
