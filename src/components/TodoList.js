import React, { useEffect, useState } from "react";
import Datepicker from "react-datepicker";
import moment from "moment";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";

import Todo from "./Todo";
const TodoList = () => {
  const [userInput, setUserInput] = useState("");
  const [todos, setTodos] = useState([]);
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
    setUserInput("");
    console.log(todos);
  };

  const deleteTodo = (td) => {
    const filteredTodos = todos.filter((todo) => todo !== td);
    setTodos(filteredTodos);
    localStorage.setItem("todos", JSON.stringify(filteredTodos));
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
      <h1> Todo List </h1>{" "}
      <label>
        <input
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
          placeholderText="Cleared!"
        />
        <button type="submit" onClick={addTodo} disabled={userInput.length < 1}>
          Add
        </button>
        <button onClick={deleteAllTodo}> DELETE ALL TODOS</button>
      </h4>
      <Todo todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default TodoList;
