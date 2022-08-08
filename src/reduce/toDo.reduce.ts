import { createReducer } from "@reduxjs/toolkit";
import IToDo from "../models/ItoDo";

const initialState: IToDo[] = [
  {
    id: 0,
    name: "",
    done: false,
  },
];

const toDoReducer = createReducer(initialState, (builder) => {
  builder.addDefaultCase((state: IToDo[]) => [...state]);
});

export default toDoReducer;
