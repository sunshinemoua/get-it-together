import { React, useState } from "react";
import Todo from "./Todo";

const TodoList = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addInput = (event) => {
    setInput(event.target.value);
  };

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };

  const deleteTodo = (t) => {
    const filteredTodo = todos.filter((todo) => todo !== t);
    setTodos(filteredTodo);
  };

  return (
    <div>
      <label>Things to do:</label>
      <input type="text" value={input} onChange={addInput} />
      <button type="submit" onClick={addTodo}>
        Add
      </button>
      <Todo todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};
export default TodoList;
