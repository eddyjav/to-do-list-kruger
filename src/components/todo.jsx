import { useState } from "react";

export default function Todo({ item }) {
  const [isEdit, setIsEdit] = useState(false);

  const FormEdit = () => {
    return (
      <form>
        <input type="text" />
        <button>Update</button>
      </form>
    );
  };

  const TodoElement = () => {
    return (
      <div className="todoInfo">
        {item.title}
        <button onClick={() => setIsEdit(true)}>Editar</button>
        <button>Delete</button>
      </div>
    );
  };

  return <div className="todo">{isEdit ? <FormEdit /> : <TodoElement />}</div>;
}
