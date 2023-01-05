import { useState } from "react";
import swal from "sweetalert";

export default function Todo({ item, onUpdate, onDelete }) {
  const [isEdit, setIsEdit] = useState(false);
  const [done, setDone] = useState(false);

  //   console.log(item.completed);

  const FormEdit = () => {
    const [newValue, setNewValue] = useState(item.title);
    const handleSubmit = (e) => {
      e.preventDefault();
    };

    const handleChange = (e) => {
      const value = e.target.value;
      setNewValue(value);
    };

    const handleClickUpdateTodo = () => {
      let value = newValue.trim();

      if (value.length <= 0) {
        return swal("Debes ingresar algun texto", "", "error");
      }
      onUpdate(item.id, newValue);
      setIsEdit(false);
      return swal("Se actualizó el ToDo", "", "success");
    };

    return (
      <form className="todoUpdateForm row g-2" onSubmit={handleSubmit}>
        <div className="col-auto">
          <input
            type="text"
            className="todoInput form-control"
            onChange={handleChange}
            value={newValue}
          />
        </div>
        <div className="col-auto">
          <button
            className="button btn btn-primary"
            onClick={handleClickUpdateTodo}
          >
            Update
          </button>
        </div>
      </form>
    );
  };

  const handleDone = () => {
    setDone(done ? false : true);
  };

  const TodoElement = () => {
    return (
      <>
        <p
          onClick={() => setDone(done ? false : true)}
          className={`${done && "complete"}`}
        >
          {item.title}
        </p>
        <div>
          <button className="btn btn-success" onClick={() => setIsEdit(true)}>
            Editar
          </button>
          <button className="btn btn-danger" onClick={(e) => onDelete(item.id)}>
            Delete
          </button>
        </div>
      </>
    );
  };

  return (
    <li className="todo todoInfo list-group-item">
      {isEdit ? <FormEdit /> : <TodoElement />}
    </li>
  );
}
