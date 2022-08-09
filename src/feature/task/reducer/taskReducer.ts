import { createReducer } from "@reduxjs/toolkit";
import ITask from "../models/ITask";
import {
  createTaskActionCreator,
  deleteTaskActionCreator,
  loadTaskActionCreator,
  updateTaskActionCreator,
} from "./actionCreators";

const initialState: ITask[] = [
  {
    id: 0,
    name: "",
    isDone: false,
  },
];

const taskReducer = createReducer(initialState, (builder) => {
  builder.addCase(updateTaskActionCreator, (state, action) =>
    state.map(
      (item) =>
        item.id !== action.payload.id ? item : { ...item, ...action.payload } // devuelveme items ? como son : i el = id modificarme las propiedades que hayan cambiado
    )
  );

  builder.addCase(deleteTaskActionCreator, (state, action) =>
    state.filter((item) => item.id !== action.payload)
  ); //borrame esta id

  builder.addCase(createTaskActionCreator, (state, action) => [
    ...state,
    action.payload,
  ]);

  builder.addCase(loadTaskActionCreator, (_state, action) => action.payload);

  builder.addDefaultCase((state: ITask[]) => [...state]);
});

export default taskReducer;
