import React, { useEffect, useRef } from "react";

function Input({ todoInput, setTodoInput }) {
  function handleTodoInput(e) {
    setTodoInput(e.target.value);
  }
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, [todoInput]);
  return (
    <div className="">
      <input
        ref={inputRef}
        value={todoInput}
        onChange={handleTodoInput}
        type="text"
        placeholder="enter todo item here..."
        className="w-full mt-10 p-2 text-center rounded outline-none"
      />
    </div>
  );
}

export default Input;
