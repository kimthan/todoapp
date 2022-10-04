import React from "react";

function SaveButton({
  id,
  setIsEdit,
  todos,
  setTodos,
  todo,
  isEdit,
  editTodoItem,
}) {
  function handleSave() {
    if (!todo) return;
    setIsEdit(!isEdit);

    const update = todos.map((item) => {
      if (item.id === editTodoItem.id) {
        item.task = todo;
        item.isCompleted = false;
        return item;
      } else {
        return item;
      }
    });
    setTodos(update);
  }
  return (
    <button
      onClick={handleSave}
      value={id}
      className="m-2 bg-green-100 rounded drop-shadow-md p-1  text-gray-600"
    >
      Save
    </button>
  );
}

export default SaveButton;
