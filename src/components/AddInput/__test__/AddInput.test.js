import { render, screen, fireEvent } from "@testing-library/react";
import AddInput from "../AddInput";

// setTodos could be: () => {}. It's completely valid
// Better approach: mockSetTodo
const mockedSetTodo = jest.fn();

describe("AddInput", () => {
  test("Should render input element", () => {
    // Render component in virtual DOM
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);

    // Find elements we want to interact with
    const inputElement = screen.getByPlaceholderText(/add a new task here/i);

    // Interact with those elements

    // Assert that the results are as expected
    expect(inputElement).toBeInTheDocument();
  });

  test("Should be able to type in input", () => {
    // Render component in virtual DOM
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);

    // Find elements we want to interact with
    const inputElement = screen.getByPlaceholderText(/add a new task here/i);

    // Interact with those elements
    fireEvent.change(inputElement, {
      target: { value: "My new task" },
    });

    // Assert that the results are as expected
    expect(inputElement.value).toBe("My new task");
  });

  test("Should have empty input text when add button is clicked", () => {
    // Render component in virtual DOM
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);

    // Find elements we want to interact with
    const inputElement = screen.getByPlaceholderText(/add a new task here/i);
    const buttonElement = screen.getByRole("button", { name: /add/i });

    // Interact with those elements
    fireEvent.change(inputElement, {
      target: { value: "My new task" },
    });

    fireEvent.click(buttonElement);

    // Assert that the results are as expected
    expect(inputElement.value).toBe("");
  });
});
