import { useState } from 'react';
import { signupUser } from "../service/userService.js";
import { useNavigate } from 'react-router-dom';

function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = { email, password };
    const response = await signupUser(user);
    if (response.success) {
      navigate("/");
    } else {
     alert("error while creating user")
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
      <button type="submit">Signup</button>
    </form>
  );
}

export default SignupForm;
