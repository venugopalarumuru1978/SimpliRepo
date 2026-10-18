
import { fireEvent, render, screen } from '@testing-library/react';
import Test1 from './Test1';

test('checking place holder',()=>{
    render(<Test1 />);
    const inputPlaceholder = screen.getByPlaceholderText('Enter ur name');
    expect(inputPlaceholder).toBeInTheDocument();
});

test('checking onchange event',()=>{
    render(<Test1 />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, {target:{value:"Venugopal"}});
    expect(input.value).toBe("Venugopal");
});

test('checking click event',()=>{
    render(<Test1 />);
    const btn1 = screen.getByRole("button");
    fireEvent.click(btn1, {target:{value:"Click Me"}});
    expect(btn1.value).toBe("Click Me");
});

test('checking click event-1',()=>{
    render(<Test1 />);
    const btn1 = screen.getByRole("button");
    fireEvent.click(btn1, {target:{value:"SimpliLearn"}});
    expect(screen.getByText("SimpliLearn")).toBeInTheDocument();    
});

