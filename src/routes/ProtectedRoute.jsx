
import React from 'react';
import { Navigate } from 'react-router-dom';

// useAuth — Clerk hook that gives us:
//   isLoaded: true when Clerk has finished checking if user is signed in
//   isSignedIn: true if the user is currently logged in
import { useAuth } from '@clerk/clerk-react';

function ProtectedRoute({ children }) {
  // Get auth state from Clerk
  const { isLoaded, isSignedIn } = useAuth();

  // CASE 1: Clerk is still loading (checking the session)
  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-3 text-gray-600 font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  // CASE 2: Clerk is loaded but user is NOT signed in
  // Redirect them to the login page "/"
  if (!isSignedIn) {
    return <Navigate to="/" />;
  }

  // CASE 3: User IS signed in → show the actual page content
  return children;
}

export default ProtectedRoute;