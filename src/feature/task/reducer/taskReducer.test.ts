import ITask from "../models/ITask";
import taskReducer from "./taskReducer";
import {
  deleteTaskActionCreator,
  loadTaskActionCreator,
} from "./actionCreators";

describe("Give a reducer", () => {
  describe("When a have inicial state", () => {
    test("Then a instanciated with a unknow action", () => {
      const unknownActionTest = { type: "nose" };
      const previewState: ITask[] = [
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

      const expectedListTasks = taskReducer(previewState, unknownActionTest);

      expect(expectedListTasks).toStrictEqual(previewState);
    });
  });

  describe("When instanciate load action with new state", () => {
    test("Then new state to be a new task", () => {
      const previeousTasks: ITask[] = [];
      const newTask: ITask[] = [
        { id: 1, name: "Abrir las deptools", isDone: false },
      ];
      const action = loadTaskActionCreator(newTask);

      const newState = taskReducer(previeousTasks, action);

      expect(newState).toStrictEqual(newTask);
    });
  });

  describe("When instanciate delete action with task id", () => {
    test("Then new state no to be delete task", () => {
      const previeousTask: ITask[] = [
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
      const action = deleteTaskActionCreator(1);

      const newState = taskReducer(previeousTask, action);

      expect(newState.length).toBe(previeousTask.length - 1);
    });
  });
});
