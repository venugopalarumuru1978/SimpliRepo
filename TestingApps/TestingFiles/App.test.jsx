import { render, screen } from '@testing-library/react';
import App from './App';

describe('text based test cases', ()=>{
    test('renders the heading', () => {
        render(<App />);
        const heading = screen.getByText(/Hello World/i);
        expect(heading).toBeInTheDocument();
      });
      
      test('paragraph test ', ()=>{
          render(<App />);
          const pinfo = screen.getByText('This is para graph');
          expect(pinfo).toBeInTheDocument();
      });
});

describe('image based test cases ', ()=>{
    test('Image test for title ', ()=>{
        render(<App />);
        const imginfo = screen.getByRole("img");
        expect(imginfo).toHaveAttribute("title", "this is local image");    
    });
    
    test('Image test for src ', ()=>{
        render(<App />);
        const imginfo = screen.getByRole("img");    
        expect(imginfo).toHaveAttribute("src", "slide-1.jpg");
    });
});
