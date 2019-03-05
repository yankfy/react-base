import { combineReducers } from "redux";
import { IState } from "@/store/store";
import { todos } from "./todosReducer";

export const initState: IState = {
  todos: [],
};

export const rootReducer = combineReducers({
  todos,
});
