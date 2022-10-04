import React from "react";

function DoneButton({
  id,
  todo,
  todos,
  setIsEdit,
  isEdit,
  editTodoItem,
  setTodos,
}) {
  function handleDone(e) {
    if (!todo) return;
    setIsEdit(!isEdit);

    const update = todos.map((item) => {
      if (item.id === editTodoItem.id) {
        if (item.task === todo) {
          item.isCompleted = true;
        } else {
          item.task = todo;
          item.isCompleted = false;
        }
        return item;
      } else {
        return item;
      }
    });
    setTodos(update);
  }
  return (
    <button
      value={id}
      onClick={handleDone}
      className="m-2 bg-blue-50 rounded drop-shadow-md p-1  text-gray-600"
    >
      Done
    </button>
  );
}

export default DoneButton;
