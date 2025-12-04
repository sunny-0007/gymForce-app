export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black to-purple-950 text-gray-300 py-16 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-4xl font-display bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            GYMFORCE
          </h2>
          <p className="mt-4 text-gray-400 leading-relaxed">
            Transform your body. Strengthen your mind. Join the elite.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li className="hover:text-white transition cursor-pointer">Membership Plans</li>
            <li className="hover:text-white transition cursor-pointer">Trainers</li>
            <li className="hover:text-white transition cursor-pointer">Contact Us</li>
            <li className="hover:text-white transition cursor-pointer">About</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex gap-5 text-2xl">
            <a href="#" className="hover:text-white transition">📘</a>
            <a href="#" className="hover:text-white transition">📸</a>
            <a href="#" className="hover:text-white transition">▶️</a>
            <a href="#" className="hover:text-white transition">🐦</a>
          </div>
        </div>

      </div>

      <div className="text-center text-gray-500 mt-14 border-t border-white/10 pt-8 text-sm">
        © {new Date().getFullYear()} GYMFORCE. All Rights Reserved.
      </div>
    </footer>
  )
}
