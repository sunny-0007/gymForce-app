export default function Hero({ onOpenForm }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-black to-pink-900/30" />
      <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover opacity-30">
        <source src="https://assets.mixkit.co/videos/preview/mixkit-athlete-training-on-the-gym-bars-33821-large.mp4" />
      </video>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-6xl md:text-9xl font-display leading-none mb-6 text-gray-500">
          BECOME <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            UNBREAKABLE
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Premium training • World-class coaches • Real results
        </p>
        <button 
          onClick={() => onOpenForm('Pro')}
          className="px-12 py-6 text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition">
          Start Your Journey
        </button>
      </div>
    </section>
  )
}