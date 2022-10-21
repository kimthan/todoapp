import React, { useEffect, useState, useRef } from "react";

import { db } from "./firebase-config";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
  addDoc,
} from "firebase/firestore";
import AppTitle from "./AppTitle";
import Button from "./Button";
function App() {
  const [todo, setTodo] = useState("");
  const [todolist, setTodolist] = useState([]);
  const inputRef = useRef();
  async function handleSubmit() {
    console.log("TEST");

    if (!todo) return;
    await addDoc(collection(db, "todo"), {
      task: todo,
      isCompleted: false,
    });
    setTodo("");

    inputRef.current.focus();
  }

  async function toggleCompleted(todo) {
    await updateDoc(doc(db, "todo", todo.id), {
      isCompleted: !todo.isCompleted,
    });
  }
  async function handleDelete(todo) {
    await deleteDoc(doc(db, "todo", todo.id));
  }
  useEffect(() => {
    console.log("useeffect");
    inputRef.current.focus();
    const q = query(collection(db, "todo"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      console.log(querySnapshot);

      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });

      setTodolist(todosArray);
    });
    return () => {
      unsub();
    };
  }, []);
  return (
    <div>
      <div
        className=" bg-white rounded max-w-[500px] mx-auto drop-shadow-lg
mt-4 p-2 min-h-[250px] relative flex flex-col justify-between
"
      >
        <AppTitle>Todo App!</AppTitle>
        {todolist &&
          todolist.map((todo) => {
            return (
              <div key={todo.id}>
                <ul>
                  <span
                    className="cursor-pointer"
                    onClick={() => handleDelete(todo)}
                  >
                    x{" "}
                  </span>
                  <span className={`${todo.isCompleted ? "line-through" : ""}`}>
                    {todo.task} --
                  </span>
                  <span
                    onClick={() => toggleCompleted(todo)}
                    className={`${
                      todo.isCompleted ? "bg-green-200" : "bg-red-200"
                    }`}
                  >
                    {todo.isCompleted ? "Done" : "Not Done"}
                  </span>
                </ul>
              </div>
            );
          })}
        <div>
          <input
            className="bg-red-200 mr-2"
            value={todo}
            ref={inputRef}
            onChange={(e) => setTodo(e.target.value)}
          />
          <Button {...{ handleSubmit }}>adddd</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
