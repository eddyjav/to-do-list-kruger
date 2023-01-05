import { useState } from "react";
import Todo from "./todo";
import "./todoApp.css";
import swal from "sweetalert";
import kruger from "../img/logoKrB.png";

export default function TodoApp() {
  const [title, setTitle] = useState("");
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

    let value = title.trim();

    if (value.length <= 0) {
      return swal("Debes ingresar algun texto", "", "error");
    }

    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);

    setTitle("");
  };

  const handleUpdate = (id, value) => {
    const temp = [...todos];
    const item = temp.find((item) => item.id === id);
    item.title = value;
    setTodos(temp);
  };

  const handleDelete = (id) => {
    // return swal("Se elimino el ToDo", "", "success");
    swal({
      title: "Estás  seguro?",
      text: "Deseas eliminar este ToDo!!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const temp = todos.filter((item) => item.id !== id);
        setTodos(temp);
        swal("💥 Se elimino el ToDo!!", {
          icon: "success",
        });
      } else {
        // swal("Your imaginary file is safe!");
      }
    });
  };

  return (
    <div>
      <div className="title-t">
        <img src={kruger} alt="" />
        <h1>Todo App </h1>
      </div>
      <hr />
      <div className="todoContainer row">
        {/* <div className="col-6"> */}
        <form className="col-6 todoCreateForm " onSubmit={handleSubmit}>
          <div className=" p-cant">
            <h4>Add ToDo</h4>
            <h4>{todos.length}</h4>
          </div>

          <hr />
          <input
            onChange={handleChange}
            className="todoInput form-control"
            type="text"
            value={title}
            placeholder="Escribe un ToDo...."
            autoFocus
            required
          />
          <input
            // onClick={handleSubmit}
            className="buttonCreate btn btn-warning mt-2 btn-block"
            type="submit"
            value="Create todo"
          />
        </form>
        {/* </div> */}

        <div className="todosContainer col-6">
          <h4>List of ToDo's </h4>
          <hr />
          <ul className="list-group list-group-flush">
            {todos.map((item) => (
              <Todo
                key={item.id}
                item={item}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
