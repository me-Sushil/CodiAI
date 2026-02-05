// Home.jsx
import React from 'react';
import Navbar from '../components/Navbar'; 
import { useUser } from '@clerk/clerk-react'; 
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Home() {
  const { user } = useUser();

  return (
    // Body Background: True Dark (#050505)
    <div className="min-h-screen bg-[#050505] text-zinc-100 flex flex-col">

      {/* Navbar stays sticky at the top */}
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 py-16 flex-grow">

        {/* Welcome Section — Using a Dark Glassmorphism look */}
        <div className="relative overflow-hidden bg-zinc-900/40 border border-zinc-800 rounded-3xl p-10 shadow-2xl">
          {/* Subtle Red Glow behind the text */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-red-900/20 blur-[100px] rounded-full"></div>
          
          <div className="relative z-10">
            <h1 className="text-4xl font-extrabold tracking-tight mb-3">
              Welcome back, <span className="bg-gradient-to-r from-white to-red-500 bg-clip-text text-transparent">{user?.firstName || 'Innovator'}</span> 👋
            </h1>
            <p className="text-zinc-400 text-lg max-w-2xl font-light leading-relaxed">
              Your AI-powered learning journey continues here. Currently logged in as <span className="text-red-500 font-mono text-sm">{user?.emailAddresses?.[0]?.emailAddress}</span>.
            </p>
            
            <div className="mt-8 flex gap-4">
              <Link to="/learning" className="bg-red-700 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(185,28,28,0.3)]">
                Resume Learning
              </Link>
              <button className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 px-6 py-3 rounded-xl font-bold transition-all">
                View Progress
              </button>
            </div>
          </div>
        </div>

        {/* Section Title */}
        <div className="flex items-center gap-4 mt-16 mb-8">
            <h2 className="text-sm uppercase tracking-[0.3em] text-zinc-500 font-bold">Intelligence Hub</h2>
            <div className="h-[1px] bg-zinc-800 flex-grow"></div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card Component Helper */}
          {[
            { 
              to: "/learning", 
              icon: "🚀", 
              title: "AI Academy", 
              desc: "Deep dive into React, JavaScript and Python.",
              color: "hover:border-red-900" 
            },
            { 
              to: "/about", 
              icon: "🛡️", 
              title: "Our Vision", 
              desc: "How CodiAI is decentralizing knowledge worldwide.",
              color: "hover:border-zinc-500"
            },
            { 
              to: "/contact", 
              icon: "💬", 
              title: "AI Support", 
              desc: "Get 24/7 technical assistance from our neural agents.",
              color: "hover:border-red-900" 
            }
          ].map((card, idx) => (
            <Link
              key={idx}
              to={card.to}
              className={`group bg-zinc-900/20 border border-zinc-800 p-8 rounded-3xl transition-all duration-300 hover:bg-zinc-900/40 ${card.color} hover:-translate-y-2`}
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{card.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                {card.desc}
              </p>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Home;