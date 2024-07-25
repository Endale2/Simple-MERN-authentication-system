import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const loginUser = async (e) => {
    e.preventDefault();

    const { email, password } = data;

    if (!email || !password) {
      toast.error("Email and password are required");
      return;
    }

    try {
      const response = await axios.post('/login', { email, password });
      const responseData = response.data;

      if (responseData.error) {
        toast.error(responseData.error);
      } else {
        setData({ email: '', password: '' });
        toast.success('Logged in successfully');
        navigate('/Dashboard');
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Login failed. Please try again.');
    }
  };

  return (
    <div>
      <p>Login Page</p>
      <form onSubmit={loginUser}>
        <label>Email: </label>
        <input
          type="email"
          placeholder="Enter your email here..."
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <label>Password: </label>
        <input
          type="password"
          placeholder="Enter your password here..."
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
