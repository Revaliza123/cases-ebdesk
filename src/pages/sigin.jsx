import React, { useState } from 'react';
import orang from '../assets/gambar1.png';
import logo from '../assets/Vector.png';

export default function Signin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: username,
          password: password
        })
      });
      const data = await response.json();
      console.log(data); // You can handle the data as per your requirements
    } catch (error) {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* ... (unchanged) */}
            {/* Left Column (Hidden on Medium Screens) */}
            <div className='hidden md:flex flex-col w-1/3 bg-gray-200'>
        <div className="flex grid-rows-2">
          <img className='ms-8 mt-9' src={logo} alt="Logoipsum" />
          <h4 className="text-black ms-2 mt-9 w-30 font-bold">Logoipsum</h4>
        </div>
        <div className="">
          <img className="mt-14 ms-3" src={orang} alt=""/>p
          <h4 className="text-center text-black text-2xl font-sans font-bold">Services</h4>
          <p className="text-center text-sm ms-5 me-5 mt-4">An expert team helps you to analyze your political power.</p>
          <p className="text-center text-sm ms-5 me-5 mt-2">An expert team.</p>
          <p className="text-sm mt-[110px] ms-2">©2020 All Rights Reserved. PT Indonesia Indicator</p>
        </div> 
      </div>

      {/* Right Column - Login Form (Full width on Medium Screens) */}
      <div className="container flex items-center justify-center w-full md:2/3 bg-white">
        <div className='w-full lg:w-1/2 md:1/2 p-8 font-sans'>
          <h3 className="text-3xl font-bold mb-2">Welcome to Logo Ipsum</h3>
          <p className='text-sm mb-8'>Don't have an account? <span className="font-none text-[#2161D5] font-bold"><a href="">Sign Up</a></span></p>
          <form className="flex flex-col">
            <label htmlFor="username" className="text-lg mb-2 font-semibold">Username<span className='text-red-700'>*</span></label>
            <input 
              type="text" 
              id="username" 
              className="border rounded-md p-2 mb-4" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
            />

            <label htmlFor="password" className="text-lg mb-2 font-semibold">Password<span className='text-red-700'>*</span></label>
            <input 
              type="password" 
              id="password" 
              className="border rounded-md p-2 mb-4" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
            
            {/* Remember Me Checkbox */}
            <div className="flex items-center mb-4">
              <input type="checkbox" id="rememberMe" className="mr-2" />
              <label htmlFor="rememberMe" className="text-sm">Remember Me</label>
            </div>

          </form>
          <button 
            type="button" 
            onClick={handleLogin}  // Call the handleLogin function on button click
            className="bg-[#2161D5] text-white px-4 py-3 rounded-md w-full"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
