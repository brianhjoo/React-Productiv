import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import './EditableTodo.css';

/** Show editable todo item.
 * Props
 * - id
 * - title
 * - description
 * - priority
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 * 
 * State
 *  - isEditing: boolean T or F
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo({ id, title, description, priority, update, remove }) {
  const [isEditing, setIsEditing] = useState(false);

  /** Toggle if this is being edited */
  function toggleEdit() {
    setIsEditing(isEditing => !isEditing);
  }

  /** Call remove fn passed to this. */
  function handleDelete() {
    remove(id);
  }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(formData) {
    update({ ...formData, id: id });
    setIsEditing(false);
  }

  return (
    <div className="EditableTodo">
      {
        isEditing 
        ? 
          <TodoForm 
            handleSave={handleSave} 
            initialFormData={{ title, description, priority }}
          />
        :
          null
      }
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
