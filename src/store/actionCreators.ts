import { createAction } from "@reduxjs/toolkit";
import ITask from "../models/ITask";

const readLoadTaskActionCreator = createAction<ITask[]>("readLoadTask");

export default readLoadTaskActionCreator;
