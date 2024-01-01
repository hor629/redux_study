import { combineReducers } from "redux";
// import todoReducer from "./todoReducer";
// import todoReducer from "../ducks/todoDuck"
import todoReducer from "../actions/todoAction"

const rootReducer = combineReducers({
    todo: todoReducer // 키값(todo)를 통해 todo list에 접근
});

export default rootReducer;