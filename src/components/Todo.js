import React from "react";
import classes from "./Todo.module.css";

const Todo = ({ todos, dateHandler, deleteTodo, editInputHandler }) => {
  const todosList = todos.map((todo) => (
    <div key={todo.id}>
      <input
        className={classes.list}
        type="text"
        value={todo.todo}
        onChange={(event) => editInputHandler(event, todo.id)}
      />
      <input
        className={classes.list}
        type="text"
        value={todo.date.toString()}
        onChange={(event) => dateHandler(todo.date)}
      />
      <button onClick={() => deleteTodo(todo)}>Delete</button>
    </div>
  ));

  return <div>{todosList}</div>;
};

export default Todo;

// <ul>
// <li>
//   {todo.todo}
//   {todo.date.toString()}
// </li>
// </ul>
//onChange={(event) => editInputHandler(event, todo.id)}
