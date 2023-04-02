import React from "react";

const List = ({ todos, setTodos, filter }: any) => {
  // update todo status
  const handleToggleTodo = (id: string) => {
    const updatedTodos = todos.map((todo: any) => {
      if (todo.id === id) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  // remove todo item

  const handleRemoveTodo = (id: string) => {
    setTodos(todos.filter((todo: any) => todo.id !== id));
  };

  // update todo list

  let filteredTodos;
  if (filter === "all") {
    filteredTodos = todos;
  } else if (filter === "active") {
    filteredTodos = todos.filter((todo: any) => todo.isDone === false);
  } else if (filter === "completed") {
    filteredTodos = todos.filter((todo: any) => todo.isDone === true);
  }

  return (
    <div>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {filteredTodos.map(({ id, title, isDone }: any) => {
            return (
              <li className={isDone ? "completed" : ""} key={id}>
                <input
                  className="toggle"
                  type="checkbox"
                  checked={isDone}
                  onChange={() => handleToggleTodo(id)}
                />
                <label>{title}</label>
                <button
                  className="destroy"
                  onClick={() => handleRemoveTodo(id)}
                ></button>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default List;
