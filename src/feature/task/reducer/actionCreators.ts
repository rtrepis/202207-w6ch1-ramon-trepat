import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "./actionTypes";
import ITask from "../models/ITask";

export const loadTaskActionCreator = createAction<ITask[]>(
  actionTypes.taskLoad
);

export const createTaskActionCreator = createAction<ITask>(
  actionTypes.taskCreate
);

export const updateTaskActionCreator = createAction<Partial<ITask>>(
  actionTypes.taskUpdate
);

export const deleteTaskActionCreator = createAction<ITask["id"]>(
  actionTypes.taskDelete
);
