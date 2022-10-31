import React from "react";

const Todo = ({ todos, deleteTodo, editInputHandler }) => {
  const todosList = todos.map((todo) => (
    <div key={Math.random()}>
      <form>
        <input
          type="text"
          value={todo.todo}
          onChange={(event) => editInputHandler(event, todo.id)}
        />
        <input
          type="text"
          value={todo.date.toString()}
          onChange={(event) => editInputHandler(event, todo.id)}
        />
        <button onClick={() => deleteTodo(todo)}>Delete</button>
      </form>
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
