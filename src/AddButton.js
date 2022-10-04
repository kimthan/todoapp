import React from "react";

function AddButton({ addTodo, hasText }) {
  return (
    <div className="flex mt-4">
      {hasText && (
        <button onClick={addTodo} className="bg-green-200 grow mr-1">
          Add
        </button>
      )}
    </div>
  );
}
export default AddButton;
