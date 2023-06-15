
import { createStore } from "redux";
import { adduser } from "./Reducer";
import { composeWithDevTools } from "redux-devtools-extension";
export const userlist ={
    users:[]
}
export const store = createStore(adduser,userlist ,composeWithDevTools())