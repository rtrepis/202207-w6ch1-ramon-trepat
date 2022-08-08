import { createReducer } from "@reduxjs/toolkit";
import ITask from "../models/ITask";

const initialState: ITask[] = [
  {
    id: 0,
    name: "",
    done: false,
  },
];

const taskReducer = createReducer(initialState, (builder) => {
  builder.addDefaultCase((state: ITask[]) => [...state]);
});

export default taskReducer;
