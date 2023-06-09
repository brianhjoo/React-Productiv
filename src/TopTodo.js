import React from "react";

import Todo from "./Todo";

/** Shows the top todo.
 *
 * Props:
 * - todos
 *
 * TodoApp -> TopTodo
 */

function TopTodo({ todos }) {
  // lowest-priority # is the highest priority
  if(todos.length === 0) return "No todos yet!";
  let top = todos.reduce(
    (acc, cur) => cur.priority < acc.priority ? cur : acc, todos[0]);

  return (
    <div className="TopTodo">
        <Todo
          id={top.id}
          title={top.title}
          priority={top.priority}
          description={top.description}
        />
    </div>
  );
}

export default TopTodo;