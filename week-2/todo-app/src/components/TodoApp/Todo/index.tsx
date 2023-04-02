import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

type Props = {
  addTodos: any;
};

const Todo = ({ addTodos }: Props) => {
  const [input, setInput] = useState("");

  // add a new todo
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (input === "") {
      return false;
    } else {
      const obj = { id: uuidv4(), title: input, isDone: false };
      addTodos((prev: any) => [...prev, obj]);
      setInput("");
    }
  };

  // set value for input
  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
    console.log(input);
  };
  return (
    <div>
      <header>
        <h1>todos</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            value={input}
            onChange={handleInput}
          />
        </form>
      </header>
    </div>
  );
};

export default Todo;
