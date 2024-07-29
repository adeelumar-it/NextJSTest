import * as React from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { CreateUser } from '../services/CreateUser';

interface SignupFormProps {
  onCancel: () => void;
  onShowSignin: () => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onCancel, onShowSignin }) => {
  const [name, setName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState<string | null>(null);
  const handleSigninClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    onShowSignin();
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

  
    CreateUser(name,email,password, (error: any, response: any) => {
      setLoading(false);
      if (response) {
        setSuccess('User created successfully');
        setTimeout(() => {
          onShowSignin();
        }, 2000);
        console.log(response);
      } else {
        setError(error);
        console.log(error);
      }
    });
  };

 
  return (
    <div>
      <div>
        <button
          className="hover:bg-blue-700 hover:text-white font-bold py-2 px-2 ml-3 rounded"
          onClick={onCancel}
        >
          <CloseRoundedIcon /> Cancel
        </button>
      </div>

      <div className="min-h-screen flex items-center justify-center">
        <div className="w-96" style={{ border: "solid gainsboro", borderRadius: "11px" }}>
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl text-center font-semibold mb-4">Sign Up</h2>
            {error && <div className="text-red-500 text-center mb-4">{error}</div>}
            {success && <div className="text-green-500 text-center mb-4">{success}</div>}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border-gray-300 border rounded-md py-2 px-3"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border-gray-300 border rounded-md py-2 px-3"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full border-gray-300 border rounded-md py-2 px-3"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                  disabled={loading}
                >
                  {loading ? 'Signing Up...' : 'Sign Up'}
                </button>
              </div>
              <div className="text-center mt-4">
                <span>
                  Already have an account?{' '}
                  <a href="#" onClick={handleSigninClick} className="text-blue-500">
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
