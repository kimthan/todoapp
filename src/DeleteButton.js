import React from "react";

function DeleteButton({ id, todos, setTodos }) {
  function handleDelete(e) {
    const newList = todos.filter((todo) => {
      return todo.id !== Number(e.target.value);
    });
    setTodos(newList);
  }
  return (
    <button
      value={id}
      onClick={handleDelete}
      className="m-2 bg-red-50 rounded drop-shadow-md p-1  text-gray-600"
    >
      Delete
    </button>
  );
}

export default DeleteButton;
