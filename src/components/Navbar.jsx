// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useClerk, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const { signOut } = useClerk();
  const { user } = useUser();

  return (
    // Updated to bg-zinc-950 and border-b for a clean look
    <nav className="bg-zinc-950 border-b border-zinc-900 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* TexasAI Logo - Adjusted gradient for dark background */}
        <Link
          to="/home"
          className="text-2xl font-bold tracking-tighter transition 
             bg-gradient-to-r from-white via-red-500 to-red-800 
             bg-clip-text text-transparent hover:opacity-80"
        >
          CodiAI
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8">
          {[
            { name: "Home", path: "/home" },
            { name: "Learning", path: "/learning" },
            { name: "About Us", path: "/about" },
            { name: "Contact Us", path: "/contact" },
          ].map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-zinc-400 font-medium hover:text-white transition text-sm"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* User Actions */}
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-end">
            <span className="text-zinc-500 text-[10px] uppercase tracking-widest">Logged in as</span>
            <span className="text-zinc-200 text-sm font-medium">
              {user?.firstName || "User"}
            </span>
          </div>
          
          <button
            onClick={() => signOut(() => (window.location.href = "/"))}
            className="bg-zinc-100 text-black text-xs font-bold px-4 py-2 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300"
          >
            SIGN OUT
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;