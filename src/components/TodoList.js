import { React, useState } from "react";
import Todo from "./Todo";
import classes from "./TodoList.module.css";

const TodoList = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [date, setDate] = useState("");

  const inputHandler = (event) => {
    setInput(event.target.value);
  };

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, { input, date }]);
    setInput("");
    setDate("");
  };

  const deleteTodo = (td) => {
    const filteredTodos = todos.filter((todo) => todo !== td);
    setTodos(filteredTodos);
  };

  const dateHandler = (event) => {
    let date = event.target.value;
    setDate(date);
  };

  return (
    <div className={classes["todo-label"]}>
      <h1 className={classes.header}> Todo List</h1>

      <label className={classes.label}>
        <input
          className={classes["input-box"]}
          type="text"
          placeholder="Create a new todo..."
          value={input}
          onChange={inputHandler}
        />
      </label>
      <label className={classes["due-date"]}>
        Due Date:
        <input
          className={classes["due-date-box"]}
          type="date"
          placeholder="Date"
          min="2019-01-01"
          max="2021-31-12"
          value={date}
          onChange={dateHandler}
        />
        <button
          className={classes["button-add"]}
          type="submit"
          onClick={addTodo}
        >
          Add
        </button>{" "}
      </label>
      <Todo todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};
export default TodoList;
