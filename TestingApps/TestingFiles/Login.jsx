import { useState } from "react";

export default function Login()
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
          setError('Email and password are required.');
          return;
        }
        setError('');
      };
    
    return(
        <>
            <form onSubmit={handleSubmit} aria-label="form">
                  <h2>Login</h2>
                    {error && <p role="alert" style={{ color: 'red' }}>{error}</p>}
      
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  id="email"
                    type="email"
                  value={email}
                      onChange={(e) => setEmail(e.target.value)}
                     />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
        </>
    );
}

