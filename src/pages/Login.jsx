// Login.jsx
import React from 'react';
import { SignIn } from '@clerk/clerk-react'; 
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    // Only this wrapper gets the dark background
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center px-4">

      <div className="w-full max-w-md">
        <SignIn
          redirectUrl="/home"
          appearance={{
            // Note: I removed 'baseTheme: dark' so the card stays White
            elements: {
              card: 'shadow-2xl rounded-2xl border border-gray-100', // Light border for the white card
              footerAction: { display: 'none' }, // Keeping your specific hide rule
            },
          }}
        />
      </div>

      {/* Register Link styled to be visible on the dark background */}
      <p className="mt-6 text-zinc-400 text-sm">
        Don't have an account?{' '}
        <Link to="/register" className="text-red-500 font-semibold hover:text-red-400 transition">
          Register here
        </Link>
      </p>
    </div>
  );
}

export default Login;