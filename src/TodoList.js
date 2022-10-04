import Todo from "./Todo";
function TodoList({ todos, setTodos, setIsDone }) {
  return (
    <ul>
      {todos.length < 1 ? (
        <div className="text-center pt-10 text-2xl">please add todo</div>
      ) : (
        todos.map((todo) => {
          return (
            <Todo
              todoItem={todo.task}
              id={todo.id}
              key={todo.id}
              todos={todos}
              setTodos={setTodos}
              setIsDone={setIsDone}
            />
          );
        })
      )}
    </ul>
  );
}

export default TodoList;
