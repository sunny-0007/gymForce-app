const CTA = () => {
  return (
    <div className="py-20 lg:py-28 bg-gradient-to-r from-orange-500 via-orange-600 to-cyan-500 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 max-w-4xl">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          Ready to Start Your Fitness Journey?
        </h2>
        <p className="text-white/90 text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Join hundreds of members who are already achieving their fitness goals with us.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white hover:bg-gray-100 text-orange-600 font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            Register Now
          </button>
          <button className="bg-white/10 hover:bg-white/20 text-white font-semibold border-2 border-white px-8 py-4 text-lg rounded-xl backdrop-blur-sm transition-all duration-300">
            Scan QR Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;