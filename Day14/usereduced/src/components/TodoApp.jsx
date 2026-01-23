import { useReducer, useState } from "react";
import TodoList from "./TodoList";

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
          completed: false,
        },
      ];

    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload
          ? { todo, completed: !todo.completed }
          : todo,
      );

    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
}

function TodoApp() {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState("");

  function handleAdd() {
    if (text.trim() === "") return;
    dispatch({ type: "ADD_TODO", payload: text });
    setText("");
  }

  return (
    <>
      <h1>Todo</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <TodoList todos={todos} dispatch={dispatch} />
    </>
  );
}

export default TodoApp;
