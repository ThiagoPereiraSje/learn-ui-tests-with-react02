import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom";

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

test("Should render the correct amount of incomplete tasks", () => {
  // Render component in virtual DOM
  render(<MockTodoFooter numberOfIncompleteTasks={5} />);

  // Find elements we want to interact with
  const paragraphElement = screen.getByText(/5 tasks left/i);
  expect(paragraphElement).toBeInTheDocument();
});

test("Should render 'task' when the number of incomplete tasks is one", () => {
  // Render component in virtual DOM
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);

  // Find elements we want to interact with
  const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement).toBeInTheDocument();
});

test("Number of incomplete tasks should be visible to the user", () => {
  // Render component in virtual DOM
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);

  // Find elements we want to interact with
  const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement).toBeVisible();
});

test("Should render 'task' when the number of incomplete tasks is one (1)", () => {
  // Render component in virtual DOM
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);

  // Find elements we want to interact with
  const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement).toBeTruthy();
});

test("Should contain the element p", () => {
  // Render component in virtual DOM
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);

  // Find elements we want to interact with
  const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement).toContainHTML("p");
});

test("Should render 'task' when the number of incomplete tasks is one (2)", () => {
  // Render component in virtual DOM
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);

  // Find elements we want to interact with
  const paragraphElement = screen.getByTestId("paragraph");
  expect(paragraphElement).toHaveTextContent("1 task left");
});

test("Should render 'task' when the number of incomplete tasks is one (3)", () => {
  // Render component in virtual DOM
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);

  // Find elements we want to interact with
  const paragraphElement = screen.getByTestId("paragraph");
  expect(paragraphElement.textContent).toBe("1 task left");
});
