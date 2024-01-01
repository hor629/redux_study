import { combineReducers } from "redux";
import todoReducer from "./todoReducer";

const rootReducer = combineReducers({
    todo: todoReducer // 키값(todo)를 통해 todo list에 접근
});

export default rootReducer;