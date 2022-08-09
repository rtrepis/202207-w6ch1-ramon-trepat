import { configureStore, createReducer } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import ITask from "../../models/ITask";
import List from "./List";

describe("Give a List component", () => {
  describe("When intanciate inicial State task lenght", () => {
    test("Then should show the equal list items lenght", () => {
      const initialState: ITask[] = [
        {
          id: 1,
          name: "Abrir las devtools",
          isDone: false,
        },
        {
          id: 2,
          name: "Tarea 2",
          isDone: false,
        },
      ];
      const storeTest = configureStore({
        reducer: {
          task: createReducer(initialState, () => {}),
        },
      });

      render(
        <Provider store={storeTest}>
          <List />
        </Provider>
      );
      const ilAll = screen.getAllByRole("listitem");

      expect(ilAll.length).toEqual(initialState.length);
    });
  });
});
