import { configureStore } from "@reduxjs/toolkit";
import todoReducers from "../features/todo/todoSlice.js"

export const store = configureStore({
    reducer : todoReducers
})





















// import {configureStore} from '@reduxjs/toolkit';
// import reducer from '../features/todo/todoSlice';

// export const store = configureStore({
//     reducer: reducer
// })