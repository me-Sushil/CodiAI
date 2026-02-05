// ContactUs.jsx
import React, { useState } from 'react'; 
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactUs = () => {
  const [name, setName] = useState('');        
  const [email, setEmail] = useState('');       
  const [message, setMessage] = useState('');   
  const [submitted, setSubmitted] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#050505] text-zinc-100 flex flex-col">
        <Navbar />
        <div className="max-w-2xl mx-auto px-4 py-32 text-center flex-grow">
          <div className="text-6xl mb-6 drop-shadow-[0_0_15px_rgba(34,197,94,0.4)]">✅</div>
          <h2 className="text-3xl font-bold text-white">Transmission Received</h2>
          <p className="text-zinc-500 mt-4 text-lg font-light">
            Thank you, <span className="text-red-500 font-medium">{name}</span>. Our neural agents will analyze your message and respond shortly.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setName('');
              setEmail('');
              setMessage('');
            }}
            className="mt-10 bg-white text-black px-8 py-3 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-red-700 hover:text-white transition-all duration-300"
          >
            Send Another Message
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 flex flex-col">
      <Navbar />

      <main className="max-w-2xl mx-auto px-4 py-20 flex-grow">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tighter">
            Contact <span className="bg-gradient-to-r from-white via-red-500 to-red-800 bg-clip-text text-transparent">CodiAI</span>
          </h1>
          <p className="text-zinc-500 mt-3 text-lg font-light">
            Have a question? Our team is ready to assist you.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-zinc-900/30 rounded-3xl border border-zinc-800 p-10 shadow-2xl backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                value={name}                  
                onChange={(e) => setName(e.target.value)} 
                placeholder="Aashis N"
                required                         
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-700 focus:outline-none focus:border-red-700 focus:ring-1 focus:ring-red-700/50 transition-all"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">
                Your Email
              </label>
              <input
                id="email"
                type="email"                  
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="aashis@gmail.com"
                required
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-700 focus:outline-none focus:border-red-700 focus:ring-1 focus:ring-red-700/50 transition-all"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                rows={4}                       
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="How can we help you?"
                required
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-700 resize-none focus:outline-none focus:border-red-700 focus:ring-1 focus:ring-red-700/50 transition-all"
              />
            </div>

            <button
              type="submit"  
              className="w-full bg-red-700 text-white font-bold py-4 rounded-xl hover:bg-red-600 transition-all duration-300 shadow-[0_0_20px_rgba(185,28,28,0.2)]"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: "📍", label: "Location", val: "Kathmandu, NP" },
            { icon: "📧", label: "Email", val: "hello@texasai.com" },
            { icon: "📞", label: "Phone", val: "+(977) 123-4567" }
          ].map((item, i) => (
            <div key={i} className="bg-zinc-900/20 rounded-2xl border border-zinc-800 p-6 text-center hover:bg-zinc-900/40 transition-colors">
              <div className="text-2xl mb-2">{item.icon}</div>
              <p className="text-[10px] uppercase font-bold text-zinc-500 tracking-tighter">{item.label}</p>
              <p className="text-sm font-medium text-zinc-200">{item.val}</p>
            </div>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default ContactUs;