import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import dataTasks from "../../../../Data/dataTasks";
import ITask from "../../models/ITask";
import {
  createTaskActionCreator,
  loadTaskActionCreator,
} from "../../reducer/actionCreators";

const newTask: ITask = { id: 2, name: "taska nova", isDone: true };

const List = (): JSX.Element => {
  const listTasks = useSelector((state: RootState) => state.task);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTaskActionCreator(dataTasks));
  }, [dispatch]);

  const handleAdd = () => {
    dispatch(createTaskActionCreator(newTask));
  };
  const handleModiy = () => {};
  const handleDelete = () => {};

  return (
    <>
      <ul>
        {listTasks.map((task) => (
          <li key={task.id}>
            <span className="bold">id:</span> {task.id}{" "}
            <span className="bold">name:</span> {task.name}{" "}
            <span className="bold">done:</span> <input type="checkbox" />
          </li>
        ))}
      </ul>
      <div>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleModiy}>Modify</button>
        <button onClick={handleDelete}>Add</button>
      </div>
    </>
  );
};
export default List;
