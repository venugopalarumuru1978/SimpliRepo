import { fireEvent, render, screen } from '@testing-library/react';
import Demo1 from './Demo1';
// multiple button tags
test('buttons demo', ()=>{
    render(<Demo1 />);
    //screen.debug();
    //const btn = screen.getByRole("button");  finds only one
    const btn = screen.getAllByRole("button"); // finds multiple ones
    //btn is array now
    for(let i =0;i<btn.length;i++)
    {
        fireEvent.click(btn[i]);
        expect(screen.getByText("Click Me" + (i+1))).toBeInTheDocument();    
    } 
});