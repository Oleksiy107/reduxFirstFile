import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { validateNumber, validateString } from "./valideted";

function TodoApp() {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);

  const [inputText1, setInputText1] = useState("");
  const [inputText2, setInputText2] = useState("");

  const addTodo = () => {
    if (inputText1.trim() !== "" && inputText2.trim() !== "") {
      dispatch({
        type: "ADD_TODO",
        payload: {
          text1: inputText1,
          text2: inputText2,
          checked: false,
          id: Date.now(),
        },
      });
      setInputText1("");
      setInputText2("");
    }
  };

  const deleteTodo = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  const handleText1Update = (id, newText1) => {
    dispatch({ type: "UPDATE_TEXT1", payload: { id, newText1 } });
  };
  const handleText2Update = (id, newText2) => {
    dispatch({ type: "UPDATE_TEXT2", payload: { id, newText2 } });
  };
  const handleText1Clear = (id) => {
    dispatch({ type: "CLEAR_TEXT1", payload: { id } });
  };
  const handleText2Clear = (id) => {
    dispatch({ type: "CLEAR_TEXT2", payload: { id } });
  };

  return (
    <div className="todo-app">
      <h1>Todo List</h1>

      <div className="input-container">
        <input
          type="text"
          placeholder="Add a name"
          value={inputText1}
          onKeyPress={(e) => validateString(e)}
          onChange={(e) => setInputText1(e.target.value)}
        />

        <input
          type="number"
          placeholder="Add a number"
          value={inputText2}
          min={0}
          onKeyPress={(e) => validateNumber(e)}
          onChange={(e) => setInputText2(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="text"
              value={todo.text1}
              onKeyPress={(e) => validateString(e)}
              onChange={(e) => handleText1Update(todo.id, e.target.value)}
            />
            <input
              type="text"
              value={todo.text2}
              onKeyPress={(e) => validateNumber(e)}
              onChange={(e) => handleText2Update(todo.id, e.target.value)}
            />
            <div>
              <button onClick={() => handleText1Clear(todo.id)}>
                Clear Name
              </button>
              <button onClick={() => handleText2Clear(todo.id)}>
                Clear Number
              </button>
            </div>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <span className={todo.checked ? "completed" : ""}>{todo.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
