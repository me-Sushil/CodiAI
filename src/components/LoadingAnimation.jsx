  const LoadingAnimation = () => (
    <div className="flex justify-start">fdfdgfdg
      <div className="bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-fuchsia-500/10 backdrop-blur-sm border border-violet-400/30 p-3 rounded-xl max-w-3xl relative overflow-hidden">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/5 via-violet-400/5 to-fuchsia-400/5"></div>
        <div className="flex items-center space-x-2 relative z-10">
          <div className="flex space-x-1">
            <div
              className="w-2 h-2 bg-violet-400 rounded-full animate-bounce"
              style={{ animationDelay: "0ms" }}
            ></div>
            <div
              className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
              style={{ animationDelay: "150ms" }}
            ></div>
            <div
              className="w-2 h-2 bg-fuchsia-400 rounded-full animate-bounce"
              style={{ animationDelay: "300ms" }}
            ></div>
          </div>
          <span className="text-slate-300 text-sm">AI is thinking...</span>
        </div>
      </div>
    </div>
  );

  export default LoadingAnimation;