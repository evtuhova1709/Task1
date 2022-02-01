import { combineReducers, createStore } from "redux";
import resultReducer from "./result-reducer";



let reducers = combineReducers({
    resultPage : resultReducer,
    

})

let store =createStore(reducers);
export default store;