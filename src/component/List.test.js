import { render, screen } from '@testing-library/react';
import List from './List';

test('render no value msg if no items provide', () => {
  render(<List />);
  const linkElement = screen.getByText(/no items provide/i);
  expect(linkElement).toBeInTheDocument();
});
test('render items if items provide', () => {
  let items =[1,2,3]
  render(<List items={items}/>);
  const renderedItem = screen.getAllByRole("listitem")
   expect(renderedItem.length).toEqual(items.length);
});
test('render items should be sort asc', () => {
  let items =[5,1,2,3]
  render(<List items={items}/>);
  const renderedItem = screen.getAllByRole("listitem")
   expect(renderedItem.map((item)=>item.textContent)).toMatchInlineSnapshot(`
   Array [
     "1",
     "2",
     "3",
     "5",
   ]
   `);
});



