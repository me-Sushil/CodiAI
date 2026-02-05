import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// useIsSignedIn — a Clerk hook that tells us if the user is logged in
import { useAuth } from '@clerk/clerk-react';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Learning from "./pages/Learning";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ProtectedRoute from "./routes/ProtectedRoute";

const App = () => {
  // Check if the user is currently signed in using Clerk
  const { isLoaded, isSignedIn } = useAuth();
if (!isLoaded) return null;
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isSignedIn ? <Navigate to="/home" /> : <Login />}
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/learning"
          element={
            <ProtectedRoute>
              <Learning />
            </ProtectedRoute>
          }
        />

        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <AboutUs />
            </ProtectedRoute>
          }
        />

        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <ContactUs />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
