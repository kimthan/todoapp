import React, { useState, useRef, useEffect } from "react";
import AllButtons from "./AllButtons";

function Todo({ todoItem, id, todos, setTodos, setIsDone, addTodo }) {
  const [editTodoItem, setEditTodoItem] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [todo, setTodo] = useState("");

  const inputRef = useRef(null);
  function handleTodoInput(e) {
    setTodo(e.target.value);
  }

  useEffect(() => {
    if (isEdit) {
      inputRef.current.focus();
    }
  }, [isEdit]);

  return (
    <li
      className={`${
        isEdit ? "bg-green-100" : "bg-gray-100"
      } drop-shadow-md m-1 flex justify-between`}
    >
      <label
        className={`self-center ml-[10px] text-gray-800 ${
          editTodoItem.isCompleted ? "line-through" : ""
        }`}
      >
        {isEdit ? (
          <input ref={inputRef} value={todo} onChange={handleTodoInput} />
        ) : (
          todoItem
        )}
      </label>
      <AllButtons
        {...{
          id,
          setIsEdit,
          todos,
          setTodos,
          todo,
          isEdit,
          editTodoItem,
          setTodo,
          setEditTodoItem,
          setIsDone,
        }}
      />
    </li>
  );
}

export default Todo;
