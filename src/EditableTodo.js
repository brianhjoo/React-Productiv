import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import './EditableTodo.css';

/** Show editable todo item.
 *
 * Props
 * - todo
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo({ id, title, description, priority, update, remove }) {
  const [isEditing, setIsEditing] = useState(true);

  /** Toggle if this is being edited */
  function toggleEdit() {
    setIsEditing(!isEditing);
  }

  /** Call remove fn passed to this. */
  function handleDelete() {
    remove(id);
  }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(formData) {
    update({ ...formData, id: id });

    setIsEditing(true);
  }

  return (
    <div className="EditableTodo">
      {isEditing ? null :
        <TodoForm handleSave={handleSave} initialFormData={{ title, description, priority }} />}
      <div className="mb-3">
        <div className="float-end text-sm-end">
          <button
            className="EditableTodo-toggle btn-link btn btn-sm"
            onClick={toggleEdit}>
            Edit
          </button>
          <button
            className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
            onClick={handleDelete}>
            Del
          </button>
        </div>
        <Todo
          id={id}
          title={title}
          description={description}
          priority={priority}
        />
      </div>

    </div>
  );
}

export default EditableTodo;
