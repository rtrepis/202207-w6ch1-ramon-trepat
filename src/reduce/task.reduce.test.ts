import { UnknownAction } from "../models/actions";
import ITask from "../models/ITask";
import taskReducer from "./toDo.reduce";

describe("Give", () => {
  describe("When", () => {
    test("Then", () => {
      const unknownActionTest: UnknownAction = { type: "nose" };
      const inicialArray: ITask[] = [
        {
          id: 1,
          name: "Abrir las deptools",
          done: false,
        },
        {
          id: 2,
          name: "Tarea 2",
          done: false,
        },
      ];

      const expectedListTasks = taskReducer(inicialArray, unknownActionTest);

      expect(expectedListTasks).toStrictEqual(inicialArray);
    });
  });
});
