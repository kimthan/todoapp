import React from "react";

function EditButton({
  id,
  setIsEdit,
  isEdit,
  todos,
  setTodo,
  setEditTodoItem,
}) {
  function handleEdit(e) {
    setIsEdit(!isEdit);
    const editedTodo = todos.find((todo) => todo.id === Number(e.target.value));
    setTodo(editedTodo.task);
    setEditTodoItem(editedTodo);
  }

  return (
    <button
      onClick={handleEdit}
      value={id}
      className="m-2 bg-orange-100 rounded drop-shadow-md p-1  text-gray-600"
    >
      Edit
    </button>
  );
}

export default EditButton;
