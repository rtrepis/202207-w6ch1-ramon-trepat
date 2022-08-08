import dataTasks from "../../Data/dataTasks";

const List = (): JSX.Element => {
  return (
    <ul>
      {dataTasks.map((task) => (
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
