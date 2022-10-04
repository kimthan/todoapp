import React from "react";
import DeleteButton from "./DeleteButton";
import DoneButton from "./DoneButton";
import EditButton from "./EditButton";
import SaveButton from "./SaveButton";

function AllButtons({
  id,
  setIsEdit,
  todos,
  setTodos,
  todo,
  isEdit,
  editTodoItem,
  setTodo,
  setEditTodoItem,
  isDone,
  setIsDone,
}) {
  return (
    <div>
      <div>
        {isEdit && (
          <DoneButton
            {...{
              id,
              setIsEdit,
              todos,
              setTodos,
              todo,
              isEdit,
              editTodoItem,
              isDone,
              setIsDone,
            }}
          />
        )}
        {isEdit && (
          <SaveButton
            {...{
              id,
              setIsEdit,
              todos,
              setTodos,
              todo,
              isEdit,
              editTodoItem,
            }}
          />
        )}
        {!isEdit && (
          <EditButton
            {...{ id, setIsEdit, isEdit, todos, setTodo, setEditTodoItem }}
          />
        )}
        {isEdit && <DeleteButton {...{ id, todos, setTodos }} />}
      </div>
    </div>
  );
}

export default AllButtons;
