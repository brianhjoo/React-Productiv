import React from "react";
import { render } from "@testing-library/react";
import Todo from './Todo';


const props = {
  title: 'Finish project',
  priority: '1',
  description: 'Complete all remaining tasks',
};


describe ("productiv app", function() {
  it('renders without crashing', function() {
    render(<Todo />);
  });

  it('displays the correct title', function() {
    const result = render(<Todo title={props.title} />);
    expect(result.queryByText('Finish project')).toBeInTheDocument();
  });

  it('displays the correct description', function() {
    const result = render(<Todo description={props.description} />);
    expect(result.queryByText('Complete all remaining tasks')).toBeInTheDocument();
  });

  it('displays correct priority and data type', function() {
    const result = render(<Todo priority={props.priority} />);
    expect(result.queryByText('1')).not.toBeInTheDocument();
  });

  it('matches snapshot', function() {
    const { container } = render(<Todo />);
    expect(container).toMatchSnapshot();
  });
});