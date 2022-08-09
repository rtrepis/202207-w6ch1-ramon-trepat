import ITask from "../models/ITask";
import taskReducer from "./taskReducer";

describe("Give", () => {
  describe("When", () => {
    test("Then", () => {
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
});
