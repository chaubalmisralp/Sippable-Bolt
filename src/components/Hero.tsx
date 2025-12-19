import { ArrowRight, Coffee } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-6">
              <Coffee className="w-4 h-4" />
              <span className="text-sm font-semibold">Premium Beverage Solutions</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your Space with
              <span className="text-amber-700"> Premium Coffee Vending</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Zero investment. Zero hassle. Maximum convenience. Sippable delivers world-class coffee vending machines to train stations, bus stops, offices, malls, and food courts with complete turnkey service.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="bg-amber-700 text-white px-8 py-4 rounded-lg hover:bg-amber-800 font-semibold text-lg transition flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <span>Request a Proposal</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-amber-700 text-amber-700 px-8 py-4 rounded-lg hover:bg-amber-50 font-semibold text-lg transition"
              >
                Learn More
              </button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-amber-700">30+</div>
                <div className="text-gray-600 text-sm mt-1">Beverage Options</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-700">24/7</div>
                <div className="text-gray-600 text-sm mt-1">Availability</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-700">0%</div>
                <div className="text-gray-600 text-sm mt-1">Capital Required</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-amber-600 to-orange-700 rounded-2xl p-8 shadow-2xl transform rotate-2 hover:rotate-0 transition duration-300">
              <img
                src="https://images.pexels.com/photos/6347888/pexels-photo-6347888.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Coffee vending machine"
                className="rounded-lg w-full h-auto"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Coffee className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">100% Turnkey</div>
                  <div className="text-sm text-gray-600">We handle everything</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}