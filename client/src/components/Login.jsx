import { useState } from 'react';
import { loginUser } from '../service/userService.js';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = { email, password };
    const response = await loginUser(user);
    if (response.success) {
      localStorage.setItem('token', response.token); // store the token in local storage
      navigate('/');
    } else {
      // handle error, e.g., show error message
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
