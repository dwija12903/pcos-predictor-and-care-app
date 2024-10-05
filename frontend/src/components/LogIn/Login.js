import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from './AuthContext';

function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${backendUrl}/login`, { email, password })
      .then(result => {
        if (result.data.success) {
          login(result.data.name);  // Set the username in context
          setMessage('Login successful! Redirecting...');
          setIsSuccess(true);
          setTimeout(() => {
            navigate('/');
          }, 2000); // Redirect after 2 seconds
        } else {
          setMessage('Login failed. Please check your credentials.');
          setIsSuccess(false);
        }
      })
      .catch(err => {
        setMessage('An error occurred. Please try again.');
        setIsSuccess(false);
      });
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f7f7f7]">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#c84772]">Login</h2>
        {message && (
          <div className={`mb-4 p-2 rounded text-center ${isSuccess ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {message}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor='email' className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type='email'
              name='email'
              className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#c84772]'
              placeholder='Enter Email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor='password' className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type='password'
              name='password'
              className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#c84772]'
              placeholder='Enter Password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type='submit'
            className='w-full py-2 bg-gradient-to-r from-[#c84772] to-[#d46e8f] text-white font-bold rounded-md hover:bg-gradient-to-l hover:from-[#d46e8f] hover:to-[#c84772] transition-colors duration-300'
          >
            Log In
          </button>

          <p className="mt-4 text-center text-gray-600">Don't have an Account?</p>
          <Link to='/register' className='block mt-2 text-center text-[#c84772] hover:text-[#a93359]'>
            <button className='w-full py-2 bg-white border border-[#c84772] text-[#c84772] rounded-md hover:bg-[#f7f7f7]'>
              Register
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
