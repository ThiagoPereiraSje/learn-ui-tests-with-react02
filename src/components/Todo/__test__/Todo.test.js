import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const addTasks = (tasks = []) => {
  const inputElement = screen.getByPlaceholderText(/add a new task here/i);
  const buttonElement = screen.getByRole("button", { name: /add/i });

  tasks.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(buttonElement);
  });
};

describe("Todo", () => {
  test("Should render one element in the list", () => {
    // Render component in virtual DOM
    render(<MockTodo />);

    // Find elements we want to interact with
    const inputElement = screen.getByPlaceholderText(/add a new task here/i);
    const buttonElement = screen.getByRole("button", { name: /add/i });

    // Interact with those elements
    fireEvent.change(inputElement, { target: { value: "My new task" } });
    fireEvent.click(buttonElement);
    const divElement = screen.getByText(/my new task/i);

    // Assert that the results are as expected
    expect(divElement).toBeInTheDocument();
  });

  test("Should render multiple elements in the list", () => {
    // Render component in virtual DOM
    render(<MockTodo />);

    // Find elements we want to interact with
    // const inputElement = screen.getByPlaceholderText(/add a new task here/i);
    // const buttonElement = screen.getByRole("button", { name: /add/i });

    // Interact with those elements
    // fireEvent.change(inputElement, { target: { value: "My new task" } });
    // fireEvent.click(buttonElement);

    // fireEvent.change(inputElement, { target: { value: "My new task 2" } });
    // fireEvent.click(buttonElement);

    // fireEvent.change(inputElement, { target: { value: "My new task 3" } });
    // fireEvent.click(buttonElement);

    // Find elements we want to interact with
    // Interact with those elements
    addTasks(["Task 1", "Task 2", "Task 3"]);

    const divElements = screen.getAllByTestId("task-container");

    // Assert that the results are as expected
    expect(divElements.length).toBe(3);
  });

  test("Task should not have completed class when initally rendered", () => {
    // Render component in virtual DOM
    render(<MockTodo />);

    // Find elements we want to interact with
    // Interact with those elements
    addTasks(["Task 1"]);

    const divElement = screen.getByText(/task 1/i);

    // Assert that the results are as expected
    expect(divElement).not.toHaveClass("todo-item-active");
  });

  test("Task should have completed class when clicked", () => {
    // Render component in virtual DOM
    render(<MockTodo />);

    // Find elements we want to interact with
    // Interact with those elements
    addTasks(["Task 1"]);

    const divElement = screen.getByText(/task 1/i);

    // Interact again
    fireEvent.click(divElement);

    // Assert that the results are as expected
    expect(divElement).toHaveClass("todo-item-active");
  });
});
