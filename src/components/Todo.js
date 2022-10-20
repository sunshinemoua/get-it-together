import React from "react";

const Todo = ({ todos, deleteTodo }) => {
  const todosList = todos.map((todo) => (
    <div key={Math.random()} onClick={() => deleteTodo(todo)}>
      <ul>
        <li>
          {todo.todo}
          {todo.date.toString()}
        </li>
      </ul>
    </div>
  ));

  return <div>{todosList}</div>;
};

export default Todo;
