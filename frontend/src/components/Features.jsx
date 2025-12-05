import { QrCode, Users, Calendar, Trophy, Clock, Dumbbell } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <QrCode className="w-8 h-8" />,
      title: "QR Code Access",
      description: "Instant check-in with your digital membership card. No more physical cards or paperwork."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Easy Registration",
      description: "Quick and simple sign-up process. Start your fitness journey in minutes."
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Track Attendance",
      description: "Monitor your gym visits and maintain consistency with detailed attendance history."
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Flexible Plans",
      description: "Choose from various membership options that suit your fitness goals and budget."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Real-time Updates",
      description: "Get instant notifications about classes, schedules, and gym announcements."
    },
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: "Premium Facilities",
      description: "Access state-of-the-art equipment and world-class training facilities."
    }
  ];

  return (
    <div className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Why Choose Us?
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto">
            Modern features designed to make your gym experience effortless
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;