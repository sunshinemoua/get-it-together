import React, { useEffect, useState } from "react";
import Datepicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import classes from "./TodoList.module.css";
import Todo from "./Todo";

const TodoList = () => {
  const [userInput, setUserInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const getTodos = localStorage.getItem("todos");
    if (getTodos !== null) setTodos(JSON.parse(getTodos));

    const getCompletedTodos = localStorage.getItem("completed");
    if (getCompletedTodos !== null)
      setCompletedTodos(JSON.parse(getCompletedTodos));
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
    const filterCompletedTodos = [...completedTodos, td];
    setCompletedTodos(filterCompletedTodos);
    localStorage.setItem("completed", JSON.stringify(filterCompletedTodos));

    const filterIncompletedTodos = todos.filter((todo) => todo !== td);
    setTodos(filterIncompletedTodos);
    localStorage.setItem("todos", JSON.stringify(filterIncompletedTodos));
  };
  const deleteAllTodo = () => {
    setTodos([]);
    localStorage.removeItem("todos");
  };

  const deleteAllCompleteTodos = () => {
    setCompletedTodos([]);
    localStorage.removeItem("completed");
  };

  const editInputHandler = (event, id) => {
    const todosCopy = [...todos];
    const findTodoIndex = todosCopy.findIndex((td) => td.id === id);
    console.log(findTodoIndex);

    if (todosCopy[findTodoIndex] !== null) {
      todosCopy[findTodoIndex].todo = event.target.value;
      setTodos(todosCopy);
      console.log(todos);
    }
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
        <Todo
          todos={todos}
          deleteTodo={deleteTodo}
          editInputHandler={editInputHandler}
        />
      </div>
      <h1>
        Completed Todos
        <button onClick={deleteAllCompleteTodos}> Clear Completed Todos</button>
      </h1>
      <Todo
        todos={completedTodos}
        deleteTodo={() => null}
        editInputHandler={() => null}
      />
    </div>
  );
};

export default TodoList;
