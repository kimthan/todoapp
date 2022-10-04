import React, { useState } from "react";
import AddButton from "./AddButton";
import AppTitle from "./AppTitle";
import Input from "./Input";
import TodoList from "./TodoList";
import useEnterKey from "./UseEvent";
function App() {
  const [id, setId] = useState(0);
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  const [enter, setEnter] = useEnterKey();

  function addTodo() {
    const newTodo = { id, task: todoInput, isCompleted: false };
    console.log(newTodo);
    setId(id + 1);
    setTodos((prev) => [...prev, newTodo]);
    setTodoInput("");
  }
  if (enter && todoInput !== "") {
    setEnter(false);
    addTodo();
  }

  return (
    <div>
      <div
        className=" bg-white rounded max-w-[500px] mx-auto drop-shadow-lg
mt-4 p-2 min-h-[250px] relative flex flex-col justify-between
"
      >
        <AppTitle title={"Todo App!"} />
        <div>
          <TodoList
            todos={todos}
            setTodos={setTodos}
            todoInput={todoInput}
            setTodoInput={setTodoInput}
            enter={enter}
          />
        </div>
        <Input todoInput={todoInput} setTodoInput={setTodoInput} />
        <AddButton
          hasText={todoInput}
          id={id}
          setId={setId}
          todoInput={todoInput}
          setTodoInput={setTodoInput}
          setTodos={setTodos}
          enter={enter}
          setEnter={setEnter}
          addTodo={addTodo}
        />
      </div>
    </div>
  );
}

export default App;
