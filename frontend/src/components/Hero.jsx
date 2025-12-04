import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen mt-10 flex items-center justify-center custom-scrollbar">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-black to-pink-900/30" />

      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-athlete-training-on-the-gym-bars-33821-large.mp4" />
      </video>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-display leading-tight sm:leading-tight md:leading-tight mb-4 sm:mb-6 text-gray-500">
          BECOME <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            UNBREAKABLE
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto">
          Premium training • World-class coaches • Real results
        </p>
        <button
          onClick={() => navigate(`/register?plan=${"pro"}`)}
          className="px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition"
        >
          Start Your Journey
        </button>
      </div>
    </section>
  );
}
