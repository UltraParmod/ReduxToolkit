import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slice/todo";

export default store = configureStore({
    reducer: {
        todo: todoReducer
    }
})