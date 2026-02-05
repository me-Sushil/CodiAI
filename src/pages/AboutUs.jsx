// AboutUs.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const teamMembers = [
  { name: "Sushil Bishowkarma", role: "CEO & AI Ethics Lead", avatar: "👩‍💼" },
  { name: "Aashis Bro", role: "Chief Architect (ML)", avatar: "👨‍💻" },
  { name: "Section F Students", role: "Head of Experience", avatar: "👩‍🎨" },
  { name: "Laxmi Sis", role: "Lead Data Scientist", avatar: "👨‍🔬" },
];

function AboutUs() {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 flex flex-col">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 py-20 flex-grow">
        {/* Page Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-extrabold tracking-tighter">
            About <span className="bg-gradient-to-r from-white via-red-500 to-red-800 bg-clip-text text-transparent">CodiAI</span>
          </h1>
          <p className="text-zinc-500 mt-6 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Redefining the future of education by blending cutting-edge
            artificial intelligence with human-centric learning.
          </p>
        </div>

        {/* Mission Section - Glassmorphism */}
        <div className="bg-zinc-900/30 rounded-3xl border border-zinc-800 p-10 mb-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-900/10 blur-[60px] rounded-full"></div>
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <span className="text-red-600 text-3xl">🎯</span> Our Mission
          </h2>
          <p className="text-zinc-400 leading-relaxed text-lg font-light">
            At <span className="text-white font-medium">CodiAI</span>, we democratize technical
            education through personalized AI guidance. We believe every
            student deserves a tutor that never sleeps. By leveraging Large
            Language Models, we identify your skill gaps and help you bridge them in record time.
          </p>
        </div>

        {/* Advantage Section */}
        <div className="bg-zinc-900/30 rounded-3xl border border-zinc-800 p-10 mb-20 shadow-2xl">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-red-600 text-3xl">💡</span> The CodiAI Advantage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: "🤖", title: "AI Tutoring", text: "Instant explanations and code reviews powered by neural networks." },
              { icon: "📈", title: "Adaptive Paths", text: "Learning journeys that evolve based on your real-time performance." },
              { icon: "🌍", title: "Global Access", text: "Breaking barriers to bring high-quality education worldwide." },
              { icon: "🔒", title: "Ethical AI", text: "We prioritize data privacy and transparency in every algorithm." },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-5 p-6 rounded-2xl bg-zinc-950/50 border border-zinc-800/50 group hover:border-red-900/50 transition-colors">
                <span className="text-3xl group-hover:scale-110 transition-transform">{item.icon}</span>
                <div>
                  <h4 className="font-bold text-zinc-100 mb-1">{item.title}</h4>
                  <p className="text-sm text-zinc-500 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">
            👥 The Minds Behind the AI
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-zinc-900/20 rounded-3xl border border-zinc-800 p-8 text-center hover:bg-zinc-900/40 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-6xl mb-4 grayscale hover:grayscale-0 transition duration-500">
                  {member.avatar}
                </div>
                <h3 className="font-bold text-white text-lg">{member.name}</h3>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-600 mt-2">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Footer */}
        <div className="text-center p-12 bg-gradient-to-b from-zinc-900 to-[#050505] border border-zinc-800 rounded-[3rem] shadow-3xl">
          <h2 className="text-3xl font-extrabold text-white">
            Ready to start your AI journey?
          </h2>
          <p className="mt-4 text-zinc-500 max-w-md mx-auto">
            Join thousands of students learning on the edge of innovation.
          </p>
          <Link
            to="/learning"
            className="inline-block mt-10 px-10 py-4 bg-white text-black font-black text-xs uppercase tracking-widest rounded-full hover:bg-red-700 hover:text-white transition-all duration-300 shadow-xl"
          >
            Get Started for Free
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default AboutUs;