import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useRef, useEffect } from "react";
import { GoogleGenAI } from "@google/genai";
import FormattedAIResponse from "../components/FormattedAIResponse";
import LoadingAnimation from "../components/LoadingAnimation";
const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
const ai = new GoogleGenAI({ apiKey });

const Learning = () => {
  const [userRequest, setUserRequest] = useState("");

  const [topic, setTopic] = useState("");
  const [messages, setMessages] = useState([]); // array of { sender: "user" | "ai", text: string }
  const [isLoading, setIsLoading] = useState(false);
  const textareaRef = useRef(null); // Added ref for textarea

const scrollRef = useRef(null); // Ref for auto-scrolling
  // 1. Load data from LocalStorage on initial mount
  useEffect(() => {
    const topicLocal = JSON.parse(localStorage.getItem("topic"));
    const savedMessages = JSON.parse(localStorage.getItem("chat_history"));
    
    setTopic(topicLocal || "");
    if (savedMessages) {
      setMessages(savedMessages);
    }
  }, []);

  // 2. Save to LocalStorage whenever messages update
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem("chat_history", JSON.stringify(messages));
    }
    // Auto-scroll to bottom when new message arrives
    // if (scrollRef.current) {
    //   scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    // }
  }, [messages]);


  const scrollToBottom = () => {
  if (scrollRef.current) {
    // We use a slight delay to allow the DOM to update heights
    setTimeout(() => {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }, 100);
  }
};

// Trigger when messages change OR when loading starts/stops
useEffect(() => {
  scrollToBottom();
}, [messages, isLoading]);

useEffect(() => {
  if (textareaRef.current) {
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  }
}, [userRequest]); // Every time the text changes, adjust height

  const handleRequest = async () => {
    setIsLoading(true);
    if (!topic) {
      setIsLoading(false);
      return console.log("Select topic first");
    }
    if (!userRequest || userRequest.trim() === "") {
      setIsLoading(false);
      return console.log("type your question");
    }

    localStorage.setItem("topic", JSON.stringify(topic));
    const currentRequest = userRequest.trim();
    setUserRequest("");

    // push user message into conversation
    setMessages((prev) => [...prev, { sender: "user", text: currentRequest }]);

    const prompt = `
You are an expert ${topic} educator with 10+ years of teaching experience.
Respond to this user request: "${currentRequest}"
If the user is making casual conversation or greeting, respond naturally and conversationally.
For educational requests, provide a clear, structured response following this exact format:

OUTPUT FORMAT REQUIREMENTS:
- Return ONLY valid JSON with no additional text outside the JSON structure.
- Output must be an array containing exactly 1 object.
- The object MUST strictly follow this schema:

{
  "summary": "A concise 4-word headline summary from user question if question is one or two word use your intellegence and make it 4 word",
  "answer": "Your complete response here following the three-part structure below"
}

RESPONSE RULES:
1. "summary" must always be a short, exactly 4-word headline that give user understand what the question is also you can add ... also .
   Example: "DOM and VDOM in javascript"
2. "answer" must always contain three labeled sections in plain text:

EXPLANATION:
Step-by-step breakdown with simple language, assuming no prior knowledge.

EXAMPLE:
A practical, working example with input/output. Use readable text without markdown.

SUMMARY:
A detailed overview covering:
- What (definition)
- When (use cases)
- Where (context/environment)
- Why (benefits/importance)
- How (key methods/approaches)

FORMATTING RULES:
- Use plain text only (no markdown symbols like **, ##, or \`\`\`).
- Separate sections with clear headings.
- Use line breaks for readability.
- Ensure the response directly answers "${currentRequest}".

Remember: The entire response must strictly follow the JSON schema with both "summary" and "answer".`;
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });
      let cleanedResponse = response.text
        .replace(/```json\n?/g, "") // Remove ```json
        .replace(/```\n?/g, "") // Remove ```
        .trim(); // Remove extra whitespace
      console.log("test for response", response.text);
      const aiData = JSON.parse(cleanedResponse);
      // Gemini returns an ARRAY
      const aiItem = Array.isArray(aiData) ? aiData[0] : aiData;
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: aiItem?.answer || "No response generated. Please try again",
        },
      ]);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error, "Error to connect with AI");
    }
  };

  return (
    <>
      <div className="min-h-screen bg-[#050505] text-zinc-100 flex flex-col">
        <Navbar />

        <main className="flex-1 max-w-6xl mx-auto px-4 pt-2 py-12 w-full">
          {/* Header Section */}
          <div className="mb-1 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight flex flex-wrap items-baseline gap-2">
                Learning
                <span className="bg-gradient-to-r from-white via-red-500 to-red-800 bg-clip-text text-transparent">
                  Center
                </span>
                <span className="italic text-base font-normal text-zinc-400">
                  Interact with our specialized AI to master new skills.
                </span>
              </h1>
            </div>

            <div className="flex items-center gap-4">
              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="bg-zinc-900 border border-zinc-800 text-white text-sm rounded-xl px-4 py-2.5 focus:border-red-500 outline-none transition-all"
              >
                <option value="" disabled>
                  Select Subject
                </option>
                <option value="JavaScript">JavaScript</option>
                <option value="React">React</option>
                <option value="Python">Python</option>
                 <option value="Python">HTML/CSS</option>
                  <option value="Python">Machine Learning</option>
              </select>
            </div>
          </div>

          {/* --- CHAT INTERFACE START --- */}
          <div className="bg-zinc-900/20 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl mb-16">
            <div className="flex flex-col h-[600px]">
              {/* Messages Area */}
              <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar overflow-hidden">
                {messages.length === 0 && !isLoading && (
                  <div className="h-full flex flex-col items-center justify-center text-zinc-600">
                    <span className="text-4xl mb-4">🤖</span>
                    <p>
                      Choose a topic and ask anything to begin your session.
                    </p>
                  </div>
                )}
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] p-5 rounded-2xl ${
                        msg.sender === "user"
                          ? "bg-zinc-800 border border-zinc-700 text-zinc-100"
                          : "bg-zinc-900/80 border border-red-900/20 text-zinc-300 shadow-inner"
                      }`}
                    >
                      {msg.sender === "user" ? (
                        <p className="text-sm leading-relaxed">{msg.text}</p>
                      ) : (
                        <FormattedAIResponse text={msg.text} />
                      )}
                    </div>
                  </div>
                ))}
                {isLoading && <LoadingAnimation />}
              </div>

              {/* Input Area */}
              <div className="p-6 bg-zinc-900/40 border-t border-zinc-800 ">
                <div className="relative flex items-end gap-2 ">
                  <textarea
                    ref={textareaRef}
                    value={userRequest}
                    onChange={(e) => setUserRequest(e.target.value)}
                    onKeyDown={(e) =>
                      e.key === "Enter" &&
                      !e.shiftKey &&
                      (e.preventDefault(), handleRequest())
                    }
                    placeholder="Ask a technical question..."
                    rows={1}
                    className="flex-1 bg-zinc-950 border border-zinc-800 rounded-2xl px-5 py-4 text-sm focus:border-red-500/50 outline-none resize-none transition-all placeholder:text-zinc-700 custom-scrollbar overflow-hidden"
                  />
                  <button
                    onClick={handleRequest}
                    disabled={isLoading}
                    className="bg-white text-black h-[52px] px-8 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-red-600 hover:text-white disabled:opacity-50 transition-all"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};
export default Learning;



