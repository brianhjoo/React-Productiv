import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoForm from "./TodoForm";

describe("TodoForm Tests", function () {
    it('renders without crashing', function() {
        const mockHandleSave = jest.fn();
        render(<TodoForm handleSave={ mockHandleSave }/>);
    });
});