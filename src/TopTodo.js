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
  let top = todos.reduce(
      (acc, cur) => cur.priority < acc.priority ? cur : acc, todos[0]);

  return (
    <div>
        { todos.length ? (
          <Todo 
          id={top.id} 
          title={top.title} 
          priority={top.priority} 
          description={top.description}
        />) : "No todos yet!" }
    </div>
  )
}

export default TopTodo;