import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import toDoReducer from "../reduce/toDo.reduce";

export const store = configureStore({
  reducer: {
    toDo: toDoReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
