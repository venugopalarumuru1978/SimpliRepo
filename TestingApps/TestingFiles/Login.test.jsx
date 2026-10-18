import { fireEvent, render, screen } from '@testing-library/react';
import Login from './Login';

  // Test Case 1: Initial Render
  test('renders login form with all fields and submit button', () => {
    render(<Login />);

    expect(screen.getByRole('heading', { name: /login/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/email:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password:/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

    // Test Case 2: User Input Behavior
    test('allows the user to enter email and password values', () => {
        render(<Login />);
    
        const emailInput = screen.getByLabelText(/email:/i);
        const passwordInput = screen.getByLabelText(/password:/i);
    
        fireEvent.change(emailInput, { target: { value: 'user@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'abc@123' } });
    
        expect(emailInput.value).toBe('user@example.com');
        expect(passwordInput.value).toBe('abc@123');
      });
      // Test Case 3: Empty Fields Validation
  test('shows an alert message when submitting empty fields', () => {
    render(<Login />);

    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);

    const errorMessage = screen.getByRole('alert');
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent('Email and password are required.');
  });

      // Test Case 4: Successful Submission Functionality
  test('calls onSubmit property with credentials when inputs are valid', () => {
    render(<Login  />);

    const emailInput = screen.getByLabelText(/email:/i);
    const passwordInput = screen.getByLabelText(/password:/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'abc@123' } });
    fireEvent.click(submitButton);

    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    
  });

