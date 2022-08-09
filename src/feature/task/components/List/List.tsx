import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import dataTasks from "../../../../Data/dataTasks";
import ITask from "../../models/ITask";
import {
  createTaskActionCreator,
  deleteTaskActionCreator,
  loadTaskActionCreator,
} from "../../reducer/actionCreators";
import { ListStyled } from "./ListStyled";

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

  const handleDelete = (id: number) => {
    return dispatch(deleteTaskActionCreator(id));
  };
  return (
    <>
      <ListStyled>
        {listTasks.map((task) => (
          <div key={task.id} className="item">
            <div className="item-task">
              <div className="item-task__id">{task.id}</div>
              <div className="item-task__check">
                <input type="checkbox" className="item-task__chec" />
              </div>
              <div className="item__name">{task.name}</div>
            </div>
            <div className="item-actions">
              <button onClick={() => handleDelete(task.id)}>Delete</button>
            </div>
          </div>
        ))}
      </ListStyled>
    </>
  );
};
export default List;
