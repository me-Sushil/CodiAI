// Register.jsx
// This is the REGISTER (Sign Up) page for TexasAI.
// It maintains the professional dark background with the default white Clerk UI.

import React from 'react';
import { SignUp } from '@clerk/clerk-react'; 
import { Link } from 'react-router-dom';

function Register() {
  return (
    // Applied the TexasAI dark background (#050505)
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md">
        <SignUp
          signInUrl="/"
          redirectUrl="/home"
          appearance={{
            // Note: baseTheme is NOT set to dark, keeping the card White as requested
            elements: {
              card: 'shadow-2xl rounded-2xl border border-gray-100',
              // Hide the default "Sign In" link inside Clerk's component
              footerAction: { display: 'none' },
            },
          }}
        />
      </div>

      {/* Manual link styled to be visible on the dark background */}
      <p className="mt-6 text-zinc-400 text-sm">
        Already have an account?{' '}
        <Link to="/" className="text-red-500 font-semibold hover:text-red-400 transition">
          Sign in here
        </Link>
      </p>
    </div>
  );
}

export default Register;