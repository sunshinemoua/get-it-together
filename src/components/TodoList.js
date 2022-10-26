import React, { useEffect, useState } from "react";
import Datepicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import classes from "./TodoList.module.css";
import Todo from "./Todo";
import CompletedTodos from "./CompletedTodos";

const TodoList = () => {
  const [userInput, setUserInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const getTodos = localStorage.getItem("todos");
    if (getTodos !== null) setTodos(JSON.parse(getTodos));
  }, []);

  const inputHandler = (event) => {
    setUserInput(event.target.value);
  };

  const addTodo = (event) => {
    event.preventDefault();
    const todoItem = {
      id: Math.random(),
      todo: userInput,
      date: moment(date).format(" dddd, MMMM Do YYYY, h:mm a"),
    };
    setTodos([...todos, todoItem]);

    localStorage.setItem("todos", JSON.stringify([...todos, todoItem]));
    localStorage.setItem(
      "completed",
      JSON.stringify([...completedTodos, todoItem])
    );
    setUserInput("");
    console.log(todos);
  };

  const deleteTodo = (td) => {
    const filterIncompletedTodos = todos.filter((todo) => todo !== td);
    setTodos(filterIncompletedTodos);
    localStorage.setItem("todos", JSON.stringify(filterIncompletedTodos));

    const filterCompletedTodos = todos.filter((todo) => todo == td);
    setCompletedTodos(filterCompletedTodos);
    localStorage.setItem("completed", JSON.stringify(filterCompletedTodos));
  };
  const deleteAllTodo = () => {
    setTodos([]);
    localStorage.removeItem("todos");
  };

  const dateHandler = (date) => {
    setDate(date);
    console.log(date);
  };

  return (
    <div>
      <div className={classes.homepage}>
        <h2>
          Get It
          <b> Together </b>
        </h2>
        <label>
          <input
            className={classes["input-box"]}
            type="text"
            placeholder="Create a new to do item..."
            onChange={inputHandler}
            value={userInput}
          />
        </label>
        <h4>
          Due Date
          <Datepicker
            selected={date}
            onChange={dateHandler}
            name="date"
            timeInputLabel="Time:"
            dateFormat="MMMM d, yyyy h:mm aa"
            showTimeInput
          />
          <button
            type="submit"
            onClick={addTodo}
            disabled={userInput.length < 1}
          >
            Add
          </button>
          <button onClick={deleteAllTodo}> Clear</button>
        </h4>
        <Todo todos={todos} deleteTodo={deleteTodo} />
      </div>
      <div>
        <h2>Completed Todos</h2>
        {/* <CompletedTodos todos={todos} completedTodos={completedTodos} /> */}
      </div>
    </div>
  );
};

export default TodoList;
