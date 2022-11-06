import React from "react";
import classes from "./Todo.module.css";

const Todo = ({
  todos,
  dateHandler,
  deleteTodo,
  editInputHandler,
  radioButton,
}) => {
  const todosList = todos.map((todo) => (
    <div key={todo.id}>
      {radioButton ? (
        <input type="radio" onClick={() => deleteTodo(todo)} />
      ) : (
        <input type="radio" disabled="true" />
      )}
      <input
        className={classes.list}
        type=""
        value={todo.todo}
        onChange={(event) => editInputHandler(event, todo.id)}
      />
      <input
        className={classes["date-list"]}
        type="text"
        value={todo.date.toString()}
        onChange={(event) => dateHandler(todo.date)}
      />
      {/* <button onClick={() => deleteTodo(todo)}>Delete</button> */}
    </div>
  ));

  return <div>{todosList}</div>;
};

export default Todo;
