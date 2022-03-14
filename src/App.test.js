import { render, screen } from '@testing-library/react';
import App from './App';

// Syntax of Test Block
test('renders learn react link', () => {
  // First step: Render component in virtual DOM
  render(<App />);

  // Second step: Find elements we want to interact with
  const linkElement = screen.getByText(/learn react/i);

  // Third step: Interact with those elements

  // Fourth step: Assert that the results are expected
  expect(linkElement).toBeInTheDocument();
});
