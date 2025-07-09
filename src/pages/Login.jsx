import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { logInWithEmailAndPassword } from '../hooks/HandleLogin';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passVisible, setPassVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogin = async () => {
    if (email && password) {
      try {
        const check = await logInWithEmailAndPassword(email, password);
        if (check?.status === 200) {
          toast.success('User Login Successfully.');
          navigate('/list');
        } else {
          toast.error('Invalid email or password.');
        }
      } catch (error) {
        toast.error("Something went Wrong...")
      }

    } else {
      toast.error('All fields are required.', {

      });
    }
  };

  return (
    <div className="h-full w-full flex items-center justify-center px-4">
      {isMobile ? (
        <main className="py-8 px-4 lg:px-12 text-center">
          <p className="text-lg lg:text-xl">
            This page is designed for desktop users. For the best experience, please access it from a desktop or laptop device.
          </p>
        </main>
      ) : (
        <div className="w-full max-w-xl bg-white backdrop-blur-md  border border-black/20 shadow-lg rounded-lg p-8 space-y-6">
          <h2 className="text-2xl font-bold text-blue-800">Login to Your Account</h2>

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="relative">
            <input
              type={passVisible ? 'text' : 'password'}
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setPassVisible(!passVisible)}
              className="absolute right-3 top-2 text-xl"
              title="Toggle password visibility"
            >
              🔑
            </button>
          </div>

          <button
            onClick={handleLogin}
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>

          <p className="text-sm text-gray-600">
            Don't have an account?
            <Link to="/register" className="text-blue-600 font-medium ml-1 hover:underline">
              Register
            </Link>
          </p>
        </div>
      )}
    </div>
  );
}

export default Login;
