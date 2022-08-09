import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import dataTasks from "../../Data/dataTasks";
import { loadTaskActionCreator } from "../../store/actionCreators";

const List = (): JSX.Element => {
  const listTasks = useSelector((state: RootState) => state.task);

  const dispach = useDispatch();

  useEffect(() => {
    dispach(loadTaskActionCreator(dataTasks));
  }, [dispach]);

  return (
    <ul>
      {listTasks.map((task) => (
        <li key={task.id}>
          <span className="bold">id:</span> {task.id}{" "}
          <span className="bold">name:</span> {task.name}{" "}
          <span className="bold">done:</span> <input type="checkbox" />
        </li>
      ))}
    </ul>
  );
};
export default List;
