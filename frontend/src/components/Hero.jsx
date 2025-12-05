import { Dumbbell } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1664301427534-28b6a53a9c4f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      ></div>

      {/* Blur + Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/40 to-transparent"></div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center pl-2">
        <div className="max-w-2xl px-4 sm:px-8 md:px-10 lg:px-32 ">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-orange-500 font-semibold px-4 py-2 rounded-full shadow">
            <Dumbbell className="w-4 h-4 text-orange-500" />
            <span className="text-sm">Smart Gym Management</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-5xl font-extrabold leading-tight mt-6">
            <span className="text-black">Transform Your</span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-transparent bg-clip-text">
              Fitness Journey
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-gray-700 text-lg max-w-xl">
            Experience seamless gym management with digital
            membership cards, QR-based attendance, and instant
            access to your fitness progress.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-10">
            <button className="px-8 py-4 rounded-xl text-white font-semibold bg-gradient-to-r from-orange-500 to-teal-500 shadow hover:opacity-90 transition">
              Get Started
            </button>
            <button className="px-8 py-4 rounded-xl font-semibold bg-white shadow">
              Member Login
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
