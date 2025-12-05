
import { useNavigate } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';

const Pricing = () => {
  
  const navigate = useNavigate();

  const handleRegistration = () =>{
    navigate('/register');
  }

  const plans = [
    {
      name: "Monthly Plan",
      price: "₹999",
      duration: "30 days",
      discount: null,
      features: [
        "Access to gym equipment",
        "Basic training support",
        "Locker facility"
      ],
      popular: false
    },
    {
      name: "Quarterly Plan",
      price: "₹2499",
      duration: "90 days",
      discount: "15% OFF",
      features: [
        "Access to gym equipment",
        "Personal training sessions",
        "Diet consultation",
        "Locker facility"
      ],
      popular: false
    },
    {
      name: "Yearly Plan",
      price: "₹7999",
      duration: "365 days",
      discount: "35% OFF",
      features: [
        "Access to gym equipment",
        "Unlimited personal training",
        "Diet & nutrition plan",
        "Yoga & Zumba classes",
        "Premium locker"
      ],
      popular: true
    }
  ];

  return (
    <div className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Membership Plans
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto">
            Choose the perfect plan that fits your fitness goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                plan.popular ? 'border-2 border-orange-500 lg:scale-105' : 'border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-5xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-500">/ {plan.duration}</span>
                </div>
                {plan.discount && (
                  <div className="inline-block bg-cyan-100 text-cyan-700 px-4 py-1.5 rounded-full text-sm font-semibold">
                    {plan.discount}
                  </div>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-orange-600 text-xl leading-none">•</span>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
                onClick={() => handleRegistration(plan.name)}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;