import classes from "./Todo.module.css";
import moment from "moment";

const Todo = (props) => {
  const todosList = props.todos.map((todo) => (
    <div key={Math.random()} className={classes.items}>
      <ul>
        <li className={classes.todo}>
          {todo.input} {moment(todo.date).format("MM/DD/YYYY")}
          <button
            className={classes["button-delete"]}
            type="button"
            onClick={() => props.deleteTodo(todo)}
          >
            Delete
          </button>
        </li>
      </ul>
    </div>
  ));

  return <div>{todosList}</div>;
};
export default Todo;
