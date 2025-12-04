import { useNavigate } from "react-router-dom";

const plans = [
  { name: "warrior", price: "₹1,499", color: "from-gray-600 to-gray-800", popular: false },
  { name: "legend", price: "₹2,999", color: "from-purple-600 to-pink-600", popular: true },
  { name: "titan", price: "₹5,999", color: "from-yellow-600 to-orange-700", popular: false }
];

export default function Plans() {
  const navigate = useNavigate(); // ✅ Correctly use useNavigate

  return (
    <section className="py-20 md:py-32 px-4 md:px-6 bg-gradient-to-b from-black to-purple-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display text-center mb-14 md:mb-20">
          Choose Your Path
        </h2>
        <br />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
          {plans.map((p) => (
            <div
              key={p.name}
              className="relative group cursor-pointer"
              onClick={() => navigate(`/register?plan=${p.name}`)}
            >
              {/* Responsive Badge */}
              {p.popular && (
                <div className="
                  absolute 
                  -top-120 md:-top-20 
                  left-1/2 -translate-x-1/2
                  px-5 py-2 md:px-10 md:py-4
                  bg-gradient-to-r from-purple-600 to-pink-600
                  rounded-full 
                  text-xs md:text-sm font-bold
                ">
                  MOST CHOSEN
                </div>
              )}

              <div className={`
                p-6 md:p-10 
                rounded-3xl 
                bg-gradient-to-br ${p.color} 
                backdrop-blur-xl 
                border border-white/20 
                hover:border-white/50 
                transition-all 
                hover:-translate-y-3 md:hover:-translate-y-4
              `}>
                <h3 className="text-3xl md:text-4xl font-display mb-4">{p.name}</h3>

                <p className="text-4xl md:text-5xl font-bold mb-6 md:mb-8">
                  {p.price}
                  <span className="text-lg md:text-xl">/mo</span>
                </p>

                <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 text-left text-sm md:text-base">
                  <li className="flex items-center gap-3">Unlimited Gym Access</li>
                  <li className="flex items-center gap-3">Personal Trainer (2x/week)</li>
                  <li className="flex items-center gap-3">Custom Diet Plan</li>
                  <li className="flex items-center gap-3">24/7 Support</li>
                </ul>

                <button className="
                  w-full 
                  py-3 md:py-4 
                  bg-white/20 
                  backdrop-blur 
                  rounded-2xl 
                  font-bold 
                  hover:bg-white/30 
                  transition
                ">
                  Select {p.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
