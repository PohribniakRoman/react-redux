import { combineReducers } from "redux";
import {cash} from "./cash"
import {customer} from "./customers";

export const combinedReducer = combineReducers({
        cash:cash,
        customer:customer
    })
