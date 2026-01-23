function TodoList({ todos, dispatch }) {
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <p
              onClick={() =>
                dispatch({ type: "TOGGLE_TODO", payload: todo.id })
              }
            >
              {todo.text}
            </p>
            <button
              onClick={() =>
                dispatch({ type: "DELETE_TODO", payload: todo.id })
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
