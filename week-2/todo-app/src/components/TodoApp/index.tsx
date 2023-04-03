import React, { useState } from "react";
import Todo from "./Todo";
import { v4 as uuidv4 } from "../../../node_modules/@types/uuid";
import List from "./List";
import Footer from "./Footer";

type Props = {};

const initialTodos = [
  {
    id: uuidv4(),
    title: "Learn React",
    isDone: false,
  },
];

const TodoApp = (props: Props) => {
  const [todos, setTodos] = useState(initialTodos);
  const [filter, setFilter] = useState("all");

  return (
    <section className="todoapp">
      <Todo addTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} filter={filter} />
      <Footer
        filter={filter}
        setFilter={setFilter}
        todos={todos}
        setTodos={setTodos}
      />
    </section>
  );
};

export default TodoApp;
