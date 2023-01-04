import { useState } from "react";
import Todo from "./todo";

export default function TodoApp() {
  const [title, setTitle] = useState("Hola");
  const [todos, setTodos] = useState([]);

  function handleClick(e) {
    e.preventDefault();
    setTitle("Javier");
  }

  const handleChange = (e) => {
    const value = e.target.value;
    setTitle(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="todoContainer">
      <form className="todoCreateForm" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          className="todoInput"
          type="text"
          value={title}
        />
        <input
          onClick={handleSubmit}
          className="buttonCreate"
          type="submit"
          value="Create todo"
        />
      </form>

      <div className="todosContainer">
        {todos.map((item) => (
          <Todo key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
