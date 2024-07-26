import * as React from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';


const SignupForm = () => {
   
  return (
    <div>
      <div>
        <button className="hover:bg-blue-700 hover:text-white font-bold py-2 px-2 ml-3 rounded">
        
            <CloseRoundedIcon />Cancel
     
        </button>
      </div>

      <div className="min-h-screen flex items-center justify-center" style={{ background: "#f6f1f1" }}>
        <div className="w-96" style={{ border: "solid gainsboro", borderRadius: "11px" }}>
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl text-center font-semibold mb-4">Sign Up</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border-gray-300 border rounded-md py-2 px-3"
                />
              </div>
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
                <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                  Sign Up
                </button>
              </div>
              <div className="text-center mt-4">
                <span>
                  Already have an account?{' '}
                  <a href="" className="text-blue-500">
                    Sign In
                  </a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
