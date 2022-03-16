import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  // Render component in virtual DOM
  render(<App />);
  
  // Find elements we want to interact with
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
