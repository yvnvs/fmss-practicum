const Footer = ({ filter, setFilter, todos, setTodos }: any) => {
  const filters = ["all", "active", "completed"];

  // set the selected filter
  const handleFilter = (e: any) => {
    setFilter(e);
  };

  // clear compleated todos
  const handleClearCompleted = () => {
    const activeTodos = todos.filter((todo: any) => {
      if (todo.isDone !== true) {
        return todo;
      }
    });
    setTodos(activeTodos);
  };

  // todos length by filter
  let todoLength;

  if (filter === "all") {
    todoLength = todos.length;
  } else if (filter === "active") {
    todoLength = todos.filter((todo: any) => todo.isDone === false).length;
  } else if (filter === "completed") {
    todoLength = todos.filter((todo: any) => todo.isDone === true).length;
  }
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todoLength}</strong>
      </span>

      <ul className="filters">
        {filters.map((filterName: any, id) => (
          <li key={id}>
            <a
              className={filter === filterName ? "selected" : ""}
              onClick={() => handleFilter(filterName)}
            >
              {filterName[0].toUpperCase() + filterName.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      <button className="clear-completed" onClick={handleClearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
