/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password)
    setEmail('');
    setPassword('');
  };

  return (
    <div className='flex h-screen w-screen items-center justify-center bg-[#1c1c1c] '>
      <div className='border border-emerald-500 shadow-xl rounded-lg p-12 bg-white/30  max-w-md w-full backdrop-blur-sm '>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className='flex flex-col items-center'
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className='outline-none bg-teal-50 border border-gray-300 focus:border-teal-400 font-medium text-base py-3 px-5 rounded-lg placeholder-gray-500 text-gray-800 transition duration-300 w-full'
            type='email'
            placeholder='Enter your email'
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className='outline-none bg-teal-50 border border-gray-300 focus:border-teal-400 font-medium text-base py-3 px-5 rounded-lg mt-4 placeholder-gray-500 text-gray-800 transition duration-300 w-full'
            type='password'
            placeholder='Enter password'
          />
          <button className='mt-6 text-white bg-teal-600 hover:bg-teal-700 font-semibold text-lg py-3 px-6 w-full rounded-lg transition duration-300'>
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
