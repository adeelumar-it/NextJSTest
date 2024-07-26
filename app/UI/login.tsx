import Link from 'next/link';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

function LoginPage() {
    const navigate=useNavigate();

    const Show_Home = () => {
        navigate("/");
      };
  return (
    <div>    <div>
    <button className="hover:bg-blue-700 hover:text-white font-bold py-2 px-2 ml-3 rounded">
      <Link href={""} onClick={Show_Home}>
        <CloseRoundedIcon />Cancel
      </Link>
    </button>
  </div>
    <div className="min-h-screen flex items-center justify-center" style={{ background: "#f6f1f1f" }}>
      
      <div className="w-96" style={{ border: "solid gainsboro", borderRadius: "11px" }}>
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl text-center font-semibold mb-4">Signin</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border-gray-300 border rounded-md py-2 px-3"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full border-gray-300 border rounded-md py-2 px-3"
              />
            </div>
            <div className="text-center">
              <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Signin
              </button>
            </div>
            <div className="text-center">
              <span>
                Don't have an account?
                <Link href="/signup" className="w-full py-2 px-4 rounded-md text-blue-500 mt-2">
                  Sign Up
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>

  );
}

export default LoginPage;
