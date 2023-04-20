import React from "react";
import EditableTodo from "./EditableTodo";

/** Show list of editable todos.
 *
 * Props:
 * - todos: array of [ todo, ... ]
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * TodoApp -> EditableTodoList -> [ EditableTodo, ... ]
 */

function EditableTodoList({ todos }) {
  return (
      <div>
        {
          todos.map(
            ({id, title, description, priority}) =>
            <EditableTodo
              id={id}
              title={title}
              description={description}
              priority={priority}
            />)
        }
      </div>
  );
}

export default EditableTodoList;
