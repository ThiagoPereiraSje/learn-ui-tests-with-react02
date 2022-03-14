import { render, screen } from '@testing-library/react';
import App from './App';

/*
Syntax of Test Block: 
  * First step: Render component in virtual DOM;
  * Second step: Find elements we want to interact with;
  * Third step: Interact with those elements;
  * Fourth step: Assert that the results are expected;
*/
test('renders learn react link', () => {
  // Render component in virtual DOM;
  render(<App />);
  
  /*
    Find elements we want to interact with:
      * screen.getByText(/learn react/i): Get one element by text content;
      * screen.queryByText(/learn react/i): Get one element by text content; 
      * screen.getAllByText(/learn react/i): Get a array of elements by text content;
      * screen.findAllByText(/learn react/i): Get a array of elements by text content;
      * screen.queryAllByText(/learn react/i): Get a array of elements by text content;
    
    Differences between getBy, findBy, queryBy, getAllBy, findAllBy, and queryAllBy:
      - See the picture: differences-between-getBy-findBy-queryBy;

  */ 

  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
