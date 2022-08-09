import ITask from "../models/ITask";
import taskReducer from "./taskReducer";
import {
  createTaskActionCreator,
  deleteTaskActionCreator,
  loadTaskActionCreator,
  updateTaskActionCreator,
} from "./actionCreators";

describe("Give a reducer", () => {
  const previeousTasks: ITask[] = [];
  describe("When a have inicial state", () => {
    test("Then a instanciated with a unknow action", () => {
      const unknownActionTest = { type: "nose" };

      const expectedListTasks = taskReducer(previeousTasks, unknownActionTest);

      expect(expectedListTasks).toStrictEqual(previeousTasks);
    });
  });

  describe("When instanciate load action with new state", () => {
    test("Then new state to be a new task", () => {
      const newTask: ITask[] = [
        { id: 1, name: "Abrir las deptools", isDone: false },
      ];
      const action = loadTaskActionCreator(newTask);

      const newState = taskReducer(previeousTasks, action);

      expect(newState).toStrictEqual(newTask);
    });
  });

  describe("When instanciate add action with task id", () => {
    test("Then new state to be new task", () => {
      const addTask: ITask = {
        id: 1,
        name: "Abrir las deptools",
        isDone: false,
      };
      const action = createTaskActionCreator(addTask);

      const newState = taskReducer(previeousTasks, action);

      expect(newState.length).toBe(previeousTasks.length + 1);
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

  describe("When instanciate update action with modify task", () => {
    test("Then new state to be this modify task", () => {
      const previeousTask: ITask[] = [
        {
          id: 1,
          name: "Abrir las devtools",
          isDone: false,
        },
      ];
      const modifyTask: Partial<ITask> = {
        id: 1,
        isDone: true,
      };

      const action = updateTaskActionCreator(modifyTask);

      const newState = taskReducer(previeousTask, action);

      expect(newState).not.toEqual(previeousTask);
    });
  });
});
