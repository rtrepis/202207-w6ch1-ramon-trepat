import { UnknownAction } from "../models/actions";
import IToDo from "../models/ItoDo";
import toDoReducer from "./toDo.reduce";

describe("Give", () => {
  describe("When", () => {
    test("Then", () => {
      const unknownActionTest: UnknownAction = { type: "nose" };
      const inicialArray: IToDo[] = [
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

      const expectedListToDo = toDoReducer(inicialArray, unknownActionTest);

      expect(expectedListToDo).toStrictEqual(inicialArray);
    });
  });
});
