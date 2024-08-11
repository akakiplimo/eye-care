import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Mock login logic
    if (email === 'user@example.com' && password === 'password') {
      localStorage.setItem('authToken', 'your-token-here');
      navigate('/shop');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Welcome back!</h2>
      <p className="mb-6">Please login to your account</p>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter Email"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="flex justify-between items-center mb-6">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <a href="#" className="text-teal-700 hover:underline">
            Forgot your password?
          </a>
        </div>
        <button className="w-full bg-teal-700 text-white py-3 rounded-lg">Log In</button>
      </form>
    </div>
  );
};

export default LoginForm;
