export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <h1 className="text-4xl font-display bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          GYMFORCE
        </h1>
        <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold hover:scale-105 transition">
          Join Now
        </button>
      </div>
    </nav>
  )
}