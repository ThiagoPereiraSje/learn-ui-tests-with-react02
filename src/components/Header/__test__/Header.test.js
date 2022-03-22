import { render, screen } from "@testing-library/react";
import Header from "../Header";

test("Get element by text", () => {
  // Render component in virtual DOM
  render(<Header title="My Header" />);

  // Find elements we want to interact with
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

// test("Get element by role", () => {
//   // Render component in virtual DOM
//   render(<Header title="My Header" />);

//   // Find elements we want to interact with
//   const headingElement = screen.getByRole("heading");
//   expect(headingElement).toBeInTheDocument();
// });

// test("Get many elements by role", () => {
//   // Render component in virtual DOM
//   render(<Header title="My Header" />);

//   // Find elements we want to interact with
//   const headingElements = screen.getAllByRole("heading");
//   expect(headingElements.length).toBe(4);
// });

// test("Get element by role and text", () => {
//   // Render component in virtual DOM
//   render(<Header title="My Header" />);

//   // Find elements we want to interact with
//   const headingElement = screen.getByRole("heading", { name: "My Header" });
//   expect(headingElement).toBeInTheDocument();
// });

// test("Get element by title", () => {
//   // Render component in virtual DOM
//   render(<Header title="My Header" />);

//   // Find elements we want to interact with
//   const headingElement = screen.getByTitle("Header");
//   expect(headingElement).toBeInTheDocument();
// });

// test("Get element by testId", () => {
//   // Render component in virtual DOM
//   render(<Header title="My Header" />);

//   // Find elements we want to interact with
//   const headingElement = screen.getByTestId("header-1");
//   expect(headingElement).toBeInTheDocument();
// });

// Find Method
// -----------------------------------------------------------
// test("Find element by text", async () => {
//   // Render component in virtual DOM
//   render(<Header title="My Header" />);

//   // Find elements we want to interact with
//   const headingElement = await screen.findByText(/my header/i);
//   expect(headingElement).toBeInTheDocument();
// });

// Query Method
// -----------------------------------------------------------
// test("Query element by text", () => {
//   // Render component in virtual DOM
//   render(<Header title="My Header" />);

//   // Find elements we want to interact with
//   const headingElement = screen.queryByText(/snakes/i);
//   expect(headingElement).not.toBeInTheDocument();
// });
