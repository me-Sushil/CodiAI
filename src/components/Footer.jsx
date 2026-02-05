// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    // Changed to a very dark gray (Zinc 950) with white text
    <footer className="bg-zinc-950 text-white border-t border-zinc-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            {/* The Logo stays in your Dark Red/Black gradient but on a dark bg */}
            <Link to="/" className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-white via-red-500 to-red-800 bg-clip-text text-transparent">
              CodiAI
            </Link>
            <p className="mt-4 text-zinc-400 text-sm leading-relaxed">
              Empowering the next generation of learners through personalized, 
              AI-driven educational experiences. Built for the future of tech.
            </p>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em] mb-6">Platform</h4>
            <ul className="space-y-4">
              <li><Link to="/courses" className="text-zinc-300 hover:text-red-500 transition text-sm">All Courses</Link></li>
              <li><Link to="/learning" className="text-zinc-300 hover:text-red-500 transition text-sm">AI Tutor</Link></li>
              <li><Link to="/roadmap" className="text-zinc-300 hover:text-red-500 transition text-sm">Learning Roadmap</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em] mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-zinc-300 hover:text-red-500 transition text-sm">About Us</Link></li>
              <li><Link to="/careers" className="text-zinc-300 hover:text-red-500 transition text-sm">Careers</Link></li>
              <li><Link to="/contact" className="text-zinc-300 hover:text-red-500 transition text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter / Social */}
          <div>
            <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em] mb-6">Stay Connected</h4>
            <div className="flex flex-col gap-4">
               <p className="text-zinc-400 text-sm">Join our AI newsletter for latest updates.</p>
               <div className="flex">
                 {/* Darker input field to match background */}
                 <input 
                   type="email" 
                   placeholder="Email address" 
                   className="bg-zinc-900 border border-zinc-800 text-zinc-100 text-sm rounded-l-lg px-4 py-2 w-full focus:outline-none focus:border-red-700"
                 />
                 <button className="bg-red-700 text-white px-4 py-2 rounded-r-lg hover:bg-red-600 transition">
                   →
                 </button>
               </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Dark Mode Version */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-xs font-medium">
            © {new Date().getFullYear()} CodiAI. All rights reserved. 
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-zinc-500 hover:text-white transition text-xs">Privacy Policy</Link>
            <Link to="/terms" className="text-zinc-500 hover:text-white transition text-xs">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;