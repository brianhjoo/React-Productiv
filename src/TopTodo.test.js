import React from "react";
import { render } from "@testing-library/react";
import TopTodo from './TopTodo';

const todo1 = {
    id: 1,
    title: "important todo",
    description: "very important",
    priority: 1
}
const todo2 = {
    id: 2,
    title: "not important todo",
    description: "not important",
    priority: 3
}

const todos = [todo1, todo2];

const emptyTodo = [];


describe ("TopTodo Tests", function() {
    it('renders without crashing', function() {
      render(<TopTodo todos={todos}/>);
    });
  
    it('displays the correct TopTodo', function() {
      const result = render(<TopTodo todos={todos} />);
      expect(result.queryByText('very important')).toBeInTheDocument();
      expect(result.queryByText('not important')).not.toBeInTheDocument();
    });

    it('displays the correct message if empty todos', function() {
      const result = render(<TopTodo todos={emptyTodo} />);
      expect(result.queryByText('No todos yet!')).toBeInTheDocument();
    });
  
    it('matches snapshot', function() {
      const { container } = render(<TopTodo todos={todos}/>);
      expect(container).toMatchSnapshot();
    });
});