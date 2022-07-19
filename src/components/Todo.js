const Todo = ({ todos, deleteTodo }) => {
  const listedTodos = todos.map((todo) => (
    <div key={Math.random()}>
      <li>
        {todo}
        <button type="button" onClick={() => deleteTodo(todo)}>
          Delete
        </button>
      </li>
    </div>
  ));

  return (
    <div>
      <ul> {listedTodos}</ul>
    </div>
  );
};

export default Todo;
